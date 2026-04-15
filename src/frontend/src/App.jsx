import { useState } from "react";
import CartSidebar from "./components/CartSidebar";
import CategoryTabs from "./components/CategoryTabs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import PaymentModal from "./components/PaymentModal";
import PaymentSuccessModal from "./components/PaymentSuccessModal";
import ProductDetailModal from "./components/ProductDetailModal";
import ProductSection from "./components/ProductSection";
import { CartProvider } from "./context/CartContext";
import {
  bestsellers,
  categories,
  featuredProducts,
  productsByCategory,
} from "./data/products";

const SHOP_BY_CATEGORY = [
  {
    id: "rice-dal",
    label: "Dal & Pulses",
    img: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "snacks",
    label: "Snacks",
    img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "dairy",
    label: "Dairy",
    img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "rice-dal",
    label: "Rice & Atta",
    img: "https://images.unsplash.com/photo-1536304993881-ff86e0c9b22e?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "cleaning",
    label: "Household",
    img: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "beverages",
    label: "Beverages",
    img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "personal-hygiene",
    label: "Personal Care",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "hair-care",
    label: "Hair Care",
    img: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "fruits",
    label: "Fresh Fruits",
    img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "laundry",
    label: "Laundry",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&q=80",
  },
];

function ShopByCategory({ onCategorySelect }) {
  return (
    <section
      className="mt-8"
      aria-label="Shop by category"
      data-ocid="shop-by-category"
    >
      <div className="flex items-center justify-between mb-4 px-0.5">
        <div className="flex items-center gap-2.5">
          <div
            className="w-1 h-5 rounded-full"
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
      </div>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2.5 md:gap-3">
        {SHOP_BY_CATEGORY.map((cat) => (
          <button
            type="button"
            key={`${cat.id}-${cat.label}`}
            onClick={() => onCategorySelect(cat.id)}
            className="flex flex-col items-center gap-0 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-smooth group cursor-pointer card-glow overflow-hidden"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
            data-ocid={`category-icon-${cat.id}`}
          >
            <span className="block w-full aspect-square overflow-hidden">
              <img
                src={cat.img}
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=120&q=80";
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
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Payment flow state
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentSuccessOpen, setPaymentSuccessOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  // Product detail state
  const [selectedProduct, setSelectedProduct] = useState(null);

  const currentProducts = searchQuery.trim()
    ? productsByCategory("all").filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : productsByCategory(activeCategory);

  const featured = featuredProducts();
  const topSellers = bestsellers();

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
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleProductDetailClose = () => {
    setSelectedProduct(null);
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
            products={currentProducts}
            layout="grid"
            onProductClick={handleProductClick}
          />
        ) : activeCategory !== "all" ? (
          <ProductSection
            title={
              categories.find((c) => c.id === activeCategory)?.label ??
              "Products"
            }
            products={currentProducts}
            layout="grid"
            onProductClick={handleProductClick}
          />
        ) : (
          <>
            <HeroCarousel />
            <ShopByCategory onCategorySelect={handleCategorySelect} />

            <ProductSection
              title="⚡ Top Picks For You"
              products={featured}
              layout="scroll"
              onViewAll={() => handleCategorySelect("all")}
              onProductClick={handleProductClick}
            />
            <ProductSection
              title="🔥 Bestsellers"
              products={topSellers}
              layout="scroll"
              onViewAll={() => handleCategorySelect("all")}
              onProductClick={handleProductClick}
            />
            <ProductSection
              title="👕 Laundry Care"
              products={productsByCategory("laundry").slice(0, 12)}
              layout="scroll"
              categoryId="laundry"
              onViewAll={() => handleCategorySelect("laundry")}
              onProductClick={handleProductClick}
            />
            <ProductSection
              title="🧹 Household Cleaning"
              products={productsByCategory("cleaning").slice(0, 12)}
              layout="scroll"
              categoryId="cleaning"
              onViewAll={() => handleCategorySelect("cleaning")}
              onProductClick={handleProductClick}
            />
            <ProductSection
              title="🌾 Rice, Dal & Pulses"
              products={productsByCategory("rice-dal").slice(0, 12)}
              layout="scroll"
              categoryId="rice-dal"
              onViewAll={() => handleCategorySelect("rice-dal")}
              onProductClick={handleProductClick}
            />

            {isHome && (
              <ProductSection
                title="🍿 Snacks & Munchies"
                products={productsByCategory("snacks").slice(0, 12)}
                layout="scroll"
                categoryId="snacks"
                onViewAll={() => handleCategorySelect("snacks")}
                onProductClick={handleProductClick}
              />
            )}

            <ProductSection
              title="🥛 Dairy & Eggs"
              products={productsByCategory("dairy").slice(0, 12)}
              layout="scroll"
              categoryId="dairy"
              onViewAll={() => handleCategorySelect("dairy")}
              onProductClick={handleProductClick}
            />
            <ProductSection
              title="🧴 Personal Hygiene"
              products={productsByCategory("personal-hygiene").slice(0, 12)}
              layout="scroll"
              categoryId="personal-hygiene"
              onViewAll={() => handleCategorySelect("personal-hygiene")}
              onProductClick={handleProductClick}
            />
            <ProductSection
              title="💆 Hair Care"
              products={productsByCategory("hair-care").slice(0, 12)}
              layout="scroll"
              categoryId="hair-care"
              onViewAll={() => handleCategorySelect("hair-care")}
              onProductClick={handleProductClick}
            />
            <ProductSection
              title="🥤 Beverages"
              products={productsByCategory("beverages").slice(0, 12)}
              layout="scroll"
              categoryId="beverages"
              onViewAll={() => handleCategorySelect("beverages")}
              onProductClick={handleProductClick}
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
          onClose={handleProductDetailClose}
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
