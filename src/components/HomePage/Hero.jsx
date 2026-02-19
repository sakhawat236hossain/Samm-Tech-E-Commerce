import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-8xl mx-auto w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-blue-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 lg:p-16 transition-colors duration-300">
        {/* 1. Left Text Section */}
        <div className="text-left order-2 md:order-1">
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">
            Top Quality Products
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mt-4 leading-tight">
            Best Tech For <br />
            <span className="text-blue-600 dark:text-blue-400">
              Your Daily Life
            </span>
          </h1>
          <p className="text-gray-600 dark:text-zinc-400 mt-6 text-base md:text-lg leading-relaxed max-w-md">
            Discover the latest gadgets and fashion trends at SammShop. Explore
            our exclusive collection and find the perfect match for your
            lifestyle today.
          </p>

          <div className="mt-8 md:mt-10">
            <Link
              href="/products"
              className="inline-block bg-zinc-900 dark:bg-blue-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-zinc-200 dark:shadow-none"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* 2. Right Image Section */}
        <div className="relative w-full h-[250px] md:h-[400px] flex justify-center items-center order-1 md:order-2">
          <div className="bg-blue-200 dark:bg-zinc-800 rounded-2xl w-full h-full flex items-center justify-center overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"
              alt="Premium Smart Watch"
              fill
              priority
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Discount Badge */}
          <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-amber-400 dark:bg-amber-500 text-zinc-900 font-black p-3 md:p-4 rounded-full shadow-lg animate-bounce text-center leading-tight text-xs md:text-sm">
            20% <br /> OFF
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
