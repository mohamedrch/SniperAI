import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CheckCircleIcon, BoltIcon, LifebuoyIcon, UserGroupIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

      {/* Hero Section - Two Column Layout */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center md:text-left md:flex-row md:items-center md:justify-between md:gap-8 max-w-7xl mx-auto w-full relative">
        {/* Left: Text & CTAs */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center z-10">
          {/* Floating Badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 font-semibold rounded-full shadow text-sm animate-bounce">#1 Product Research Tool</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Sniper AI – Find Winning Products in Seconds
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-700 mb-8">
            AI-powered product research. Discover viral eCommerce products, generate high-converting ads, and scale your store.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-4">
            <Link to="/signup" className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-lg shadow hover:bg-blue-700 transition">
              Try it free
            </Link>
            <a href="#demo" className="px-8 py-4 bg-white border border-blue-600 text-blue-600 text-lg font-bold rounded-lg shadow hover:bg-blue-50 transition">
              Watch Demo
            </a>
          </div>
          <div className="text-gray-500 text-sm mb-8">No credit card required</div>
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full shadow-sm border border-gray-100 text-sm font-medium">
                {badge.icon}
                {badge.text}
              </div>
            ))}
          </div>
        </div>
        {/* Right: Video & Device Mockup */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 mt-10 md:mt-0">
          {/* Device mockup with screenshot */}
          <div className="relative w-[320px] h-[200px] md:w-[400px] md:h-[250px] bg-gray-200 rounded-2xl shadow-lg overflow-hidden mb-6 border-4 border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
              alt="Product Screenshot"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-300 rounded-full opacity-70" />
          </div>
          {/* Video demo */}
          <div className="w-full max-w-xl aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-inner flex items-center justify-center overflow-hidden relative">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Sniper AI Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* Play button overlay (optional) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="9.5,7.5 16.5,12 9.5,16.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 mt-12 border-t bg-white/80 text-gray-500 text-sm flex flex-col md:flex-row items-center justify-between px-6 gap-2">
        <div>© {new Date().getFullYear()} Sniper AI</div>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-blue-600 transition">Privacy</a>
          <a href="#terms" className="hover:text-blue-600 transition">Terms</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </footer>
    </div>
  );
} 