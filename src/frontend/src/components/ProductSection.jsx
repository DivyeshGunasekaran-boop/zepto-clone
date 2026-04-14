import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductSection({ title, products, layout, onViewAll }) {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  if (products.length === 0) return null;

  const SCROLL_AMOUNT = 600;

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftArrow(el.scrollLeft > 10);
    setShowRightArrow(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  // Extract emoji from title for decoration
  const emojiMatch = title.match(/^(\p{Emoji})\s/u);
  const emoji = emojiMatch ? emojiMatch[1] : null;
  const titleText = emoji ? title.slice(emoji.length + 1) : title;

  return (
    <section className="mt-8" aria-label={title} data-ocid="product-section">
      <div className="flex items-center justify-between mb-4 px-0.5">
        <div className="flex items-center gap-2.5">
          {emoji && (
            <span
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{
                background: "oklch(0.50 0.27 310 / 0.10)",
                border: "1.5px solid oklch(0.50 0.27 310 / 0.20)",
              }}
              aria-hidden="true"
            >
              {emoji}
            </span>
          )}
          <div>
            <h2 className="text-base md:text-[1.15rem] font-extrabold text-foreground tracking-tight leading-tight">
              {titleText}
            </h2>
            <div
              className="h-0.5 w-8 rounded-full mt-0.5"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.50 0.27 310), oklch(0.65 0.20 280 / 0.3))",
              }}
            />
          </div>
        </div>
        {onViewAll && (
          <button
            type="button"
            onClick={onViewAll}
            className="flex items-center gap-0.5 text-sm font-bold transition-smooth hover:gap-1.5"
            style={{ color: "oklch(0.50 0.27 310)" }}
            aria-label={`View all in ${title}`}
            data-ocid="view-all-btn"
          >
            See all <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {layout === "scroll" ? (
        <div className="relative group/section">
          {showLeftArrow && (
            <button
              type="button"
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-card border border-border shadow-lg flex items-center justify-center transition-smooth opacity-0 group-hover/section:opacity-100 hover:border-primary/40 hover:shadow-xl"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
          )}
          {showRightArrow && products.length > 4 && (
            <button
              type="button"
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-card border border-border shadow-lg flex items-center justify-center transition-smooth opacity-0 group-hover/section:opacity-100 hover:border-primary/40 hover:shadow-xl"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          )}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="scroll-section hide-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
          data-ocid="product-grid"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
