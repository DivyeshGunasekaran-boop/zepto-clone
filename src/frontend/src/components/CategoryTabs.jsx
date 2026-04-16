import { useRef } from "react";

// Permanent Unsplash photo IDs — never expire, never keyword-based
const CATEGORY_IMAGES = {
  all: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop&q=80",
  laundry:
    "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=200&h=200&fit=crop&q=80",
  cleaning:
    "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200&h=200&fit=crop&q=80",
  "rice-dal":
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop&q=80",
  "personal-hygiene":
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop&q=80",
  "hair-care":
    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=200&h=200&fit=crop&q=80",
  snacks:
    "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=200&h=200&fit=crop&q=80",
  beverages:
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=200&fit=crop&q=80",
  dairy:
    "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop&q=80",
  fruits:
    "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&h=200&fit=crop&q=80",
};

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  const scrollRef = useRef(null);

  return (
    <nav
      className="sticky top-16 z-30 bg-background border-b border-border shadow-sm"
      aria-label="Product categories"
      data-ocid="category-tabs"
    >
      <div className="max-w-[1400px] mx-auto px-3 md:px-5">
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto py-2.5"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const imgSrc = CATEGORY_IMAGES[cat.id] ?? CATEGORY_IMAGES.all;
            return (
              <button
                type="button"
                key={cat.id}
                onClick={() => onCategoryChange(cat)}
                className={`flex flex-col items-center gap-1.5 px-2 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap cursor-pointer flex-shrink-0 transition-all duration-200 select-none min-w-[72px] ${
                  isActive
                    ? "bg-primary/8 text-primary"
                    : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                aria-pressed={isActive}
                aria-label={cat.name}
                data-ocid={`category-tab-${cat.id}`}
              >
                <span
                  className={`block w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 ${
                    isActive
                      ? "ring-2 ring-primary ring-offset-1"
                      : "ring-1 ring-border"
                  }`}
                  style={{ display: "block" }}
                >
                  <img
                    src={imgSrc}
                    alt={cat.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='13' fill='%236b7280' text-anchor='middle' dy='.3em'%3ECategory%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </span>
                <span className="leading-tight text-center line-clamp-2 max-w-[68px]">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
