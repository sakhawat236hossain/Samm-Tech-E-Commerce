import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/mockData";

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Explore our wide range of tech categories and find exactly what you
            need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.name.toLowerCase()}`}
              className="group block"
            >
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:-translate-y-1 border border-zinc-100 dark:border-zinc-800">
                <div className="relative h-20 w-20 mx-auto mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-center font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
