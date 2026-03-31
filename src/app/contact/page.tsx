import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Free Landscaping Estimate in Spokane, WA",
  description:
    "Request a free landscaping estimate in Spokane, WA. Contact our team for lawn care, landscape design, hardscaping, irrigation, and snow removal services.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-dark text-white py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300">
              Ready to get started? Fill out the form below or give us a call.
              We serve Spokane, Spokane Valley, Liberty Lake, and surrounding areas.
            </p>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-brand-dark mb-6">
                Request a Free Estimate
              </h2>
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="font-heading text-xl font-bold text-brand-dark mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="font-semibold text-brand-dark">Phone</p>
                      <a href="tel:5095550101" className="hover:text-brand-green transition">
                        (509) 555-0101
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">📧</span>
                    <div>
                      <p className="font-semibold text-brand-dark">Email</p>
                      <a href="mailto:info@example.com" className="hover:text-brand-green transition">
                        info@example.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="font-semibold text-brand-dark">Location</p>
                      <p>Spokane, WA 99201</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🕐</span>
                    <div>
                      <p className="font-semibold text-brand-dark">Hours</p>
                      <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                      <p>Sat: 9:00 AM – 2:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="font-heading text-xl font-bold text-brand-dark mb-4">
                  Service Area
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ Spokane</li>
                  <li>✅ Spokane Valley</li>
                  <li>✅ Liberty Lake</li>
                  <li>✅ Cheney</li>
                  <li>✅ Airway Heights</li>
                  <li>✅ Mead</li>
                  <li>✅ Millwood</li>
                  <li>✅ Deer Park</li>
                  <li>✅ Nine Mile Falls</li>
                  <li>✅ Medical Lake</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
