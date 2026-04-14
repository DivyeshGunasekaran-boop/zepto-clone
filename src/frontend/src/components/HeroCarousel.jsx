import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    id: "slide-purple",
    title: "Groceries in 10 Minutes",
    subtitle: "Fresh fruits, veggies & daily essentials at your doorstep",
    cta: "Shop Now",
    bgFrom: "oklch(0.46 0.30 308)",
    bgMid: "oklch(0.38 0.28 295)",
    bgTo: "oklch(0.30 0.25 280)",
    accentColor: "#FFD600",
    emoji: "🛒",
    badge: "⚡ 10 MIN DELIVERY",
    highlight: "Free delivery on first order!",
    discount: null,
    pattern: "circles",
  },
  {
    id: "slide-orange",
    title: "Up to 40% OFF on Dairy",
    subtitle: "Amul, Mother Dairy, Epigamia & more top brands",
    cta: "Explore Deals",
    bgFrom: "#e05c00",
    bgMid: "#c94800",
    bgTo: "#b03a00",
    accentColor: "#FFD600",
    emoji: "🥛",
    badge: "🔥 LIMITED TIME",
    highlight: "Best prices guaranteed",
    discount: "40%",
    pattern: "waves",
  },
  {
    id: "slide-green",
    title: "Farm-Fresh Fruits & Veggies",
    subtitle: "Handpicked produce delivered within hours of harvest",
    cta: "Order Fresh",
    bgFrom: "#0a7518",
    bgMid: "#066010",
    bgTo: "#044d0c",
    accentColor: "#FFD600",
    emoji: "🍎",
    badge: "🌱 FRESHNESS GUARANTEE",
    highlight: "100% quality assured",
    discount: null,
    pattern: "dots",
  },
  {
    id: "slide-blue",
    title: "Snacks & Beverages Fest",
    subtitle: "Kurkure, Lay's, Maggi, Red Bull & 500+ brands",
    cta: "Browse Snacks",
    bgFrom: "#0046b8",
    bgMid: "#0038a0",
    bgTo: "#002b88",
    accentColor: "#FFD600",
    emoji: "🍿",
    badge: "🏆 BESTSELLERS",
    highlight: "New arrivals every day",
    discount: "25%",
    pattern: "circles",
  },
  {
    id: "slide-teal",
    title: "Personal Care Essentials",
    subtitle: "Dettol, Gillette, Dove, Pantene & top hygiene brands",
    cta: "Shop Personal Care",
    bgFrom: "#007569",
    bgMid: "#006058",
    bgTo: "#004d46",
    accentColor: "#FFD600",
    emoji: "🧴",
    badge: "✨ TOP RATED",
    highlight: "Trusted by 1Cr+ customers",
    discount: "30%",
    pattern: "waves",
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
    }, 3500);
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
  const slide = SLIDES[current];

  return (
    <section
      className="relative mt-5 rounded-3xl overflow-hidden select-none"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}
      aria-label="Promotional banners"
      data-ocid="hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative h-48 md:h-68 flex items-center px-8 md:px-14 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${slide.bgFrom} 0%, ${slide.bgMid} 50%, ${slide.bgTo} 100%)`,
          minHeight: "180px",
          transition: "background 0.6s ease",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute -right-16 -top-16 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.06)", filter: "blur(1px)" }}
          aria-hidden="true"
        />
        <div
          className="absolute right-24 -bottom-12 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.04)" }}
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/3 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "rgba(0,0,0,0.08)",
            filter: "blur(40px)",
            transform: "translateX(-20%)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="flex-1 text-white z-10 max-w-lg">
          <span
            className="inline-block text-white text-[10px] font-extrabold px-3.5 py-1.5 rounded-full mb-3 tracking-widest uppercase"
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            {slide.badge}
          </span>
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-2xl md:text-4xl font-black leading-tight tracking-tight drop-shadow-sm">
              {slide.title}
            </h1>
            {slide.discount && (
              <span
                className="hidden md:flex flex-col items-center justify-center w-16 h-16 rounded-2xl text-base font-black text-center leading-tight flex-shrink-0 rotate-6"
                style={{
                  background: `linear-gradient(135deg, ${slide.accentColor}, #ffb300)`,
                  color: "#1a0040",
                  boxShadow: "0 4px 16px rgba(255,214,0,0.50)",
                }}
              >
                <span className="text-lg leading-none">{slide.discount}</span>
                <span className="text-[10px] font-extrabold tracking-wide">
                  OFF
                </span>
              </span>
            )}
          </div>
          <p
            className="text-xs md:text-sm mb-4 max-w-xs leading-relaxed"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            {slide.subtitle}
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="font-extrabold text-xs md:text-sm px-6 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-smooth"
              style={{
                background: "rgba(255,255,255,0.97)",
                color: slide.bgFrom,
                boxShadow: "0 4px 16px rgba(0,0,0,0.20)",
              }}
            >
              {slide.cta} →
            </button>
            <span
              className="hidden md:block text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              {slide.highlight}
            </span>
          </div>
        </div>

        {/* Emoji */}
        <div
          className="hidden md:flex text-8xl lg:text-[7rem] z-10 flex-shrink-0 ml-8"
          aria-hidden="true"
          style={{
            filter: "drop-shadow(0 12px 28px rgba(0,0,0,0.35))",
            lineHeight: 1,
          }}
        >
          {slide.emoji}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-smooth z-20"
        style={{
          background: "rgba(0,0,0,0.28)",
          border: "1px solid rgba(255,255,255,0.20)",
          color: "white",
        }}
        aria-label="Previous slide"
        data-ocid="carousel-prev"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-smooth z-20"
        style={{
          background: "rgba(0,0,0,0.28)",
          border: "1px solid rgba(255,255,255,0.20)",
          color: "white",
        }}
        aria-label="Next slide"
        data-ocid="carousel-next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {SLIDES.map((s, i) => (
          <button
            type="button"
            key={s.id}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-400 ${
              i === current
                ? "w-7 h-2.5 bg-white"
                : "w-2.5 h-2.5 hover:bg-white/70"
            }`}
            style={{
              background: i === current ? "white" : "rgba(255,255,255,0.40)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
