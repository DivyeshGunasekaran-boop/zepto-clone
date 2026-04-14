import { Minus, Plus, ShoppingCart, Tag, Trash2, X, Zap } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const FREE_DELIVERY_THRESHOLD = 199;
const PLATFORM_FEE = 5;
const DELIVERY_FEE = 30;

export default function CartSidebar() {
  const {
    isOpen,
    closeCart,
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");

  const isFreeDelivery = totalPrice >= FREE_DELIVERY_THRESHOLD;
  const deliveryFee = isFreeDelivery ? 0 : DELIVERY_FEE;
  const discount = items.reduce(
    (sum, i) => sum + (i.product.originalPrice - i.product.price) * i.quantity,
    0,
  );
  const couponDiscount = couponApplied ? Math.round(totalPrice * 0.05) : 0;
  const grandTotal = totalPrice + deliveryFee + PLATFORM_FEE - couponDiscount;

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

  const handleRemoveCoupon = () => {
    setCoupon("");
    setCouponApplied(false);
    setCouponError("");
  };

  return (
    <>
      {/* Overlay */}
      <div
        role="button"
        tabIndex={0}
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.50)" }}
        onClick={closeCart}
        onKeyDown={(e) =>
          (e.key === "Escape" || e.key === "Enter") && closeCart()
        }
        aria-label="Close cart"
        data-ocid="cart-overlay"
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[340px] sm:w-[380px] bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ boxShadow: "-8px 0 40px rgba(0,0,0,0.18)" }}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
        data-ocid="cart-sidebar"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3.5"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.46 0.30 308) 0%, oklch(0.34 0.27 292) 100%)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-white">My Cart</h2>
              {items.length > 0 && (
                <p className="text-xs text-white/65">
                  {totalItems} item{totalItems !== 1 ? "s" : ""}
                </p>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/15 hover:bg-white/30 transition-colors"
            aria-label="Close cart"
            data-ocid="cart-close"
          >
            <X className="w-4.5 h-4.5 text-white" />
          </button>
        </div>

        {/* Delivery badge */}
        {items.length > 0 && (
          <div
            className="mx-4 mt-3 px-3 py-2 rounded-xl flex items-center gap-2 border"
            style={{ backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" }}
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
              data-ocid="cart-empty"
            >
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.94 0.012 308) 0%, oklch(0.90 0.020 308) 100%)",
                  boxShadow: "inset 0 2px 8px rgba(80,30,180,0.10)",
                }}
              >
                🛒
              </div>
              <div className="text-center">
                <p className="text-lg font-extrabold text-foreground">
                  Your cart is empty
                </p>
                <p className="text-sm mt-1.5 text-muted-foreground">
                  Add items to get started
                </p>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="px-8 py-2.5 rounded-full font-bold text-sm text-white transition-smooth hover:brightness-110"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.48 0.27 308) 0%, oklch(0.38 0.26 290) 100%)",
                  boxShadow: "0 4px 16px oklch(0.48 0.27 308 / 0.40)",
                }}
                data-ocid="cart-start-shopping"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="space-y-0">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-start gap-3 py-3.5 border-b last:border-0"
                  style={{ borderColor: "#f3f4f6" }}
                  data-ocid={`cart-item-${item.product.id}`}
                >
                  <div
                    className="w-16 h-16 rounded-xl flex-shrink-0 overflow-hidden border"
                    style={{
                      backgroundColor: "#f9fafb",
                      borderColor: "#e5e7eb",
                    }}
                  >
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-semibold line-clamp-2 leading-snug"
                      style={{ color: "#111827" }}
                    >
                      {item.product.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>
                      {item.product.weight}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <p
                        className="text-sm font-extrabold"
                        style={{ color: "#111827" }}
                      >
                        ₹{item.product.price}
                      </p>
                      {item.product.originalPrice > item.product.price && (
                        <p
                          className="text-xs line-through"
                          style={{ color: "#9ca3af" }}
                        >
                          ₹{item.product.originalPrice}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      className="w-6 h-6 rounded-lg flex items-center justify-center hover:bg-red-50 transition-colors"
                      aria-label={`Remove ${item.product.name}`}
                      data-ocid={`cart-remove-${item.product.id}`}
                    >
                      <Trash2 className="w-3.5 h-3.5 text-red-400" />
                    </button>
                    <div
                      className="flex items-center rounded-xl overflow-hidden"
                      style={{ border: "2px solid oklch(0.50 0.27 310)" }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center font-bold text-white hover:opacity-85 transition-opacity"
                        style={{ background: "oklch(0.50 0.27 310)" }}
                        aria-label="Decrease quantity"
                        data-ocid={`cart-decrease-${item.product.id}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span
                        className="w-8 text-center text-sm font-extrabold"
                        style={{ color: "oklch(0.50 0.27 310)" }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center font-bold text-white hover:opacity-85 transition-opacity"
                        style={{ background: "oklch(0.50 0.27 310)" }}
                        aria-label="Increase quantity"
                        data-ocid={`cart-increase-${item.product.id}`}
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

        {/* Footer */}
        {items.length > 0 && (
          <div
            className="border-t flex flex-col"
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
                  style={{ color: "oklch(0.50 0.27 310)" }}
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
                      onClick={handleRemoveCoupon}
                      className="text-xs font-bold text-red-500 hover:text-red-700"
                      data-ocid="cart-coupon-remove"
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
                      placeholder="Use QUICK5 for 5% off"
                      className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400"
                      style={{ color: "#111827" }}
                      data-ocid="cart-coupon-input"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCoupon}
                      className="text-sm font-extrabold hover:opacity-75 transition-opacity"
                      style={{ color: "oklch(0.50 0.27 310)" }}
                      data-ocid="cart-coupon-apply"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
              {couponError && (
                <p className="text-xs mt-1 ml-6 text-red-500">{couponError}</p>
              )}
            </div>

            {/* Bill details */}
            <div className="px-4 pt-3 pb-2 space-y-2">
              <p
                className="text-xs font-extrabold uppercase tracking-wider"
                style={{ color: "#6b7280" }}
              >
                Bill Details
              </p>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: "#374151" }}>Item Total</span>
                  <span className="font-bold" style={{ color: "#111827" }}>
                    ₹{totalPrice}
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
                      <span
                        className="font-extrabold text-xs"
                        style={{ color: "#0C831F" }}
                      >
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
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-xs"
                    style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
                  >
                    <span>🚀</span>
                    <span className="font-medium">
                      Add ₹{FREE_DELIVERY_THRESHOLD - totalPrice} more for FREE
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
                  <div
                    className="flex justify-between"
                    style={{ color: "#0C831F" }}
                  >
                    <span>Coupon Discount</span>
                    <span className="font-extrabold">−₹{couponDiscount}</span>
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
              {(discount > 0 || couponApplied) && (
                <div
                  className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-bold"
                  style={{ backgroundColor: "#f0fdf4", color: "#0C831F" }}
                  data-ocid="cart-savings"
                >
                  <span>🎉</span>
                  <span>
                    You saved ₹{discount + couponDiscount} on this order
                  </span>
                </div>
              )}
            </div>

            {/* Checkout */}
            <div className="px-4 pb-4 pt-1 flex flex-col gap-2">
              <button
                type="button"
                className="w-full py-3.5 rounded-2xl font-extrabold text-sm text-white flex items-center justify-between px-5 transition-smooth hover:brightness-110 active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.48 0.27 308) 0%, oklch(0.38 0.26 290) 100%)",
                  boxShadow: "0 4px 20px oklch(0.48 0.27 308 / 0.45)",
                }}
                aria-label="Proceed to checkout"
                data-ocid="cart-checkout"
              >
                <span>Proceed to Checkout</span>
                <span className="text-base font-black">₹{grandTotal} →</span>
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="w-full text-center text-xs py-1 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear cart"
                data-ocid="cart-clear"
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
