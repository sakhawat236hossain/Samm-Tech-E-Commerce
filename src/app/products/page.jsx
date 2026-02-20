"use client";
import ProductCard from "@/components/Cards/ProductCard";
import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">j
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black text-zinc-900 dark:text-white">
            Our Collections
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            Showing {products.length} premium products
          </p>
        </div>
        
        {/* Simple Filter Placeholder */}
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-xl text-sm font-bold bg-white dark:bg-zinc-900">
            Sort by: Newest
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}