import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "./data/products";

// Map Tailwind gradient class names to actual CSS gradients
const gradientMap = {
  "from-green-600 to-emerald-500":
    "linear-gradient(135deg, #16a34a 0%, #10b981 100%)",
  "from-blue-600 to-sky-500":
    "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
  "from-orange-600 to-amber-500":
    "linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)",
  "from-purple-700 to-violet-500":
    "linear-gradient(135deg, #7e22ce 0%, #8b5cf6 100%)",
  "from-rose-600 to-pink-500":
    "linear-gradient(135deg, #e11d48 0%, #ec4899 100%)",
};

const categoryIllustrations = ["🍎", "🥛", "🍿", "🧃", "🧹"];

export default function HeroBillboard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goTo = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const next = useCallback(() => {
    setCurrentSlide((s) => (s + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      data-ocid="hero.section"
      className="relative w-full overflow-hidden select-none"
      style={{ height: "240px" }}
      aria-label="Promotional banner"
    >
      {/* Slide track */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          width: `${heroSlides.length * 100}%`,
        }}
      >
        {heroSlides.map((s, i) => {
          const slideBg =
            gradientMap[s.theme.bg] ??
            `linear-gradient(135deg, ${s.theme.accent} 0%, ${s.theme.accent}cc 100%)`;
          return (
            <div
              key={s.id}
              className="relative flex items-center justify-between h-full px-8 sm:px-14 overflow-hidden"
              style={{
                width: `${100 / heroSlides.length}%`,
                background: slideBg,
              }}
            >
              {/* Decorative circles */}
              <div
                className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10"
                style={{ background: "rgba(255,255,255,0.5)" }}
              />
              <div
                className="absolute -right-8 bottom-0 w-40 h-40 rounded-full opacity-10"
                style={{ background: "rgba(255,255,255,0.4)" }}
              />

              {/* Left content */}
              <div className="relative z-10 flex flex-col gap-3 max-w-xs">
                <span className="inline-block self-start px-3 py-1 rounded-full bg-white/25 backdrop-blur text-white text-xs font-bold border border-white/30">
                  {s.badge}
                </span>
                <h2 className="text-white font-extrabold text-3xl sm:text-4xl leading-tight drop-shadow">
                  {s.title}
                </h2>
                <p className="text-white/85 text-sm sm:text-base leading-snug">
                  {s.subtitle}
                </p>
                <button
                  type="button"
                  data-ocid={`hero.shop_now.${i + 1}`}
                  className="self-start mt-1 px-5 py-2 rounded-full bg-white font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-smooth"
                  style={{ color: s.theme.accent }}
                >
                  Shop Now →
                </button>
              </div>

              {/* Right illustration */}
              <div
                className="relative z-10 text-8xl sm:text-9xl flex-shrink-0 flex items-center justify-center"
                style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.2))" }}
              >
                {categoryIllustrations[i]}
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev arrow */}
      <button
        type="button"
        data-ocid="hero.prev_button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 flex items-center justify-center text-white backdrop-blur transition-smooth"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Next arrow */}
      <button
        type="button"
        data-ocid="hero.next_button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 flex items-center justify-center text-white backdrop-blur transition-smooth"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            data-ocid={`hero.dot.${i + 1}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide
                ? "carousel-dot carousel-dot-active w-6 h-2"
                : "carousel-dot w-2 h-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
