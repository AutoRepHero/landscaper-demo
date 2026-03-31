"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brand-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Business Name */}
        <Link href="/" className="font-heading text-xl font-bold tracking-wide">
          🌿 Spokane Landscaping
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-brand-light transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-brand-light transition">
            Services
          </Link>
          <Link href="/projects" className="hover:text-brand-light transition">
            Projects
          </Link>
          <Link href="/about" className="hover:text-brand-light transition">
            About
          </Link>
          <Link href="/blog" className="hover:text-brand-light transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-brand-light transition">
            Contact
          </Link>
          <a
            href="tel:5095550101"
            className="bg-brand-gold text-white font-bold px-5 py-2 rounded-lg hover:bg-opacity-90 transition"
          >
            (509) 555-0101
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-brand-dark border-t border-brand-green px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-brand-light transition">
              Home
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-brand-light transition">
              Services
            </Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)} className="hover:text-brand-light transition">
              Projects
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-brand-light transition">
              About
            </Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-brand-light transition">
              Blog
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-brand-light transition">
              Contact
            </Link>
            <a
              href="tel:5095550101"
              className="bg-brand-gold text-white font-bold px-5 py-3 rounded-lg text-center hover:bg-opacity-90 transition"
            >
              (509) 555-0101
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
