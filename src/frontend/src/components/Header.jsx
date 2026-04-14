import {
  ChevronDown,
  MapPin,
  Search,
  ShoppingCart,
  X,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import LoginModal from "./LoginModal";

const SEARCH_PLACEHOLDERS = [
  "Search for 'kurkure'",
  "Search for 'apple juice'",
  "Search for 'cheese slices'",
  "Search for 'chocolate box'",
  "Search for 'amul butter'",
  "Search for 'banana'",
];

const PRESET_LOCATIONS = [
  "Koramangala, Bengaluru",
  "Andheri, Mumbai",
  "Connaught Place, Delhi",
  "Salt Lake, Kolkata",
];

export default function Header({ searchQuery, onSearchChange }) {
  const { totalItems, toggleCart } = useCart();
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(
    "Mumbai, Maharashtra",
  );
  const [locationOpen, setLocationOpen] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);

  const searchRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderVisible(false);
      setTimeout(() => {
        setPlaceholderIndex((i) => (i + 1) % SEARCH_PLACEHOLDERS.length);
        setPlaceholderVisible(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length >= 1) {
      const q = searchQuery.toLowerCase();
      const results = products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.subcategory.toLowerCase().includes(q),
        )
        .slice(0, 8);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleOutsideClick = useCallback((e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearchFocused(false);
    }
    if (locationRef.current && !locationRef.current.contains(e.target)) {
      setLocationOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [handleOutsideClick]);

  const handleSelectLocation = (loc) => {
    setSelectedLocation(loc);
    setLocationOpen(false);
    setLocationInput("");
  };

  const filteredLocations = locationInput.trim()
    ? PRESET_LOCATIONS.filter((l) =>
        l.toLowerCase().includes(locationInput.toLowerCase()),
      )
    : PRESET_LOCATIONS;

  const showDropdown =
    searchFocused && searchQuery.trim().length > 0 && searchResults.length > 0;

  return (
    <>
      <header
        className="sticky top-0 z-40"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.46 0.30 308) 0%, oklch(0.36 0.27 292) 60%, oklch(0.30 0.25 280) 100%)",
          boxShadow: "0 4px 24px rgba(80,30,180,0.30)",
        }}
        data-ocid="header"
      >
        <div className="max-w-[1400px] mx-auto px-3 md:px-5 h-16 flex items-center gap-3 md:gap-4">
          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0 flex flex-col items-start leading-none group"
            aria-label="QuickCart home"
          >
            <div className="flex items-center gap-1.5">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-smooth"
                style={{
                  background:
                    "linear-gradient(135deg, #FFD600 0%, #FF9800 100%)",
                  boxShadow: "0 2px 10px rgba(255,214,0,0.50)",
                }}
              >
                <Zap className="w-4.5 h-4.5 text-purple-900 fill-purple-900" />
              </div>
              <span className="text-white font-black text-xl tracking-tight drop-shadow-sm">
                QuickCart
              </span>
            </div>
            <span className="text-white/55 text-[10px] font-semibold tracking-widest uppercase leading-none ml-9 mt-0.5">
              10 min delivery
            </span>
          </a>

          {/* Location Selector */}
          <div
            ref={locationRef}
            className="hidden md:flex relative flex-shrink-0"
          >
            <button
              type="button"
              onClick={() => setLocationOpen((v) => !v)}
              className="flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-medium transition-smooth max-w-[200px] px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.20)",
              }}
              aria-label="Select delivery location"
              data-ocid="location-btn"
            >
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-yellow-300" />
              <span className="truncate max-w-[140px] text-sm">
                {selectedLocation}
              </span>
              <ChevronDown
                className={`w-3 h-3 flex-shrink-0 transition-transform ${locationOpen ? "rotate-180" : ""}`}
              />
            </button>

            {locationOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-card rounded-2xl shadow-2xl border border-border z-50 overflow-hidden">
                <div className="p-3 border-b border-border">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                    Delivery Location
                  </p>
                  <input
                    type="text"
                    value={locationInput}
                    onChange={(e) => setLocationInput(e.target.value)}
                    placeholder="Type to search address..."
                    className="w-full h-8 px-3 rounded-lg bg-input text-foreground text-sm placeholder:text-muted-foreground border border-border outline-none focus:ring-2 focus:ring-primary/30"
                    data-ocid="location-input"
                  />
                </div>
                <ul className="py-1">
                  {filteredLocations.map((loc) => (
                    <li key={loc}>
                      <button
                        type="button"
                        onClick={() => handleSelectLocation(loc)}
                        className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 hover:bg-muted transition-colors ${
                          selectedLocation === loc
                            ? "text-primary font-semibold bg-primary/5"
                            : "text-foreground"
                        }`}
                        data-ocid={`location-option-${loc.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`}
                      >
                        <MapPin className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                        <span>{loc}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Search bar */}
          <div
            ref={searchRef}
            className="flex-1 relative"
            data-ocid="search-bar"
          >
            <div className="relative flex items-center">
              <Search
                className="absolute left-3.5 w-4 h-4 pointer-events-none z-10"
                style={{ color: "oklch(0.55 0.18 310)" }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                className="w-full h-10 pl-10 pr-10 rounded-xl text-foreground text-sm border-0 outline-none"
                style={{
                  background: "rgba(255,255,255,0.98)",
                  boxShadow:
                    "0 2px 12px rgba(0,0,0,0.12), inset 0 1px 3px rgba(0,0,0,0.04)",
                }}
                placeholder={searchFocused ? "Search for products..." : ""}
                aria-label="Search products"
                data-ocid="search-input"
              />
              {!searchFocused && !searchQuery && (
                <span
                  className={`absolute left-10 text-sm pointer-events-none select-none transition-opacity duration-300 ${
                    placeholderVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ color: "oklch(0.58 0.01 0)" }}
                >
                  {SEARCH_PLACEHOLDERS[placeholderIndex]}
                </span>
              )}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                  data-ocid="search-clear"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-card rounded-2xl shadow-2xl border border-border z-50 overflow-hidden max-h-[420px] overflow-y-auto">
                <p className="px-4 pt-3 pb-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Search Results
                </p>
                <ul>
                  {searchResults.map((product) => (
                    <li key={product.id}>
                      <button
                        type="button"
                        onClick={() => {
                          onSearchChange(product.name);
                          setSearchFocused(false);
                        }}
                        className="w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-muted transition-colors"
                        data-ocid={`search-result-${product.id}`}
                      >
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-10 h-10 rounded-xl object-cover flex-shrink-0 border border-border"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {product.weight}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-sm font-bold text-foreground">
                            ₹{product.price}
                          </p>
                          {product.discount > 0 && (
                            <span className="badge-discount">
                              {product.discountLabel}
                            </span>
                          )}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right actions */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLoginOpen(true)}
              className="hidden md:inline-flex items-center h-9 px-4 rounded-full text-white text-sm font-semibold transition-smooth"
              style={{
                border: "2px solid rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.10)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.20)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.60)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              }}
              aria-label="Login to your account"
              data-ocid="login-btn"
            >
              Login
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className="relative flex items-center gap-1.5 font-bold text-sm px-3.5 h-9 rounded-full transition-smooth"
              style={{
                background: "linear-gradient(135deg, #FFD600 0%, #FF9800 100%)",
                color: "#3b0080",
                boxShadow: "0 2px 12px rgba(255,152,0,0.50)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 18px rgba(255,152,0,0.70)";
                e.currentTarget.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 2px 12px rgba(255,152,0,0.50)";
                e.currentTarget.style.transform = "scale(1)";
              }}
              aria-label={`Cart, ${totalItems} items`}
              data-ocid="cart-toggle"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline font-extrabold">My Cart</span>
              {totalItems > 0 && (
                <span
                  className="text-[11px] font-extrabold px-1.5 py-0.5 rounded-full leading-none min-w-[20px] text-center text-white"
                  style={{ background: "oklch(0.38 0.27 292)" }}
                >
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search row */}
        <div className="md:hidden px-3 pb-2.5" data-ocid="mobile-search">
          <div className="relative">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none z-10"
              style={{ color: "oklch(0.55 0.18 310)" }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              className="w-full h-9 pl-10 pr-10 rounded-xl text-foreground text-sm border-0 outline-none"
              style={{
                background: "rgba(255,255,255,0.97)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              }}
              placeholder="Search groceries..."
              aria-label="Search products"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </header>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
