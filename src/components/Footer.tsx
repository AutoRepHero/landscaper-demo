import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              🌿 Spokane Landscaping
            </h3>
            <p className="text-sm">
              Professional landscaping services for homes and businesses
              throughout the greater Spokane, WA area. Licensed, insured, and
              locally owned.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Lawn Care</li>
              <li>Landscape Design</li>
              <li>Hardscaping</li>
              <li>Irrigation</li>
              <li>Snow Removal</li>
              <li>Tree & Shrub Care</li>
            </ul>
          </div>

          {/* Contact & Service Area */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 <a href="tel:5095550101" className="hover:text-white transition">(509) 555-0101</a></li>
              <li>📧 <a href="mailto:info@example.com" className="hover:text-white transition">info@example.com</a></li>
              <li>📍 Spokane, WA 99201</li>
            </ul>
            <h4 className="font-bold text-white mt-6 mb-2">Service Area</h4>
            <p className="text-sm">
              Spokane · Spokane Valley · Liberty Lake · Cheney · Airway Heights · Mead · Millwood · Deer Park
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Spokane Landscaping. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
