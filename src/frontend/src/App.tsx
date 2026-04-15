import { useState } from "react";
import CartSidebar from "./components/CartSidebar";
import CategoryTabs from "./components/CategoryTabs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
// @ts-ignore - JSX component
import PaymentModal from "./components/PaymentModal";
// @ts-ignore - JSX component
import PaymentSuccessModal from "./components/PaymentSuccessModal";
// @ts-ignore - JSX component
import ProductDetailModal from "./components/ProductDetailModal";
import ProductSection from "./components/ProductSection";
import { CartProvider, useCart } from "./context/CartContext";
import {
  bestsellers,
  categories,
  featuredProducts,
  productsByCategory,
} from "./data/products";
import type { Category, Product } from "./types";

const SHOP_BY_CATEGORY = [
  {
    id: "rice-dal",
    label: "Dal & Pulses",
    img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop",
  },
  {
    id: "snacks",
    label: "Snacks",
    img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=200&fit=crop",
  },
  {
    id: "dairy",
    label: "Dairy",
    img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop",
  },
  {
    id: "rice-dal",
    label: "Rice & Atta",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop",
  },
  {
    id: "cleaning",
    label: "Household",
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=200&fit=crop",
  },
  {
    id: "beverages",
    label: "Beverages",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop",
  },
  {
    id: "personal-hygiene",
    label: "Personal Hygiene",
    img: "https://images.unsplash.com/photo-1556228578-dd539282b964?w=300&h=200&fit=crop",
  },
  {
    id: "hair-care",
    label: "Hair Care",
    img: "https://images.unsplash.com/photo-1585232351009-aa29f6a88c47?w=300&h=200&fit=crop",
  },
  {
    id: "fruits",
    label: "Fresh Fruits",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop",
  },
  {
    id: "laundry",
    label: "Laundry Care",
    img: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300&h=200&fit=crop",
  },
];

function ShopByCategory({
  onCategorySelect,
}: { onCategorySelect: (id: string) => void }) {
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
            <span
              className="block w-full overflow-hidden"
              style={{
                height: "80px",
                borderRadius: "14px 14px 0 0",
                flexShrink: 0,
              }}
            >
              <img
                src={cat.img}
                alt={cat.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
                className="group-hover:scale-105 transition-smooth"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop";
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
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentSuccessOpen, setPaymentSuccessOpen] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0);
  const { clearCart, closeCart, totalPrice } = useCart();

  const PLATFORM_FEE = 5;
  const DELIVERY_FEE = 30;
  const FREE_DELIVERY_THRESHOLD = 199;
  const isFreeDelivery = totalPrice >= FREE_DELIVERY_THRESHOLD;
  const deliveryFee = isFreeDelivery ? 0 : DELIVERY_FEE;
  const computedGrandTotal = totalPrice + deliveryFee + PLATFORM_FEE;

  const currentProducts = searchQuery.trim()
    ? productsByCategory("all").filter(
        (p: Product) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : productsByCategory(activeCategory);

  const featured = featuredProducts();
  const topSellers = bestsellers();

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat.id);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProceedToPayment = (total: number) => {
    setGrandTotal(total);
    closeCart();
    setPaymentOpen(true);
  };

  const handlePaymentSuccess = () => {
    setPaymentOpen(false);
    setPaymentSuccessOpen(true);
    clearCart();
  };

  const handlePaymentSuccessClose = () => {
    setPaymentSuccessOpen(false);
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
            onProductClick={setSelectedProduct}
          />
        ) : activeCategory !== "all" ? (
          <ProductSection
            title={
              categories.find((c: { id: string }) => c.id === activeCategory)
                ?.label ?? "Products"
            }
            products={currentProducts}
            layout="grid"
            onProductClick={setSelectedProduct}
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
              onProductClick={setSelectedProduct}
            />

            <ProductSection
              title="🔥 Bestsellers"
              products={topSellers}
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

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Payment Modal */}
      <PaymentModal
        isOpen={paymentOpen}
        onClose={() => setPaymentOpen(false)}
        onPaymentSuccess={handlePaymentSuccess}
        grandTotal={grandTotal || computedGrandTotal}
      />

      {/* Payment Success Modal */}
      <PaymentSuccessModal
        isOpen={paymentSuccessOpen}
        onClose={handlePaymentSuccessClose}
        grandTotal={grandTotal}
      />
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
