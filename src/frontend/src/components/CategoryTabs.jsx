import { useRef } from "react";

const CATEGORY_IMAGES = {
  all: "https://source.unsplash.com/200x200/?grocery,supermarket&sig=100",
  laundry: "https://source.unsplash.com/200x200/?detergent,laundry&sig=10",
  cleaning: "https://source.unsplash.com/200x200/?cleaning,household&sig=20",
  "rice-dal": "https://source.unsplash.com/200x200/?rice,grain&sig=40",
  "personal-hygiene":
    "https://source.unsplash.com/200x200/?soap,hygiene&sig=70",
  "hair-care": "https://source.unsplash.com/200x200/?shampoo,hair&sig=80",
  snacks: "https://source.unsplash.com/200x200/?chips,snacks&sig=20",
  beverages: "https://source.unsplash.com/200x200/?juice,beverage&sig=60",
  dairy: "https://source.unsplash.com/200x200/?milk,dairy&sig=30",
  fruits: "https://source.unsplash.com/200x200/?fruits,fresh&sig=90",
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
                className={`flex flex-col items-center gap-1.5 px-2.5 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap cursor-pointer flex-shrink-0 transition-all duration-200 select-none min-w-[62px] ${isActive ? "bg-primary/8 text-primary" : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted"}`}
                aria-pressed={isActive}
                aria-label={cat.label}
                data-ocid={`category-tab-${cat.id}`}
              >
                <span
                  className={`block w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ${isActive ? "ring-2 ring-primary ring-offset-1" : "ring-1 ring-border"}`}
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
