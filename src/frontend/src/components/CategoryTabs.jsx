import { useRef } from "react";

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  const scrollRef = useRef(null);

  return (
    <nav
      className="sticky top-16 z-30 border-b border-border"
      style={{
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
      aria-label="Product categories"
      data-ocid="category-tabs"
    >
      <div className="max-w-[1400px] mx-auto px-3 md:px-5">
        <div
          ref={scrollRef}
          className="flex gap-1.5 overflow-x-auto py-2.5"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                type="button"
                key={cat.id}
                onClick={() => onCategoryChange(cat)}
                className={`
                  flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap
                  flex-shrink-0 transition-all duration-200 select-none cursor-pointer
                `}
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(135deg, oklch(0.50 0.27 310), oklch(0.40 0.26 292))",
                        color: "white",
                        boxShadow: "0 3px 12px oklch(0.50 0.27 310 / 0.40)",
                        border: "1.5px solid oklch(0.50 0.27 310)",
                      }
                    : {
                        background: "transparent",
                        color: "oklch(0.40 0.01 0)",
                        border: "1.5px solid oklch(0.88 0.008 0)",
                      }
                }
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background =
                      "oklch(0.50 0.27 310 / 0.08)";
                    e.currentTarget.style.borderColor =
                      "oklch(0.50 0.27 310 / 0.40)";
                    e.currentTarget.style.color = "oklch(0.44 0.27 310)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "oklch(0.88 0.008 0)";
                    e.currentTarget.style.color = "oklch(0.40 0.01 0)";
                  }
                }}
                aria-pressed={isActive}
                aria-label={cat.label}
                data-ocid={`category-tab-${cat.id}`}
              >
                <span className="text-base leading-none" aria-hidden="true">
                  {cat.icon}
                </span>
                <span className="leading-none">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
