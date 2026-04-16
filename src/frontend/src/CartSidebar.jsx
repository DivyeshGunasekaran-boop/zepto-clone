import {
  Minus,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Tag,
  Trash2,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useCart } from "./context/CartContext";

const FREE_DELIVERY_THRESHOLD = 200;
const DELIVERY_FEE = 30;
const PLATFORM_FEE = 5;

export default function CartSidebar() {
  const { isCartOpen, items, dispatch } = useCart();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;
  const deliveryFee = isFreeDelivery ? 0 : DELIVERY_FEE;
  const couponDiscount = couponApplied ? Math.round(subtotal * 0.05) : 0;
  const grandTotal = subtotal + deliveryFee + PLATFORM_FEE - couponDiscount;
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  const closeCart = () => dispatch({ type: "CLOSE_CART" });

  const handleApplyCoupon = () => {
    if (!coupon.trim()) {
      setCouponError("Please enter a coupon code");
      return;
    }
    if (coupon.toUpperCase() === "QUICK5") {
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code");
      setCouponApplied(false);
    }
  };

  const handleCheckout = () => {
    dispatch({ type: "SET_ORDER_TOTAL", payload: grandTotal });
    dispatch({ type: "OPEN_MODAL", payload: { modal: "payment" } });
    closeCart();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        role="button"
        tabIndex={0}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeCart}
        onKeyDown={(e) => {
          if (e.key === "Escape" || e.key === "Enter") closeCart();
        }}
        aria-label="Close cart"
        data-ocid="cart.overlay"
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[340px] sm:w-[380px] bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-label="Shopping cart"
        aria-hidden={!isCartOpen}
        data-ocid="cart.sidebar"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3.5 border-b"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div className="flex items-center gap-2.5">
            <ShoppingCart className="w-5 h-5" style={{ color: "#7B2FF7" }} />
            <div>
              <h2
                className="text-base font-extrabold"
                style={{ color: "#1a1a1a" }}
              >
                My Cart
              </h2>
              {items.length > 0 && (
                <p className="text-xs" style={{ color: "#6b7280" }}>
                  {totalItems} item{totalItems !== 1 ? "s" : ""}
                </p>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
            data-ocid="cart.close_button"
          >
            <X className="w-5 h-5" style={{ color: "#374151" }} />
          </button>
        </div>

        {/* Delivery badge */}
        {items.length > 0 && (
          <div
            className="mx-4 mt-3 px-3 py-2 rounded-xl flex items-center gap-2"
            style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
          >
            <Zap
              className="w-4 h-4 flex-shrink-0"
              style={{ color: "#0C831F" }}
            />
            <p className="text-xs font-bold" style={{ color: "#0C831F" }}>
              ⚡ Delivery in <span className="font-extrabold">10 minutes</span>
            </p>
          </div>
        )}

        {/* Items list */}
        <div className="flex-1 overflow-y-auto px-4 py-3">
          {items.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center h-full gap-5 py-16"
              data-ocid="cart.empty_state"
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#f5f0ff" }}
              >
                <ShoppingBag
                  className="w-10 h-10"
                  style={{ color: "#7B2FF7" }}
                />
              </div>
              <div className="text-center">
                <p
                  className="text-lg font-extrabold"
                  style={{ color: "#1a1a1a" }}
                >
                  Your cart is empty
                </p>
                <p className="text-sm mt-1.5" style={{ color: "#6b7280" }}>
                  Add items to get started
                </p>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="px-8 py-2.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#7B2FF7" }}
                data-ocid="cart.shop_now_button"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="space-y-0" data-ocid="cart.list">
              {items.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 py-3.5 border-b last:border-0"
                  style={{ borderColor: "#f3f4f6" }}
                  data-ocid={`cart.item.${idx + 1}`}
                >
                  {/* Thumbnail */}
                  <div
                    className="w-16 h-16 rounded-xl flex-shrink-0 overflow-hidden"
                    style={{ border: "1px solid #e5e7eb" }}
                  >
                    <img
                      src={
                        item.image ||
                        `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='10' fill='%236b7280' text-anchor='middle' dy='.3em'%3EItem%3C/text%3E%3C/svg%3E`
                      }
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='10' fill='%236b7280' text-anchor='middle' dy='.3em'%3EItem%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-semibold line-clamp-2 leading-snug"
                      style={{ color: "#111827" }}
                    >
                      {item.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>
                      {item.weight}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <p
                        className="text-sm font-extrabold"
                        style={{ color: "#111827" }}
                      >
                        ₹{item.price}
                      </p>
                      {(item.originalPrice ?? 0) > item.price && (
                        <p
                          className="text-xs line-through"
                          style={{ color: "#9ca3af" }}
                        >
                          ₹{item.originalPrice}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({ type: "REMOVE_ITEM", payload: item.id })
                      }
                      className="w-6 h-6 rounded flex items-center justify-center hover:bg-red-50 transition-colors"
                      aria-label={`Remove ${item.name}`}
                      data-ocid={`cart.delete_button.${idx + 1}`}
                    >
                      <Trash2
                        className="w-3.5 h-3.5"
                        style={{ color: "#ef4444" }}
                      />
                    </button>
                    <div
                      className="flex items-center rounded-xl overflow-hidden"
                      style={{ border: "2px solid #7B2FF7" }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QTY",
                            payload: { id: item.id, qty: item.quantity - 1 },
                          })
                        }
                        className="w-7 h-7 flex items-center justify-center font-bold text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: "#7B2FF7" }}
                        aria-label="Decrease quantity"
                        data-ocid={`cart.decrease_button.${idx + 1}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span
                        className="w-8 text-center text-sm font-extrabold"
                        style={{ color: "#7B2FF7" }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QTY",
                            payload: { id: item.id, qty: item.quantity + 1 },
                          })
                        }
                        className="w-7 h-7 flex items-center justify-center font-bold text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: "#7B2FF7" }}
                        aria-label="Increase quantity"
                        data-ocid={`cart.increase_button.${idx + 1}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom section — only show when cart has items */}
        {items.length > 0 && (
          <div
            className="border-t flex flex-col gap-0"
            style={{ borderColor: "#e5e7eb" }}
          >
            {/* Coupon */}
            <div
              className="px-4 py-3 border-b"
              style={{ borderColor: "#e5e7eb", backgroundColor: "#fafafa" }}
            >
              <div className="flex items-center gap-2">
                <Tag
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#7B2FF7" }}
                />
                {couponApplied ? (
                  <div className="flex-1 flex items-center justify-between">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#0C831F" }}
                    >
                      QUICK5 applied — 5% off!
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setCoupon("");
                        setCouponApplied(false);
                        setCouponError("");
                      }}
                      className="text-xs font-bold"
                      style={{ color: "#ef4444" }}
                      data-ocid="cart.coupon_remove_button"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center gap-2">
                    <input
                      type="text"
                      value={coupon}
                      onChange={(e) => {
                        setCoupon(e.target.value.toUpperCase());
                        setCouponError("");
                      }}
                      placeholder="Apply coupon (try QUICK5)"
                      className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400"
                      style={{ color: "#111827" }}
                      data-ocid="cart.coupon_input"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCoupon}
                      className="text-sm font-bold transition-opacity hover:opacity-80"
                      style={{ color: "#7B2FF7" }}
                      data-ocid="cart.coupon_apply_button"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
              {couponError && (
                <p
                  className="text-xs mt-1 ml-6"
                  style={{ color: "#ef4444" }}
                  data-ocid="cart.coupon.error_state"
                >
                  {couponError}
                </p>
              )}
            </div>

            {/* Bill summary */}
            <div className="px-4 pt-3 pb-2 space-y-2">
              <p
                className="text-xs font-extrabold uppercase tracking-wide"
                style={{ color: "#6b7280" }}
              >
                Bill Details
              </p>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: "#374151" }}>Item Total</span>
                  <span className="font-semibold" style={{ color: "#111827" }}>
                    ₹{subtotal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "#374151" }}>Delivery Fee</span>
                  {isFreeDelivery ? (
                    <div className="flex items-center gap-1.5">
                      <span
                        className="text-xs line-through"
                        style={{ color: "#9ca3af" }}
                      >
                        ₹{DELIVERY_FEE}
                      </span>
                      <span className="font-bold" style={{ color: "#0C831F" }}>
                        FREE
                      </span>
                    </div>
                  ) : (
                    <span
                      className="font-semibold"
                      style={{ color: "#111827" }}
                    >
                      ₹{DELIVERY_FEE}
                    </span>
                  )}
                </div>
                {!isFreeDelivery && (
                  <div
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs"
                    style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
                  >
                    <span>🚀</span>
                    <span className="font-medium">
                      Add ₹{FREE_DELIVERY_THRESHOLD - subtotal} more for FREE
                      delivery
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span style={{ color: "#374151" }}>Platform Fee</span>
                  <span className="font-semibold" style={{ color: "#111827" }}>
                    ₹{PLATFORM_FEE}
                  </span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between">
                    <span style={{ color: "#0C831F" }}>Coupon Discount</span>
                    <span className="font-bold" style={{ color: "#0C831F" }}>
                      −₹{couponDiscount}
                    </span>
                  </div>
                )}
              </div>

              <div
                className="flex justify-between pt-2 mt-1 border-t font-extrabold text-base"
                style={{ borderColor: "#e5e7eb", color: "#111827" }}
              >
                <span>Grand Total</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            {/* Checkout button */}
            <div className="px-4 pb-4 pt-1 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-xl font-extrabold text-sm text-white flex items-center justify-between px-5 transition-opacity hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: "#7B2FF7" }}
                aria-label="Proceed to payment"
                data-ocid="cart.primary_button"
              >
                <span>Proceed to Payment</span>
                <span className="text-base">₹{grandTotal} →</span>
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                className="w-full text-center text-xs py-1 hover:opacity-70 transition-opacity"
                style={{ color: "#9ca3af" }}
                aria-label="Clear cart"
                data-ocid="cart.delete_button"
              >
                Clear cart
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
