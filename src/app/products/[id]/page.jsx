"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch single product by ID
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch product: ${res.status} ${res.statusText}`);
        }
        
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message || "Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    // In a real app, this would integrate with your cart system
    toast.success(`Added ${quantity} ${product.title} to cart!`, {
      duration: 3000,
    });
  };

  const handleBuyNow = () => {
    // In a real app, this would proceed to checkout
    toast.success(`Proceeding to buy ${quantity} ${product.title}!`, {
      duration: 3000,
    });
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-zinc-400">Loading product details...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Product Not Found</h1>
          <p className="text-gray-600 dark:text-zinc-400 mb-6">{error}</p>
          <Link 
            href="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
          <Link 
            href="/products"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Product Details Display
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            href="/products"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-2"
          >
            ← Back to Products
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images Section */}
          <div className="space-y-4">
            <div className="relative bg-zinc-50 dark:bg-zinc-900 rounded-3xl overflow-hidden aspect-square">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <div>
              <span className="inline-block text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                {product.title}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-xl ${i < Math.floor(product.rating?.rate || 4) ? 'text-amber-400' : 'text-gray-300 dark:text-zinc-600'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-600 dark:text-zinc-400">
                  ({product.rating?.count || 0} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 dark:border-zinc-800 py-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <span className="text-lg text-gray-500 dark:text-zinc-400 line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-bold">
                  20% OFF
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Description</h2>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-bold text-gray-900 dark:text-white">Quantity:</span>
              <div className="flex items-center border border-gray-300 dark:border-zinc-700 rounded-xl">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 cursor-pointer py-2 text-gray-600 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-l-xl"
                >
                  -
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 cursor-pointer text-gray-600 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-r-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleAddToCart}
                className="cursor-pointer flex-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-4 px-6 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 shadow-lg"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="cursor-pointer flex-1 bg-blue-600 text-white py-4 px-6 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg"
              >
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600 dark:text-zinc-400">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600 dark:text-zinc-400">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600 dark:text-zinc-400">2-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-gray-600 dark:text-zinc-400">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">You May Also Like</h2>
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-zinc-400">Related products will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}