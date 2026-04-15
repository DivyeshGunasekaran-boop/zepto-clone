import { useRef } from "react";
import type { Category } from "../types";

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (cat: Category) => void;
}

const CATEGORY_IMAGES: Record<string, string> = {
  all: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=80&q=80",
  laundry:
    "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=80&q=80",
  cleaning:
    "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=80&q=80",
  "rice-dal":
    "https://images.unsplash.com/photo-1536304993881-ff86e0c9e5c6?w=80&q=80",
  "personal-hygiene":
    "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=80&q=80",
  "hair-care":
    "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=80&q=80",
  snacks:
    "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=80&q=80",
  beverages:
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&q=80",
  dairy: "https://images.unsplash.com/photo-1550583724-aa285b6f3a31?w=80&q=80",
  fruits:
    "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=80&q=80",
};

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

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
                className={`
                  flex flex-col items-center gap-1.5 px-2.5 py-2 rounded-2xl text-xs font-semibold
                  whitespace-nowrap cursor-pointer flex-shrink-0 transition-all duration-200 select-none min-w-[62px]
                  ${
                    isActive
                      ? "bg-primary/8 text-primary"
                      : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
                  }
                `}
                aria-pressed={isActive}
                aria-label={cat.label}
                data-ocid={`category-tab-${cat.id}`}
              >
                <span
                  className={`
                    block w-10 h-10 rounded-full overflow-hidden flex-shrink-0
                    ${isActive ? "ring-2 ring-primary ring-offset-1" : "ring-1 ring-border"}
                  `}
                >
                  <img
                    src={imgSrc}
                    alt={cat.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        CATEGORY_IMAGES.all;
                    }}
                  />
                </span>
                <span className="leading-tight text-center line-clamp-2 max-w-[60px]">
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
