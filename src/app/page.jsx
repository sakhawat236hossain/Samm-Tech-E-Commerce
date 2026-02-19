import Hero from "@/components/HomePage/Hero";
import FeaturedCategories from "@/components/HomePage/FeaturedCategories";
import TrendingProducts from "@/components/HomePage/TrendingProducts";
import SpecialOffers from "@/components/HomePage/SpecialOffers";
import BrandShowcase from "@/components/HomePage/BrandShowcase";
import Testimonials from "@/components/HomePage/Testimonials";
import NewsletterSignup from "@/components/HomePage/NewsletterSignup";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <FeaturedCategories />
      <TrendingProducts />
      <SpecialOffers />
      <BrandShowcase />
      <Testimonials />
      <NewsletterSignup />
    </main>
  );
}
