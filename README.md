# SammShop - Premium E-Commerce Frontend

A modern, responsive e-commerce frontend built with Next.js 16, React, and Tailwind CSS. Features a clean design with dark mode support, dynamic product listings, and comprehensive product details pages.

## 🚀 Live Demo

[Deployed on Vercel - Live Link](https://samm-tech-e-commerce.vercel.app/)

## 📋 Project Overview

This is a mini e-commerce frontend application that showcases modern web development practices using Next.js App Router, responsive design, and clean component architecture.

### Key Features Implemented ✅

**Product Listing Page**

- Fetches product data from FakeStore API
- Displays product images, titles, prices, and categories
- Clean and structured UI with responsive grid layout
- Product cards with hover effects and smooth animations

**Filtering Features**

- Category-based filtering (Smartphones, Laptops, Wearables, etc.)
- Price range filtering capabilities
- Dynamic filtering without page reload
- Real-time search and filter updates

**Product Details Page**

- Dynamic routing using `[id]` parameter
- Comprehensive product information display
- Proper loading states with spinners
- Error handling for invalid product IDs
- Quantity selector and add-to-cart functionality
- Related products section

**Responsive Design**

- Mobile-first approach with Tailwind CSS
- Fully responsive for mobile, tablet, and desktop
- Dark mode support with seamless theme switching
- Touch-friendly interfaces for mobile devices

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript (React 19)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **API**: FakeStore API
- **Deployment**: Vercel (Recommended)

## 📁 Project Structure

```
samm-tech-e-commerce/
├── src/
│   ├── app/
│   │   ├── products/
│   │   │   ├── [id]/
│   │   │   │   └── page.jsx          # Product details page
│   │   │   └── page.jsx              # Products listing page
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.jsx                # Root layout with Navbar/Footer
│   │   └── page.jsx                  # Homepage
│   ├── components/
│   │   ├── Cards/
│   │   │   └── ProductCard.jsx       # Reusable product card component
│   │   ├── HomePage/
│   │   │   ├── BrandShowcase.jsx
│   │   │   ├── FeaturedCategories.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── NewsletterSignup.jsx
│   │   │   ├── SpecialOffers.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── TrendingProducts.jsx
│   │   └── shared/
│   │       ├── Footer.jsx            # Minimalist footer
│   │       └── Navbar.jsx            # Enhanced navbar with glassmorphism
│   ├── data/
│   │   └── mockData.js               # Mock data for categories/testimonials
│   └── public/
│       └── Logo.jsx                  # Brand logo component
├── public/
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── tailwind.config.js
```

## 🎯 Requirements Fulfilled

### ✅ Core Requirements

- **Product Listing**: Fetches from FakeStore API, displays essential product info
- **Filtering**: Category and price filtering with dynamic updates
- **Product Details**: Dynamic routing with comprehensive product display
- **Loading States**: Proper loading indicators on all data-fetching components
- **Error Handling**: Graceful error handling for API failures and invalid routes
- **Responsive Design**: Mobile-first responsive design for all screen sizes
- **Code Structure**: Clean folder structure with reusable components
- **Git Usage**: Proper branching and meaningful commits (assumed)

### 🎁 Bonus Features Implemented

- **Tailwind CSS**: Modern styling with dark mode support
- **Loading Skeletons**: Animated loading states
- **Toast Notifications**: User feedback system
- **Glassmorphism Effects**: Modern UI design elements
- **SEO Optimization**: Proper meta tags and semantic HTML

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sakhawat236hossain/Samm-Tech-E-Commerce
cd samm-tech-e-commerce
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```
http://localhost:3000
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📱 Features in Detail

### Homepage (`/`)

- Hero section with compelling call-to-action
- Featured categories browsing
- Trending products showcase
- Special offers and promotions
- Trusted brand showcase
- Customer testimonials
- Newsletter subscription

### Products Page (`/products`)

- Grid layout with responsive columns
- Product filtering by category
- Sort by price, popularity, or newest
- Infinite scroll (planned)
- Loading skeletons for better UX

### Product Details (`/products/[id]`)

- High-quality product images
- Detailed product information
- Customer ratings and reviews
- Quantity selector
- Add to cart and Buy Now options
- Related products suggestions
- Proper error handling for invalid products

## 🔧 Customization

### Theme Colors

Modify colors in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        secondary: "#your-color",
      },
    },
  },
};
```

### API Configuration

Update API endpoints in:

- `src/app/products/page.jsx` (products listing)
- `src/app/products/[id]/page.jsx` (product details)

### Adding New Components

1. Create component in appropriate folder under `src/components/`
2. Export and import in pages as needed
3. Follow existing styling patterns

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will automatically deploy on push to main branch

### Manual Deployment

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com/) for product data
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
- [Lucide React](https://lucide.dev/) for beautiful icons

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
