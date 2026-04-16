import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

const STORAGE_KEY = "quickcart_items";

const initialState = {
  items: [], // flat: {id, name, brand, category, price, image, weight, quantity}
  isCartOpen: false,
  isLoggedIn: false,
  user: null, // {name, phone}
  activeModal: null, // 'product' | 'payment' | 'success' | 'login' | 'map'
  modalData: null,
  orderTotal: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      // Support both flat payload and legacy {product} shape
      const rawItem = action.payload ?? action.product;
      // Normalize to flat shape (products.js uses imageUrl, flat shape uses image)
      const flat = {
        id: rawItem.id,
        name: rawItem.name,
        brand: rawItem.brand ?? "",
        category: rawItem.category ?? "",
        price: rawItem.price,
        originalPrice: rawItem.originalPrice ?? rawItem.price,
        image: rawItem.image ?? rawItem.imageUrl ?? "",
        weight: rawItem.weight ?? "",
      };
      const existing = state.items.find((i) => i.id === flat.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === flat.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return { ...state, items: [...state.items, { ...flat, quantity: 1 }] };
    }
    case "REMOVE_ITEM": {
      const id = action.payload ?? action.productId;
      return { ...state, items: state.items.filter((i) => i.id !== id) };
    }
    case "UPDATE_QTY":
    case "UPDATE_QUANTITY": {
      const id = action.payload?.id ?? action.productId;
      const qty = action.payload?.qty ?? action.quantity;
      if (qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== id) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity: qty } : i,
        ),
      };
    }
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "TOGGLE_CART":
      return { ...state, isCartOpen: !state.isCartOpen };
    case "OPEN_CART":
      return { ...state, isCartOpen: true };
    case "CLOSE_CART":
      return { ...state, isCartOpen: false };
    case "LOGIN":
      return { ...state, isLoggedIn: true, user: action.payload };
    case "LOGOUT":
      return { ...state, isLoggedIn: false, user: null };
    case "OPEN_MODAL":
      return {
        ...state,
        activeModal: action.payload.modal,
        modalData: action.payload.data ?? null,
      };
    case "CLOSE_MODAL":
      return { ...state, activeModal: null, modalData: null };
    case "SET_ORDER_TOTAL":
      return { ...state, orderTotal: action.payload };
    case "_LOAD_ITEMS":
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load persisted cart on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Handle both old nested shape and new flat shape
        const items = Array.isArray(parsed)
          ? parsed.map((i) => {
              if (i.product) {
                return {
                  id: i.product.id,
                  name: i.product.name,
                  brand: i.product.brand ?? "",
                  category: i.product.category ?? "",
                  price: i.product.price,
                  image: i.product.image ?? i.product.imageUrl ?? "",
                  weight: i.product.weight ?? "",
                  quantity: i.quantity ?? 1,
                };
              }
              return i;
            })
          : [];
        if (items.length > 0) {
          dispatch({ type: "_LOAD_ITEMS", payload: items });
        }
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  // Persist cart items on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // ignore
    }
  }, [state.items]);

  // ── Backward-compatible convenience methods (used by existing components) ──

  const addToCart = useCallback((product) => {
    dispatch({ type: "ADD_ITEM", product });
  }, []);

  const removeFromCart = useCallback((productId) => {
    dispatch({ type: "REMOVE_ITEM", productId });
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const toggleCart = useCallback(() => {
    dispatch({ type: "TOGGLE_CART" });
  }, []);

  const closeCart = useCallback(() => {
    dispatch({ type: "CLOSE_CART" });
  }, []);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);

  const totalPrice = state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0,
  );

  const getItemQuantity = useCallback(
    (productId) => state.items.find((i) => i.id === productId)?.quantity ?? 0,
    [state.items],
  );

  // isOpen alias for backward compat (old components check state.isOpen)
  const contextValue = {
    // New [state, dispatch] tuple pattern (index access)
    0: state,
    1: dispatch,

    // Spread state fields for direct destructuring
    ...state,

    // Legacy alias: old CartSidebar checks isOpen
    isOpen: state.isCartOpen,

    // Convenience methods (backward-compatible)
    dispatch,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    closeCart,
    totalItems,
    totalPrice,
    getItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

/**
 * Returns the context value which can be used two ways:
 *   const [state, dispatch] = useCart();   // new pattern
 *   const { addToCart, totalItems } = useCart(); // legacy pattern
 */
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
