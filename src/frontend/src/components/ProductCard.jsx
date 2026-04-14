import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

function formatReviewCount(count) {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return String(count);
}

export default function ProductCard({ product }) {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const qty = getItemQuantity(product.id);
  const savings = product.originalPrice - product.price;

  return (
    <article
      className="w-[158px] md:w-[188px] flex flex-col group rounded-2xl bg-card overflow-hidden cursor-pointer"
      style={{
        border: "1px solid oklch(0.90 0.006 0)",
        boxShadow:
          "0 2px 12px rgba(107,47,215,0.06), 0 1px 3px rgba(0,0,0,0.05)",
        transition:
          "box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 8px 32px rgba(107,47,215,0.18), 0 2px 8px rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.borderColor = "oklch(0.65 0.20 310)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 2px 12px rgba(107,47,215,0.06), 0 1px 3px rgba(0,0,0,0.05)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "oklch(0.90 0.006 0)";
      }}
      aria-label={product.name}
      data-ocid={`product-card-${product.id}`}
    >
      {/* Image container */}
      <div
        className="relative flex items-center justify-center h-[148px] md:h-[172px] overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, oklch(0.97 0.004 300) 0%, oklch(0.94 0.008 280) 100%)",
        }}
      >
        {/* Bottom gradient for button readability */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none z-[1]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)",
          }}
        />

        {product.discount > 0 && (
          <span
            className="absolute top-2 left-2 z-10 text-[10px] font-extrabold px-2 py-0.5 rounded-md text-white leading-tight"
            style={{
              background: "linear-gradient(135deg, #FF6B00, #ff4500)",
              boxShadow: "0 2px 6px rgba(255,107,0,0.45)",
            }}
            aria-label={`${product.discount}% off`}
          >
            {product.discount}% OFF
          </span>
        )}

        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          width={188}
          height={172}
        />

        {/* Add to Cart / Qty stepper — absolute bottom-right over image */}
        <div
          className="absolute bottom-2 right-2 z-10"
          data-ocid={`product-qty-${product.id}`}
        >
          {qty === 0 ? (
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="flex items-center justify-center w-9 h-9 rounded-xl text-white font-bold shadow-lg hover:scale-110 active:scale-95 transition-smooth"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.50 0.27 310), oklch(0.42 0.26 290))",
                boxShadow: "0 3px 12px rgba(107,47,215,0.55)",
                border: "2px solid rgba(255,255,255,0.5)",
              }}
              aria-label={`Add ${product.name} to cart`}
              data-ocid={`add-to-cart-${product.id}`}
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
            </button>
          ) : (
            <div
              className="flex items-center rounded-xl overflow-hidden shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.50 0.27 310), oklch(0.42 0.26 290))",
                boxShadow: "0 3px 12px rgba(107,47,215,0.55)",
                border: "2px solid rgba(255,255,255,0.5)",
              }}
            >
              <button
                type="button"
                onClick={() => updateQuantity(product.id, qty - 1)}
                className="w-7 h-7 flex items-center justify-center text-white font-bold hover:bg-white/20 active:scale-90 transition-smooth"
                aria-label="Decrease quantity"
                data-ocid={`decrease-qty-${product.id}`}
              >
                <Minus className="w-3 h-3 stroke-[2.5]" />
              </button>
              <span className="text-xs font-extrabold text-white min-w-[1.2rem] text-center">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="w-7 h-7 flex items-center justify-center text-white font-bold hover:bg-white/20 active:scale-90 transition-smooth"
                aria-label="Increase quantity"
                data-ocid={`increase-qty-${product.id}`}
              >
                <Plus className="w-3 h-3 stroke-[2.5]" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Card info */}
      <div className="p-2.5 flex flex-col flex-1 gap-0.5">
        <p
          className="text-[11px] font-medium truncate"
          style={{ color: "oklch(0.55 0.01 0)" }}
        >
          {product.weight}
        </p>
        <h3 className="text-xs font-semibold text-foreground line-clamp-2 leading-snug min-h-[2.5em]">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-0.5">
          <Star
            className="w-3 h-3 fill-yellow-400 text-yellow-400"
            aria-hidden="true"
          />
          <span
            className="text-[11px] font-medium"
            style={{ color: "oklch(0.55 0.01 0)" }}
          >
            {product.rating} ({formatReviewCount(product.reviewCount)})
          </span>
        </div>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="text-sm font-extrabold text-foreground">
            ₹{product.price}
          </span>
          {product.originalPrice > product.price && (
            <span
              className="text-[11px] line-through"
              style={{ color: "oklch(0.65 0.01 0)" }}
            >
              ₹{product.originalPrice}
            </span>
          )}
        </div>
        {savings > 0 && (
          <div className="mt-0.5">
            <span
              className="inline-block text-[10px] font-extrabold px-1.5 py-0.5 rounded-lg"
              style={{
                background: "oklch(0.52 0.18 145 / 0.12)",
                color: "oklch(0.38 0.18 145)",
              }}
            >
              SAVE ₹{savings}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
