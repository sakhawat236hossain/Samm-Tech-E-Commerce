import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl p-4 transition-all hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-none">
      {/* Product Image Container */}
      <div className="relative h-56 w-full bg-zinc-50 dark:bg-zinc-800 rounded-2xl overflow-hidden mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-w-768px) 100vw, 25vw"
          className="object-contain p-6 group-hover:scale-110 transition-transform duration-500 font-medium"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md">
          {product.category}
        </span>
        
        <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>

        <div className="flex items-center justify-between pt-2">
          <p className="text-xl font-black text-zinc-900 dark:text-white">
            ${product.price}
          </p>
          <Link
            href={`/products/${product.id}`}
            className="h-10 w-10 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all active:scale-90 shadow-md"
          >
            →
          </Link>
        </div>
      </div>
    </div>
  );
}