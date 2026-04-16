import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <section className="mt-8" data-ocid="product-grid.section">
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
          All Products
        </h2>
        <span className="text-sm text-muted-foreground ml-1">
          ({products.length} items)
        </span>
      </div>

      {products.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center py-20 gap-4"
          data-ocid="product-grid.empty_state"
        >
          <span className="text-5xl" aria-hidden="true">
            😞
          </span>
          <p className="text-base font-semibold text-muted-foreground">
            No products found
          </p>
          <p className="text-sm text-muted-foreground">
            Try a different category or search term
          </p>
        </div>
      ) : (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
          data-ocid="product-grid.list"
        >
          {products.map((product, idx) => (
            <div key={product.id} data-ocid={`product-grid.item.${idx + 1}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
