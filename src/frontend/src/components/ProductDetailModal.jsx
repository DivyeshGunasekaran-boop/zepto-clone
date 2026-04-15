import {
  Leaf,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import { useCart } from "../context/CartContext";

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.round(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function formatReviewCount(count) {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return String(count);
}

const HIGHLIGHTS = [
  {
    icon: <Leaf className="w-4 h-4" />,
    label: "Fresh & Quality Assured",
    color: "#0C831F",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    label: "100% Authentic",
    color: "#7B2FF7",
  },
  {
    icon: <RotateCcw className="w-4 h-4" />,
    label: "Easy Returns",
    color: "#0072C6",
  },
];

export default function ProductDetailModal({ product, onClose }) {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();

  if (!product) return null;

  const qty = getItemQuantity(product.id);
  const savingsAmount =
    product.originalPrice > product.price
      ? product.originalPrice - product.price
      : 0;

  const description =
    product.description ||
    `${product.name} by ${product.brand} — a trusted choice for quality and freshness. Sourced from the best suppliers, this product is packed to retain maximum freshness and nutritional value. Perfect for everyday household needs.`;

  const handleOverlayKeyDown = (e) => {
    if (e.key === "Escape") onClose?.();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div
        role="button"
        tabIndex={0}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={handleOverlayKeyDown}
        aria-label="Close product detail"
        data-ocid="product-detail-overlay"
      />

      <div
        className="relative bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl shadow-2xl z-10 overflow-hidden"
        data-ocid="product-detail-modal"
        style={{ maxHeight: "94vh" }}
      >
        {/* Product image — full width, top half */}
        <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gray-50">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/400x400/f3f4f6/94a3b8?text=Product";
            }}
          />
          {/* Gradient overlay for readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3) 100%)",
            }}
          />

          {product.discount > 0 && (
            <span
              className="absolute top-3 left-3 text-white text-xs font-extrabold px-2.5 py-1 rounded-full shadow"
              style={{ backgroundColor: "#FF6B35" }}
              data-ocid="product-detail-discount-badge"
            >
              {product.discount}% OFF
            </span>
          )}

          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-opacity hover:opacity-80"
            style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
            aria-label="Close"
            data-ocid="product-detail-close"
          >
            <X className="w-5 h-5" style={{ color: "#374151" }} />
          </button>
        </div>

        {/* Scrollable content */}
        <div
          className="overflow-y-auto"
          style={{ maxHeight: "calc(94vh - 224px)" }}
        >
          <div className="px-5 pt-4 pb-2">
            {/* Brand + name */}
            <p
              className="text-xs font-bold uppercase tracking-wider mb-1"
              style={{ color: "#7B2FF7" }}
            >
              {product.brand}
            </p>
            <h2
              className="text-lg font-extrabold leading-snug"
              style={{ color: "#1a1a1a" }}
            >
              {product.name}
            </h2>
            <p className="text-sm mt-0.5" style={{ color: "#6b7280" }}>
              {product.weight}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg"
                style={{ backgroundColor: "#fef3c7" }}
              >
                <StarRating rating={product.rating} />
                <span
                  className="text-xs font-extrabold"
                  style={{ color: "#92400e" }}
                >
                  {product.rating}
                </span>
              </div>
              <span className="text-xs" style={{ color: "#9ca3af" }}>
                {formatReviewCount(product.reviewCount)} ratings
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mt-3">
              <span
                className="text-2xl font-extrabold"
                style={{ color: "#1a1a1a" }}
              >
                ₹{product.price}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span
                    className="text-sm line-through"
                    style={{ color: "#9ca3af" }}
                  >
                    ₹{product.originalPrice}
                  </span>
                  <span
                    className="text-xs font-extrabold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#dcfce7", color: "#0C831F" }}
                  >
                    Save ₹{savingsAmount}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px mx-5 my-3"
            style={{ backgroundColor: "#f3f4f6" }}
          />

          {/* Description */}
          <div className="px-5">
            <h3
              className="text-sm font-extrabold mb-1.5"
              style={{ color: "#1a1a1a" }}
            >
              About this product
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>
              {description}
            </p>
          </div>

          {/* Highlights */}
          <div className="px-5 mt-4">
            <h3
              className="text-sm font-extrabold mb-2"
              style={{ color: "#1a1a1a" }}
            >
              Highlights
            </h3>
            <div className="flex flex-wrap gap-2">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: `${h.color}15`, color: h.color }}
                >
                  {h.icon}
                  {h.label}
                </div>
              ))}
            </div>
          </div>

          {/* Delivery info */}
          <div
            className="mx-5 mt-4 mb-4 px-4 py-3 rounded-xl flex items-center gap-2"
            style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
          >
            <span className="text-base">⚡</span>
            <div>
              <p
                className="text-xs font-extrabold"
                style={{ color: "#0C831F" }}
              >
                Delivery in 10 minutes
              </p>
              <p className="text-xs" style={{ color: "#4ade80" }}>
                QuickCart Express • Available now
              </p>
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="px-5 pb-6">
            {qty === 0 ? (
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="w-full py-4 rounded-xl font-extrabold text-base text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: "#7B2FF7" }}
                aria-label={`Add ${product.name} to cart`}
                data-ocid="product-detail-add-to-cart"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center rounded-xl overflow-hidden flex-shrink-0"
                  style={{ border: "2px solid #7B2FF7" }}
                >
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, qty - 1)}
                    className="w-10 h-10 flex items-center justify-center font-bold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#7B2FF7" }}
                    aria-label="Decrease quantity"
                    data-ocid="product-detail-decrease"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span
                    className="w-10 text-center text-base font-extrabold"
                    style={{ color: "#7B2FF7" }}
                  >
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="w-10 h-10 flex items-center justify-center font-bold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#7B2FF7" }}
                    aria-label="Increase quantity"
                    data-ocid="product-detail-increase"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#6b7280" }}
                >
                  {qty} in cart · ₹{product.price * qty}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
