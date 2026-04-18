import { useMemo, useState } from "react";
import CartSidebar from "./components/CartSidebar";
import CategoryTabs from "./components/CategoryTabs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import PaymentModal from "./components/PaymentModal";
import PaymentSuccessModal from "./components/PaymentSuccessModal";
import ProductDetailModal from "./components/ProductDetailModal";
import ProductSection from "./components/ProductSection";
import { CartProvider, useCart } from "./context/CartContext";
import { categories, products, productsByCategory } from "./data/products";

// Shop By Category quick links — verified Unsplash photo IDs, stable permanent URLs
const SHOP_BY_CATEGORY = [
  {
    id: "rice-dal",
    label: "Dal & Pulses",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "snacks",
    label: "Snacks",
    img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "dairy",
    label: "Dairy",
    img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "rice-dal",
    label: "Rice & Atta",
    img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "cleaning",
    label: "Household",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "beverages",
    label: "Beverages",
    img: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "personal-hygiene",
    label: "Personal Care",
    img: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "hair-care",
    label: "Hair Care",
    img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "fruits",
    label: "Fresh Fruits",
    img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "laundry",
    label: "Laundry",
    img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=200&h=200&fit=crop&auto=format",
  },
];

function ShopByCategory({ onCategorySelect }) {
  return (
    <section
      className="mt-8"
      aria-label="Shop by category"
      data-ocid="shop-by-category.section"
    >
      <div className="flex items-center gap-2.5 mb-4 px-0.5">
        <div
          className="w-1 h-5 rounded-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.48 0.27 308) 0%, oklch(0.55 0.22 290) 100%)",
          }}
          aria-hidden="true"
        />
        <h2 className="text-base md:text-[1.15rem] font-extrabold text-foreground tracking-tight">
          Shop By Category
        </h2>
      </div>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2.5 md:gap-3">
        {SHOP_BY_CATEGORY.map((cat, idx) => (
          <button
            type="button"
            key={`${cat.id}-${idx}`}
            onClick={() => onCategorySelect(cat.id)}
            className="flex flex-col items-center gap-0 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-smooth group cursor-pointer card-glow overflow-hidden"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
            data-ocid={`shop-by-category.item.${idx + 1}`}
          >
            <span className="block w-full aspect-square overflow-hidden">
              <img
                src={cat.img}
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='13' fill='%236b7280' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(cat.label)}%3C/text%3E%3C/svg%3E`;
                }}
              />
            </span>
            <span className="text-[10px] md:text-xs font-bold text-foreground text-center leading-tight line-clamp-2 py-1.5 px-1 w-full">
              {cat.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function AppContent() {
  const { clearCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Payment flow state
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentSuccessOpen, setPaymentSuccessOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  // Product detail state
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filtered products based on search or active category
  const filteredProducts = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q),
      );
    }
    return productsByCategory(activeCategory);
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat.id);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategorySelect = (id) => {
    setActiveCategory(id);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProceedToPayment = (total) => {
    setCartTotal(total);
    setPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    setPaymentModalOpen(false);
    setPaymentSuccessOpen(true);
  };

  const handlePaymentSuccessClose = () => {
    setPaymentSuccessOpen(false);
    clearCart();
  };

  const isHome = !searchQuery && activeCategory === "all";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-3 md:px-6 pb-12">
        {searchQuery ? (
          <ProductSection
            title={`Results for "${searchQuery}"`}
            products={filteredProducts}
            layout="grid"
            onProductClick={setSelectedProduct}
          />
        ) : activeCategory !== "all" ? (
          <ProductSection
            title={
              categories.find((c) => c.id === activeCategory)?.name ??
              "Products"
            }
            products={filteredProducts}
            layout="grid"
            onProductClick={setSelectedProduct}
          />
        ) : (
          <>
            <HeroCarousel />
            <ShopByCategory onCategorySelect={handleCategorySelect} />

            <ProductSection
              title="⚡ Top Picks For You"
              products={products.filter((p) => p.rating >= 4.5).slice(0, 12)}
              layout="scroll"
              onViewAll={() => handleCategorySelect("all")}
              onProductClick={setSelectedProduct}
            />
            <ProductSection
              title="🔥 Bestsellers"
              products={[...products]
                .sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0))
                .slice(0, 12)}
              layout="scroll"
              onViewAll={() => handleCategorySelect("all")}
              onProductClick={setSelectedProduct}
            />
            <ProductSection
              title="👕 Laundry Care"
              products={productsByCategory("laundry").slice(0, 12)}
              layout="scroll"
              categoryId="laundry"
              onViewAll={() => handleCategorySelect("laundry")}
              onProductClick={setSelectedProduct}
            />
            <ProductSection
              title="🧹 Household Cleaning"
              products={productsByCategory("cleaning").slice(0, 12)}
              layout="scroll"
              categoryId="cleaning"
              onViewAll={() => handleCategorySelect("cleaning")}
              onProductClick={setSelectedProduct}
            />
            <ProductSection
              title="🌾 Rice, Dal & Pulses"
              products={productsByCategory("rice-dal").slice(0, 12)}
              layout="scroll"
              categoryId="rice-dal"
              onViewAll={() => handleCategorySelect("rice-dal")}
              onProductClick={setSelectedProduct}
            />
            {isHome && (
              <ProductSection
                title="🍿 Snacks & Munchies"
                products={productsByCategory("snacks").slice(0, 12)}
                layout="scroll"
                categoryId="snacks"
                onViewAll={() => handleCategorySelect("snacks")}
                onProductClick={setSelectedProduct}
              />
            )}
            <ProductSection
              title="🥛 Dairy & Eggs"
              products={productsByCategory("dairy").slice(0, 12)}
              layout="scroll"
              categoryId="dairy"
              onViewAll={() => handleCategorySelect("dairy")}
              onProductClick={setSelectedProduct}
            />
            <ProductSection
              title="🧴 Personal Hygiene"
              products={productsByCategory("personal-hygiene").slice(0, 12)}
              layout="scroll"
              categoryId="personal-hygiene"
              onViewAll={() => handleCategorySelect("personal-hygiene")}
              onProductClick={setSelectedProduct}
            />
            <ProductSection
              title="💆 Hair Care"
              products={productsByCategory("hair-care").slice(0, 12)}
              layout="scroll"
              categoryId="hair-care"
              onViewAll={() => handleCategorySelect("hair-care")}
              onProductClick={setSelectedProduct}
            />
            <ProductSection
              title="🥤 Beverages"
              products={productsByCategory("beverages").slice(0, 12)}
              layout="scroll"
              categoryId="beverages"
              onViewAll={() => handleCategorySelect("beverages")}
              onProductClick={setSelectedProduct}
            />
          </>
        )}
      </main>

      <CartSidebar onProceedToPayment={handleProceedToPayment} />
      <Footer />

      {/* Payment flow modals */}
      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        onPaymentSuccess={handlePaymentSuccess}
        grandTotal={cartTotal}
      />
      <PaymentSuccessModal
        isOpen={paymentSuccessOpen}
        onClose={handlePaymentSuccessClose}
        grandTotal={cartTotal}
      />

      {/* Product detail modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
