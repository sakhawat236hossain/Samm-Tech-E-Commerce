import Image from "next/image";
import Link from "next/link";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Summer Tech Sale",
      description: "Up to 30% off on all laptops and tablets",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop",
      discount: "30% OFF",
      cta: "Shop Laptops",
    },
    {
      id: 2,
      title: "New Arrivals",
      description: "Latest smartphones and wearables just landed",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop",
      discount: "NEW",
      cta: "Explore New",
    },
    {
      id: 3,
      title: "Gaming Special",
      description: "Gaming consoles and accessories at special prices",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
      discount: "25% OFF",
      cta: "Gaming Gear",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Special Offers
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Don&apos;t miss out on our limited-time deals and exclusive offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <Link key={offer.id} href="/products" className="group block">
              <div className="relative bg-zinc-50 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20">
                <div className="relative h-64 w-full">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-amber-400 dark:bg-amber-500 text-zinc-900 font-black px-4 py-2 rounded-full text-sm">
                    {offer.discount}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 dark:text-zinc-400 mb-4">
                    {offer.description}
                  </p>
                  <div className="inline-block bg-zinc-900 dark:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-blue-700 transition-all">
                    {offer.cta}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
