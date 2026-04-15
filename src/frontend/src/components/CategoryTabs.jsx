import { useRef } from "react";

const CATEGORY_IMAGES = {
  all: "https://picsum.photos/seed/grocery-all/200/200",
  laundry: "https://picsum.photos/seed/laundry-detergent/200/200",
  cleaning: "https://picsum.photos/seed/household-cleaning/200/200",
  "rice-dal": "https://picsum.photos/seed/rice-dal-pulses/200/200",
  "personal-hygiene":
    "https://picsum.photos/seed/personal-hygiene-soap/200/200",
  "hair-care": "https://picsum.photos/seed/hair-care-shampoo/200/200",
  snacks: "https://picsum.photos/seed/snacks-chips-crisps/200/200",
  beverages: "https://picsum.photos/seed/beverages-juice-drinks/200/200",
  dairy: "https://picsum.photos/seed/dairy-milk-butter/200/200",
  fruits: "https://picsum.photos/seed/fresh-fruits-veggies/200/200",
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
