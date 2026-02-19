import Link from "next/link";
import Logo from "@/public/Logo";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "All Products", href: "/products" },
      { name: "New Arrivals", href: "/products?new=true" },
      { name: "Best Sellers", href: "/products?best=true" },
      { name: "Deals & Offers", href: "/deals" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "FAQ", href: "/faq" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <p className="text-gray-600 dark:text-zinc-400 max-w-md">
              Your trusted destination for the latest technology products.
              Quality gadgets, competitive prices, and exceptional service.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-zinc-400 text-sm">
              © {new Date().getFullYear()} SammShop. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-gray-600 dark:text-zinc-400 text-sm">
                Made with ❤️ by SammTech
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
