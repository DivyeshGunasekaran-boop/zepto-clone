import { useRef } from "react";

// Pexels CDN permanent photo IDs — stable, category-accurate images
const CATEGORY_IMAGES = {
  all: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  laundry:
    "https://images.pexels.com/photos/5217939/pexels-photo-5217939.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  cleaning:
    "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  "rice-dal":
    "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  "personal-hygiene":
    "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  "hair-care":
    "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  snacks:
    "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  beverages:
    "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  dairy:
    "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  fruits:
    "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
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
