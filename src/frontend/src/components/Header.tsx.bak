import {
  ChevronDown,
  LogOut,
  MapPin,
  Navigation,
  Package,
  Search,
  ShoppingCart,
  User,
  X,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import type { Product } from "../types";
import LoginModal from "./LoginModal";

const SEARCH_PLACEHOLDERS = [
  "Search for 'kurkure'",
  "Search for 'apple juice'",
  "Search for 'cheese slices'",
  "Search for 'chocolate box'",
  "Search for 'amul butter'",
  "Search for 'banana'",
];

const MAP_CITIES = [
  { name: "Mumbai", lat: 19.076, lng: 72.877 },
  { name: "Delhi", lat: 28.644, lng: 77.216 },
  { name: "Bangalore", lat: 12.971, lng: 77.594 },
  { name: "Chennai", lat: 13.083, lng: 80.27 },
];

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

interface UserProfile {
  phone: string;
  name: string;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const { totalItems, toggleCart } = useCart();
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("Mumbai");
  const [mapOpen, setMapOpen] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Animate placeholder cycling
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

  // Filter search results
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

  // Close dropdowns on outside click
  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setSearchFocused(false);
    }
    if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
      setProfileOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [handleOutsideClick]);

  // Lock body scroll when map open
  useEffect(() => {
    if (mapOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mapOpen]);

  const handleLoginSuccess = (phone: string) => {
    setIsLoggedIn(true);
    setUserProfile({ phone, name: `User ${phone.slice(-4)}` });
    setLoginOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfile(null);
    setProfileOpen(false);
  };

  const handleMapCitySelect = (city: string) => {
    setSelectedLocation(city);
    setMapOpen(false);
    setLocationInput("");
  };

  const handleMapBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setMapOpen(false);
  };

  const showDropdown =
    searchFocused &&
    (searchQuery.trim().length > 0 ? searchResults.length > 0 : false);

  const avatarLetter = userProfile?.phone?.charAt(0) ?? "U";

  const mapImageUrl =
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=300&fit=crop&q=80";

  return (
    <>
      <header
        className="sticky top-0 z-40 bg-primary shadow-md"
        data-ocid="header"
      >
        <div className="max-w-[1400px] mx-auto px-3 md:px-5 h-16 flex items-center gap-3 md:gap-4">
          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0 flex flex-col items-start leading-none"
            aria-label="QuickCart home"
          >
            <div className="flex items-center gap-0.5">
              <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <span className="text-primary-foreground font-extrabold text-xl tracking-tight">
                QuickCart
              </span>
            </div>
            <span className="text-primary-foreground/70 text-[10px] font-medium tracking-wide leading-none pl-5">
              10 min delivery
            </span>
          </a>

          {/* Location Selector — opens map modal */}
          <button
            type="button"
            onClick={() => setMapOpen(true)}
            className="hidden md:flex items-center gap-1.5 text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium transition-colors max-w-[180px] flex-shrink-0 group rounded-lg px-2 py-1 hover:bg-primary-foreground/10"
            aria-label="Select delivery location"
            data-ocid="location-btn"
          >
            <MapPin className="w-4 h-4 flex-shrink-0 text-yellow-300" />
            <span className="truncate max-w-[120px]">{selectedLocation}</span>
            <ChevronDown className="w-3.5 h-3.5 flex-shrink-0" />
          </button>

          {/* Search bar */}
          <div
            ref={searchRef}
            className="flex-1 relative"
            data-ocid="search-bar"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                className="w-full h-10 pl-10 pr-10 rounded-full bg-background text-foreground text-sm border-0 outline-none focus:ring-2 focus:ring-primary-foreground/30 placeholder:transition-opacity"
                placeholder={searchFocused ? "Search for products..." : ""}
                aria-label="Search products"
                data-ocid="search-input"
              />
              {!searchFocused && !searchQuery && (
                <span
                  className={`absolute left-10 text-sm text-muted-foreground pointer-events-none select-none transition-opacity duration-300 ${
                    placeholderVisible ? "opacity-100" : "opacity-0"
                  }`}
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
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-card rounded-xl shadow-xl border border-border z-50 overflow-hidden max-h-[420px] overflow-y-auto">
                <p className="px-4 pt-3 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
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
                          className="w-10 h-10 rounded-lg object-cover flex-shrink-0 border border-border"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
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
            {isLoggedIn && userProfile ? (
              /* Profile dropdown */
              <div ref={profileRef} className="relative hidden md:block">
                <button
                  type="button"
                  onClick={() => setProfileOpen((v) => !v)}
                  className="flex items-center gap-2 h-9 px-3 rounded-full border-2 border-primary-foreground/50 text-primary-foreground text-sm font-semibold hover:bg-primary-foreground/10 transition-smooth"
                  aria-label="View profile"
                  data-ocid="profile-btn"
                >
                  <span className="w-6 h-6 rounded-full bg-primary-foreground text-primary text-xs font-extrabold flex items-center justify-center">
                    {avatarLetter}
                  </span>
                  <span className="max-w-[80px] truncate">
                    {userProfile.phone}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${profileOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {profileOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-56 bg-card rounded-xl shadow-xl border border-border z-50 overflow-hidden"
                    data-ocid="profile-dropdown"
                  >
                    <div className="px-4 py-3 border-b border-border bg-muted/40">
                      <p className="text-xs text-muted-foreground">
                        Logged in as
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        +91 {userProfile.phone}
                      </p>
                    </div>
                    <ul className="py-1">
                      {[
                        {
                          icon: User,
                          label: "My Profile",
                          ocid: "profile-my-profile",
                        },
                        {
                          icon: Package,
                          label: "My Orders",
                          ocid: "profile-my-orders",
                        },
                        {
                          icon: Navigation,
                          label: "Saved Addresses",
                          ocid: "profile-saved-addresses",
                        },
                      ].map(({ icon: Icon, label, ocid }) => (
                        <li key={label}>
                          <button
                            type="button"
                            className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-muted transition-colors text-foreground"
                            data-ocid={ocid}
                            onKeyDown={() => {}}
                          >
                            <Icon className="w-4 h-4 text-muted-foreground" />
                            {label}
                          </button>
                        </li>
                      ))}
                      <li>
                        <div className="my-1 border-t border-border" />
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-destructive/10 text-destructive transition-colors font-semibold"
                          data-ocid="profile-logout-btn"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              /* Login button */
              <button
                type="button"
                onClick={() => setLoginOpen(true)}
                className="hidden md:inline-flex items-center h-9 px-4 rounded-full border-2 border-primary-foreground/80 text-primary-foreground text-sm font-semibold hover:bg-primary-foreground/10 transition-smooth"
                aria-label="Login to your account"
                data-ocid="login-btn"
              >
                Login
              </button>
            )}

            {/* Cart button */}
            <button
              type="button"
              onClick={toggleCart}
              className="relative flex items-center gap-1.5 bg-primary-foreground text-primary font-bold text-sm px-3 h-9 rounded-full hover:opacity-90 transition-smooth"
              aria-label={`Cart, ${totalItems} items`}
              data-ocid="cart-toggle"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">My Cart</span>
              {totalItems > 0 && (
                <span className="bg-accent text-accent-foreground text-[11px] font-extrabold px-1.5 py-0.5 rounded-full leading-none min-w-[20px] text-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search row */}
        <div className="md:hidden px-3 pb-2.5" data-ocid="mobile-search">
          <div ref={searchRef} className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              className="w-full h-9 pl-10 pr-10 rounded-full bg-background text-foreground text-sm border-0 outline-none focus:ring-2 focus:ring-primary-foreground/30"
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
            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-card rounded-xl shadow-xl border border-border z-50 overflow-hidden max-h-[300px] overflow-y-auto">
                <ul>
                  {searchResults.map((product) => (
                    <li key={product.id}>
                      <button
                        type="button"
                        onClick={() => {
                          onSearchChange(product.name);
                          setSearchFocused(false);
                        }}
                        className="w-full text-left px-3 py-2.5 flex items-center gap-3 hover:bg-muted transition-colors"
                      >
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-9 h-9 rounded-lg object-cover flex-shrink-0 border border-border"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            ₹{product.price}
                            {product.discount > 0 && (
                              <span className="ml-1 text-secondary font-semibold">
                                {product.discountLabel}
                              </span>
                            )}
                          </p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Map Modal */}
      {mapOpen && (
        <div
          className="modal-overlay flex items-center justify-center p-4"
          onClick={handleMapBackdropClick}
          onKeyDown={(e) => e.key === "Escape" && setMapOpen(false)}
          data-ocid="map-modal-backdrop"
        >
          <div
            ref={mapRef}
            className="bg-card rounded-2xl shadow-2xl w-full max-w-lg border border-border overflow-hidden"
            data-ocid="map-modal"
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div>
                <h2 className="text-base font-bold text-foreground">
                  Deliver to
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Select your delivery location
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMapOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close map modal"
                data-ocid="map-modal-close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Map image */}
            <div className="relative w-full h-44 bg-muted overflow-hidden">
              <img
                src={mapImageUrl}
                alt="City map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-primary drop-shadow-lg" />
                  <span className="mt-1 bg-card text-foreground text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
                    {selectedLocation}
                  </span>
                </div>
              </div>
            </div>

            {/* Address input */}
            <div className="px-5 pt-4">
              <div className="flex items-center gap-2 px-3 h-10 rounded-xl border-2 border-input focus-within:border-primary bg-background transition-colors">
                <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  placeholder="Search for your area, street name..."
                  className="flex-1 text-sm bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
                  data-ocid="map-address-input"
                />
              </div>
            </div>

            {/* Preset cities */}
            <div className="px-5 py-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Popular Cities
              </p>
              <div className="grid grid-cols-2 gap-2">
                {MAP_CITIES.map((city) => (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => handleMapCitySelect(city.name)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-smooth ${
                      selectedLocation === city.name
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border text-foreground hover:border-primary/50 hover:bg-muted"
                    }`}
                    data-ocid={`map-city-${city.name.toLowerCase()}`}
                  >
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-muted-foreground" />
                    {city.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}
