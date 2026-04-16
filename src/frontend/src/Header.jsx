import {
  ChevronDown,
  MapPin,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCart } from "./context/CartContext";

export default function Header() {
  const { items, isLoggedIn, user, dispatch } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
    window.dispatchEvent(
      new CustomEvent("quickcart:search", { detail: e.target.value }),
    );
  }

  function handleSearchClear() {
    setSearchQuery("");
    window.dispatchEvent(new CustomEvent("quickcart:search", { detail: "" }));
  }

  return (
    <header
      data-ocid="header"
      style={{
        background: "linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%)",
      }}
      className="sticky top-0 z-40 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-1.5">
          <span className="text-2xl">⚡</span>
          <span className="text-white font-extrabold text-xl tracking-tight select-none">
            QuickCart
          </span>
        </div>

        {/* Location bar */}
        <button
          type="button"
          data-ocid="header.location_button"
          onClick={() =>
            dispatch({ type: "OPEN_MODAL", payload: { modal: "map" } })
          }
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm transition-smooth flex-shrink-0 max-w-[200px]"
        >
          <MapPin size={14} className="flex-shrink-0 text-yellow-300" />
          <span className="truncate text-white/90">Deliver to Home</span>
          <ChevronDown size={12} className="flex-shrink-0 text-white/70" />
        </button>

        {/* Search bar */}
        <div className="flex-1 relative min-w-0">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
          <input
            data-ocid="header.search_input"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for products..."
            className="w-full pl-9 pr-9 py-2.5 rounded-full bg-white text-foreground text-sm placeholder:text-muted-foreground border-0 outline-none focus:ring-2 focus:ring-white/50 shadow-md"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleSearchClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Login / Profile */}
        {isLoggedIn ? (
          <div ref={profileRef} className="relative flex-shrink-0">
            <button
              type="button"
              data-ocid="header.profile_button"
              onClick={() => setProfileOpen((v) => !v)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm transition-smooth"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <User size={13} />
              </div>
              <span className="hidden sm:block max-w-[80px] truncate font-medium">
                {user?.name ?? "Account"}
              </span>
              <ChevronDown size={12} className="text-white/70" />
            </button>
            {profileOpen && (
              <div
                data-ocid="header.profile_dropdown"
                className="absolute right-0 top-full mt-2 w-44 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50"
              >
                <div className="px-4 py-3 border-b border-border bg-muted/40">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {user?.name ?? "Account"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {user?.phone ?? ""}
                  </p>
                </div>
                <button
                  type="button"
                  data-ocid="header.my_orders_button"
                  className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-muted/60 transition-smooth"
                  onClick={() => setProfileOpen(false)}
                >
                  My Orders
                </button>
                <button
                  type="button"
                  data-ocid="header.logout_button"
                  className="w-full text-left px-4 py-2.5 text-sm text-destructive hover:bg-destructive/10 transition-smooth"
                  onClick={() => {
                    dispatch({ type: "LOGOUT" });
                    setProfileOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            type="button"
            data-ocid="header.login_button"
            onClick={() =>
              dispatch({ type: "OPEN_MODAL", payload: { modal: "login" } })
            }
            className="flex-shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-purple-700 font-bold text-sm hover:bg-white/90 transition-smooth shadow-md"
          >
            <User size={14} />
            <span>Login</span>
          </button>
        )}

        {/* Cart button */}
        <button
          type="button"
          data-ocid="header.cart_button"
          onClick={() => dispatch({ type: "TOGGLE_CART" })}
          className="relative flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-smooth"
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:block text-sm font-medium">Cart</span>
          {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
