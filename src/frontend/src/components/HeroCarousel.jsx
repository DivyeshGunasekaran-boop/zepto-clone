import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    id: "slide-fruits",
    title: "Farm-Fresh Fruits & Vegetables",
    subtitle:
      "Handpicked produce delivered within hours of harvest — 100% quality assured",
    cta: "Shop Fresh",
    badge: "🌱 FRESHNESS GUARANTEE",
    highlight: "Free delivery on first order!",
    discount: null,
    theme: {
      from: "#1a7c3e",
      to: "#0f5a2b",
      accent: "#FFD600",
      text: "#ffffff",
    },
    image:
      "https://images.unsplash.com/photo-1542838132-2d5c6e7f8f9a?w=1200&q=80",
  },
  {
    id: "slide-beverages",
    title: "Beverages & Cold Drinks",
    subtitle:
      "Pepsi, Tropicana, Red Bull, Minute Maid & 200+ refreshing choices",
    cta: "Explore Drinks",
    badge: "🧊 CHILLED & READY",
    highlight: "New arrivals every day",
    discount: "20%",
    theme: {
      from: "#0a4c8c",
      to: "#062f5e",
      accent: "#FFD600",
      text: "#ffffff",
    },
    image:
      "https://images.unsplash.com/photo-1509042239860-f55ce641ab05?w=1200&q=80",
  },
  {
    id: "slide-snacks",
    title: "Snacks & Munchies Fest",
    subtitle:
      "Kurkure, Lay's, Maggi, Oreo & 500+ brands delivered in 10 minutes",
    cta: "Browse Snacks",
    badge: "🔥 BESTSELLERS",
    highlight: "Trusted by 1Cr+ customers",
    discount: "25%",
    theme: {
      from: "#c44b00",
      to: "#8c3300",
      accent: "#FFD600",
      text: "#ffffff",
    },
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=80",
  },
  {
    id: "slide-household",
    title: "Household Essentials",
    subtitle: "Surf Excel, Harpic, Colin, Dettol — everything your home needs",
    cta: "Shop Essentials",
    badge: "⚡ 10 MIN DELIVERY",
    highlight: "Best prices guaranteed",
    discount: "30%",
    theme: {
      from: "#5a1cbf",
      to: "#3d0e8c",
      accent: "#FFD600",
      text: "#ffffff",
    },
    image:
      "https://images.unsplash.com/photo-1583242702831-b3562c8ef9f5?w=1200&q=80",
  },
  {
    id: "slide-dairy",
    title: "Dairy & Breakfast Staples",
    subtitle:
      "Amul, Mother Dairy, Epigamia — fresh milk, eggs & more at your door",
    cta: "Order Dairy",
    badge: "🥛 UP TO 40% OFF",
    highlight: "Same-day delivery available",
    discount: "40%",
    theme: {
      from: "#b07800",
      to: "#7a5200",
      accent: "#FFD600",
      text: "#ffffff",
    },
    image:
      "https://images.unsplash.com/photo-1550583724-aa285b6f3a31?w=1200&q=80",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 4000);
  }, []);

  useEffect(() => {
    if (!paused) startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, startTimer]);

  const goTo = (idx) => {
    setCurrent(idx);
    startTimer();
  };

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const next = () => goTo((current + 1) % SLIDES.length);

  return (
    <section
      className="relative mt-4 rounded-2xl overflow-hidden shadow-lg select-none"
      aria-label="Promotional banners"
      data-ocid="hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex transition-carousel"
        style={{ transform: `translateX(-${current * 100}%)` }}
        aria-live="polite"
      >
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className="carousel-slide relative h-44 md:h-64 flex-shrink-0 w-full"
            aria-hidden={idx !== current}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(110deg, ${slide.theme.from}ee 0%, ${slide.theme.to}bb 50%, transparent 100%)`,
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex items-center h-full px-8 md:px-14">
              <div className="max-w-lg">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-[10px] font-extrabold px-3 py-1 rounded-full mb-2 tracking-widest uppercase">
                  {slide.badge}
                </span>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-xl md:text-4xl font-extrabold leading-tight text-white drop-shadow-sm">
                    {slide.title}
                  </h1>
                  {slide.discount && (
                    <span
                      className="hidden md:flex items-center justify-center w-16 h-16 rounded-full text-sm font-black text-center leading-tight flex-shrink-0 shadow-lg"
                      style={{ background: slide.theme.accent, color: "#111" }}
                    >
                      {slide.discount}
                      <br />
                      OFF
                    </span>
                  )}
                </div>
                <p className="text-white/80 text-xs md:text-sm mb-4 max-w-md">
                  {slide.subtitle}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="bg-white font-bold text-xs md:text-sm px-5 py-2 rounded-full hover:opacity-90 active:scale-95 transition-smooth shadow-md"
                    style={{ color: slide.theme.from }}
                    data-ocid={`carousel-cta-${slide.id}`}
                  >
                    {slide.cta} →
                  </button>
                  <span className="hidden md:block text-white/70 text-xs">
                    {slide.highlight}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/55 transition-smooth z-20"
        aria-label="Previous slide"
        data-ocid="carousel-prev"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/55 transition-smooth z-20"
        aria-label="Next slide"
        data-ocid="carousel-next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {SLIDES.map((s, i) => (
          <button
            type="button"
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            data-ocid={`carousel-dot-${i + 1}`}
            style={{
              width: i === current ? "24px" : "10px",
              height: "10px",
              borderRadius: "9999px",
              background:
                i === current
                  ? "rgba(255,255,255,0.95)"
                  : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              border: "none",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
