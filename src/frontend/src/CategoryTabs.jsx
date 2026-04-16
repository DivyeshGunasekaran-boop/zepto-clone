import { useRef } from "react";
import { categories } from "./data/products";

export default function CategoryTabs({ activeCategory, setActiveCategory }) {
  const scrollRef = useRef(null);

  return (
    <section
      data-ocid="category_tabs.section"
      className="bg-card border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="pt-5 pb-3 text-base font-bold text-foreground">
          <span className="section-accent-bar" />
          Shop by Category
        </h2>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none" }}
          data-ocid="category_tabs.list"
        >
          {categories.map((cat, i) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                data-ocid={`category_tabs.item.${i + 1}`}
                onClick={() => setActiveCategory(cat.id)}
                className="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
                aria-pressed={isActive}
                aria-label={cat.name}
              >
                {/* Image card */}
                <div
                  className="relative overflow-hidden transition-smooth"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 14,
                    border: isActive
                      ? "2.5px solid oklch(0.48 0.27 308)"
                      : "2.5px solid transparent",
                    boxShadow: isActive
                      ? "0 0 0 2px oklch(0.48 0.27 308 / 0.25)"
                      : "0 2px 8px rgba(0,0,0,0.08)",
                    transform: isActive ? "scale(1.06)" : "scale(1)",
                  }}
                >
                  {/* Category image — covers entire card */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(cat.name)}%3C/text%3E%3C/svg%3E`;
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* Dark gradient overlay at bottom for text legibility */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.55) 100%)",
                    }}
                  />
                </div>

                {/* Category name label */}
                <span
                  className="text-center leading-tight transition-smooth max-w-[84px]"
                  style={{
                    fontSize: 11,
                    fontWeight: isActive ? 700 : 500,
                    color: isActive
                      ? "oklch(0.48 0.27 308)"
                      : "oklch(0.35 0.015 285)",
                    lineHeight: 1.3,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
