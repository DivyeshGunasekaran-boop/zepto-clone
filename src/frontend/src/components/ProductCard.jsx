import { Minus, Plus, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

function formatReviewCount(count) {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return String(count);
}

export default function ProductCard({ product, onProductClick }) {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const qty = getItemQuantity(product.id);

  const handleCardClick = () => {
    onProductClick?.(product);
  };

  const handleCardKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") onProductClick?.(product);
  };

  return (
    <div
      className="relative bg-card rounded-xl border border-border overflow-hidden flex flex-col w-[160px] md:w-[180px] min-w-[160px] md:min-w-[180px] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-smooth cursor-pointer group"
      aria-label={product.name}
      data-ocid={`product.card.${product.id}`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      <div className="relative h-[150px] md:h-[180px] w-full overflow-hidden bg-muted">
        {product.discount > 0 && (
          <span
            className="absolute top-2 left-2 z-10 bg-[#FF6B35] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full leading-tight shadow-sm"
            aria-label={`${product.discount}% off`}
            data-ocid={`product.discount_badge.${product.id}`}
          >
            {product.discount}% OFF
          </span>
        )}

        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-smooth"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/400x400/f3f4f6/94a3b8?text=Product";
          }}
        />

        <div
          className="absolute bottom-2 right-2 z-20"
          data-ocid={`product.qty_control.${product.id}`}
        >
          {qty === 0 ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-accent text-accent-foreground font-bold text-lg flex items-center justify-center shadow-md hover:brightness-105 active:scale-90 transition-smooth border border-accent/80 select-none"
              aria-label={`Add ${product.name} to cart`}
              data-ocid={`product.add_button.${product.id}`}
            >
              <Plus className="w-4 h-4 stroke-[3]" />
            </button>
          ) : (
            <div
              className="flex items-center gap-0.5 bg-accent rounded-lg px-1 py-0.5 shadow-md border border-accent/80"
              data-ocid={`product.stepper.${product.id}`}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  updateQuantity(product.id, qty - 1);
                }}
                className="w-6 h-6 md:w-7 md:h-7 rounded-md flex items-center justify-center text-accent-foreground font-bold hover:bg-white/20 active:scale-90 transition-smooth select-none"
                aria-label="Decrease quantity"
                data-ocid={`product.decrease_button.${product.id}`}
              >
                <Minus className="w-3 h-3 stroke-[3]" />
              </button>
              <span className="text-xs font-bold text-accent-foreground min-w-[1rem] text-center tabular-nums">
                {qty}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="w-6 h-6 md:w-7 md:h-7 rounded-md flex items-center justify-center text-accent-foreground font-bold hover:bg-white/20 active:scale-90 transition-smooth select-none"
                aria-label="Increase quantity"
                data-ocid={`product.increase_button.${product.id}`}
              >
                <Plus className="w-3 h-3 stroke-[3]" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="p-2.5 flex flex-col gap-0.5 flex-1">
        <h3 className="text-[13px] font-semibold text-foreground line-clamp-2 leading-snug min-h-[2.6em]">
          {product.name}
        </h3>
        <p className="text-[11px] text-muted-foreground font-medium truncate">
          {product.weight}
        </p>
        <div className="flex items-center gap-1 mt-0.5">
          <Star
            className="w-3 h-3 fill-yellow-400 text-yellow-400"
            aria-hidden="true"
          />
          <span className="text-[11px] text-muted-foreground font-medium">
            {product.rating}{" "}
            <span className="text-[10px]">
              ({formatReviewCount(product.reviewCount)})
            </span>
          </span>
        </div>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="text-sm font-bold text-foreground">
            ₹{product.price}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-[11px] text-muted-foreground line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
