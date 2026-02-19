import Image from "next/image";
import { brands } from "@/data/mockData";

const BrandShowcase = () => {
  return (
    <section className="py-16 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Trusted Brands
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            We partner with the world&apos;s leading technology brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4 bg-white dark:bg-black rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-12 w-32">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
