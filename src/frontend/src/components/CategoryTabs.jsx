import { useRef } from "react";

const CATEGORY_IMAGES = {
  all: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop",
  laundry:
    "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&h=200&fit=crop",
  cleaning:
    "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200&h=200&fit=crop",
  "rice-dal":
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop",
  "personal-hygiene":
    "https://images.unsplash.com/photo-1556228578-dd539282b964?w=200&h=200&fit=crop",
  "hair-care":
    "https://images.unsplash.com/photo-1585232351009-aa29f6a88c47?w=200&h=200&fit=crop",
  snacks:
    "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=200&h=200&fit=crop",
  beverages:
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=200&fit=crop",
  dairy:
    "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop",
  fruits:
    "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=200&h=200&fit=crop",
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
          className="flex gap-2 overflow-x-auto py-2.5 scrollbar-none"
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
                className={`flex flex-col items-center gap-1.5 px-2 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap cursor-pointer flex-shrink-0 transition-all duration-200 select-none min-w-[72px] ${isActive ? "bg-primary/8 text-primary" : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted"}`}
                aria-pressed={isActive}
                aria-label={cat.label}
                data-ocid={`category-tab-${cat.id}`}
              >
                <span
                  className={`block w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 ${isActive ? "ring-2 ring-primary ring-offset-1" : "ring-1 ring-border"}`}
                >
                  <img
                    src={imgSrc}
                    alt={cat.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = CATEGORY_IMAGES.all;
                    }}
                  />
                </span>
                <span className="leading-tight text-center line-clamp-2 max-w-[68px]">
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
