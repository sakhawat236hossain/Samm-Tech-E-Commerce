import ProductCard from "@/components/Cards/ProductCard";
import { products } from "@/data/mockData";
import Link from "next/link";

const TrendingProducts = () => {
  // Get first 6 products for trending section
  const trendingProducts = products.slice(0, 6);

  return (
    <section className="py-16 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Trending Now
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Most popular items customers are buying right now
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block bg-zinc-900 dark:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-blue-700 transition-all active:scale-95 shadow-lg"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
