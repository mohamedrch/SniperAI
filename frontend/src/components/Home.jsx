import React, { useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  CheckCircleIcon, 
  BoltIcon, 
  LifebuoyIcon, 
  UserGroupIcon,
  PlayIcon,
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  EyeIcon
} from '@heroicons/react/24/solid';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const demoSectionRef = useRef(null);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "#docs" },
    { name: "Login", to: "/login" },
    { name: "Sign Up", to: "/signup", cta: true },
  ];

  // Trust badges data
  const trustBadges = [
    {
      icon: <UserGroupIcon className="w-5 h-5 text-blue-600" />,
      text: "5,000+ sellers use Sniper AI",
    },
    {
      icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
      text: "No credit card required",
    },
    {
      icon: <BoltIcon className="w-5 h-5 text-yellow-500" />,
      text: "Instant insights",
    },
    {
      icon: <LifebuoyIcon className="w-5 h-5 text-purple-500" />,
      text: "24/7 Support",
    },
  ];

  // Feature cards data
  const features = [
    {
      icon: <ChartBarIcon className="w-8 h-8 text-blue-600" />,
      title: "Live Product Trends",
      description: "Real-time data on trending products across all major platforms",
      color: "blue"
    },
    {
      icon: <StarIcon className="w-8 h-8 text-yellow-500" />,
      title: "AI Scoring System",
      description: "Advanced algorithms score products for viral potential and profitability",
      color: "yellow"
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8 text-green-500" />,
      title: "One-Click Validation",
      description: "Instantly validate product demand and competition levels",
      color: "green"
    },
    {
      icon: <EyeIcon className="w-8 h-8 text-purple-500" />,
      title: "TikTok Ad Spy",
      description: "Discover winning ad creatives and strategies from top performers",
      color: "purple"
    }
  ];

  // Marketplace logos
  const marketplaces = [
    { name: "Shopify", logo: "🛍️" },
    { name: "Amazon", logo: "📦" },
    { name: "Etsy", logo: "🎨" },
    { name: "TikTok", logo: "🎵" },
    { name: "Meta Ads", logo: "📱" },
    { name: "Google Ads", logo: "🔍" }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Sniper AI helped me discover a product that went viral and generated $50K in sales in just 2 weeks!",
      author: "Sarah Chen",
      role: "E-commerce Entrepreneur",
      avatar: "👩‍💼"
    },
    {
      quote: "The AI scoring system is incredibly accurate. Every product I've launched with a high score has been profitable.",
      author: "Mike Rodriguez",
      role: "Dropshipping Expert",
      avatar: "👨‍💻"
    },
    {
      quote: "Finally, a tool that actually delivers on its promises. Sniper AI is a game-changer for product research.",
      author: "Emma Thompson",
      role: "Online Store Owner",
      avatar: "👩‍🎨"
    }
  ];

  const scrollToDemo = () => {
    demoSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans relative overflow-x-hidden">
      {/* Background Gradient & SVG */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50 opacity-80" />
        <svg className="absolute -top-32 -right-32 w-[600px] h-[600px] opacity-30" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="300" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(300 300) rotate(90) scale(300)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5b4fc" />
              <stop offset="1" stopColor="#f9a8d4" stopOpacity="0.3" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Header */}
      <header className="sticky top-0 w-full flex items-center justify-between px-6 py-4 shadow-sm bg-white/80 backdrop-blur z-20 transition-all">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-extrabold text-2xl tracking-tight text-gray-900 group-hover:text-blue-600 transition">Sniper <span className="text-blue-600 group-hover:text-purple-600 transition">AI</span></span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-base font-medium">
          {navLinks.slice(0, 3).map(link => (
            <a key={link.name} href={link.href} className="hover:text-blue-600 transition">
              {link.name}
            </a>
          ))}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${isActive ? "text-blue-600 font-bold" : ""}`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold ${isActive ? "ring-2 ring-blue-400" : ""}`
            }
          >
            Sign Up
          </NavLink>
        </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition z-30"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/40 z-20" onClick={() => setMobileMenuOpen(false)} />
        )}
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 md:hidden flex flex-col gap-6 pt-24 px-8 ${{ true: "translate-x-0", false: "translate-x-full" }[mobileMenuOpen]}`}
          style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
        >
          {navLinks.slice(0, 3).map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg hover:text-blue-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-lg hover:text-blue-600 transition ${isActive ? "text-blue-600 font-bold" : ""}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold text-lg ${isActive ? "ring-2 ring-blue-400" : ""}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign Up
          </NavLink>
        </nav>
      </header>

      {/* Hero Section - Optimized Layout */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text & CTAs */}
            <div className="space-y-8">
              {/* Floating Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold rounded-full shadow-sm border border-blue-200">
                <StarIcon className="w-4 h-4" />
                #1 Product Research Tool
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Find Your BEEEEEEEEEEEEEEEB
                </span>
                <br />
                <span className="text-gray-900">Powered by AI, Trusted by 5,000+ Sellers</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Sniper AI helps eCommerce sellers discover viral, high-converting products in seconds. 
                Our AI analyzes millions of data points to find products with explosive growth potential.
              </p>

              {/* Key Stats */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <UserGroupIcon className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">5,000+ Active Sellers</span>
                </div>
                <div className="flex items-center gap-2">
                  <BoltIcon className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">50K+ Products Discovered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="font-semibold">95% Success Rate</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/signup" 
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Try for Free
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={scrollToDemo}
                  className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 text-lg font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <PlayIcon className="w-5 h-5" />
                  Watch Demo
                </button>
                <button 
                  onClick={scrollToDemo}
                  className="px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <EyeIcon className="w-5 h-5" />
                  See It In Action
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-4 h-4 text-blue-500" />
                  <span>GDPR compliant</span>
                </div>
              </div>
            </div>

            {/* Right: Media */}
            <div className="relative">
              {/* Device mockup with screenshot */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative w-[320px] h-[200px] md:w-[400px] md:h-[250px] bg-gray-200 rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-300 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                    alt="Sniper AI Dashboard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-300 rounded-full opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof - Marketplaces */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-gray-600 mb-8 font-medium">Trusted by sellers across all major platforms</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {marketplaces.map((marketplace, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
                  <span className="text-2xl">{marketplace.logo}</span>
                  <span className="font-semibold text-gray-700">{marketplace.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section id="features" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Find Winning Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered platform combines advanced analytics with real-time data to give you the edge in product research.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="group p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-4 p-3 bg-gray-50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section ref={demoSectionRef} className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                See Sniper AI in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Watch how our AI discovers trending products and analyzes their viral potential in real-time.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Sniper AI Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <PlayIcon className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Loved by Thousands of Sellers
              </h2>
              <p className="text-xl text-gray-600">
                See what our users are saying about their success with Sniper AI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Find Your Next Viral Product?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 5,000+ sellers who are already discovering winning products with Sniper AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup" 
                className="px-8 py-4 bg-white text-blue-600 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Free Trial
              </Link>
              <button 
                onClick={scrollToDemo}
                className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Watch Demo
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-4">No credit card required • 14-day free trial</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t bg-white/80 text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Sniper AI. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-blue-600 transition">Privacy</a>
              <a href="#terms" className="hover:text-blue-600 transition">Terms</a>
              <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 