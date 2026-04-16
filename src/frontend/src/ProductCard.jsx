import { Minus, Plus, Star } from "lucide-react";
import { useCart } from "./context/CartContext";

function formatReviews(count) {
  if (!count) return "0";
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return String(count);
}

export default function ProductCard({ product }) {
  const { items, dispatch } = useCart();
  const existing = items.find((i) => i.id === product.id);
  const qty = existing?.quantity ?? 0;

  const handleCardClick = () => {
    dispatch({
      type: "OPEN_MODAL",
      payload: { modal: "product", data: product },
    });
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const handleIncrease = (e) => {
    e.stopPropagation();
    dispatch({ type: "UPDATE_QTY", payload: { id: product.id, qty: qty + 1 } });
  };

  const handleDecrease = (e) => {
    e.stopPropagation();
    dispatch({ type: "UPDATE_QTY", payload: { id: product.id, qty: qty - 1 } });
  };

  const imgSrc =
    product.image ||
    product.imageUrl ||
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E`;

  return (
    <button
      type="button"
      className="relative bg-card rounded-xl border border-border overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-smooth cursor-pointer group text-left w-full"
      onClick={handleCardClick}
      aria-label={product.name}
      data-ocid={`product.card.${product.id}`}
    >
      {/* Image area */}
      <div
        className="relative overflow-hidden bg-muted"
        style={{ height: "155px" }}
      >
        {product.discount > 0 && (
          <span
            className="absolute top-2 left-2 z-10 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full leading-tight shadow-sm"
            style={{ backgroundColor: "#FF6B35" }}
            data-ocid={`product.discount_badge.${product.id}`}
          >
            {product.discount}% OFF
          </span>
        )}

        <img
          src={imgSrc}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-smooth"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(product.name.slice(0, 20))}%3C/text%3E%3C/svg%3E`;
          }}
        />

        {/* Add to cart / stepper — bottom-right of image */}
        <div
          className="absolute bottom-2 right-2 z-20"
          data-ocid={`product.qty_control.${product.id}`}
        >
          {qty === 0 ? (
            <button
              type="button"
              onClick={handleAdd}
              className="w-8 h-8 rounded-lg font-bold text-lg flex items-center justify-center shadow-md hover:brightness-105 active:scale-90 transition-smooth border select-none"
              style={{
                backgroundColor: "#0C831F",
                borderColor: "#0a6b18",
                color: "#fff",
              }}
              aria-label={`Add ${product.name} to cart`}
              data-ocid={`product.add_button.${product.id}`}
            >
              <Plus className="w-4 h-4 stroke-[3]" />
            </button>
          ) : (
            <div
              className="flex items-center gap-0.5 rounded-lg px-1 py-0.5 shadow-md border"
              style={{ backgroundColor: "#0C831F", borderColor: "#0a6b18" }}
              data-ocid={`product.stepper.${product.id}`}
            >
              <button
                type="button"
                onClick={handleDecrease}
                className="w-6 h-6 rounded-md flex items-center justify-center font-bold hover:bg-white/20 active:scale-90 transition-smooth select-none"
                style={{ color: "#fff" }}
                aria-label="Decrease quantity"
                data-ocid={`product.decrease_button.${product.id}`}
              >
                <Minus className="w-3 h-3 stroke-[3]" />
              </button>
              <span
                className="text-xs font-bold min-w-[1rem] text-center tabular-nums"
                style={{ color: "#fff" }}
              >
                {qty}
              </span>
              <button
                type="button"
                onClick={handleIncrease}
                className="w-6 h-6 rounded-md flex items-center justify-center font-bold hover:bg-white/20 active:scale-90 transition-smooth select-none"
                style={{ color: "#fff" }}
                aria-label="Increase quantity"
                data-ocid={`product.increase_button.${product.id}`}
              >
                <Plus className="w-3 h-3 stroke-[3]" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Info area */}
      <div className="p-2.5 flex flex-col gap-0.5 flex-1">
        <h3 className="text-[13px] font-semibold text-foreground line-clamp-2 leading-snug min-h-[2.6em]">
          {product.name}
        </h3>
        <p className="text-[11px] text-muted-foreground font-medium truncate">
          {product.brand ? `${product.brand} · ` : ""}
          {product.weight}
        </p>
        {product.rating > 0 && (
          <div className="flex items-center gap-1 mt-0.5">
            <Star
              className="w-3 h-3 fill-yellow-400 text-yellow-400"
              aria-hidden="true"
            />
            <span className="text-[11px] text-muted-foreground font-medium">
              {product.rating}{" "}
              <span className="text-[10px]">
                ({formatReviews(product.reviewCount)})
              </span>
            </span>
          </div>
        )}
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
    </button>
  );
}
