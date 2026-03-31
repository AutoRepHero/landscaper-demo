import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  { title: "Lawn Care", desc: "Mowing, fertilization, aeration, and seasonal cleanups to keep your Spokane yard pristine.", icon: "🌿" },
  { title: "Landscape Design", desc: "Custom landscape architecture tailored to Spokane's climate and your vision.", icon: "🎨" },
  { title: "Hardscaping", desc: "Patios, retaining walls, walkways, and outdoor living spaces built to last.", icon: "🧱" },
  { title: "Irrigation", desc: "Sprinkler installation, repair, and winterization for Spokane's freeze-thaw seasons.", icon: "💧" },
  { title: "Snow Removal", desc: "Reliable residential and commercial snow removal throughout the Spokane area.", icon: "❄️" },
  { title: "Tree & Shrub Care", desc: "Pruning, trimming, and health assessments for all your trees and shrubs.", icon: "🌳" },
];

const testimonials = [
  { name: "Sarah M.", location: "South Hill, Spokane", text: "They completely transformed our backyard. The design team listened to every detail and delivered beyond expectations. Best landscaper in Spokane!", rating: 5 },
  { name: "James R.", location: "North Spokane", text: "Reliable, professional, and fairly priced. They handle our lawn care year-round and our yard has never looked better.", rating: 5 },
  { name: "Linda K.", location: "Spokane Valley", text: "The hardscaping work on our patio was incredible. On time, on budget, and the quality is outstanding.", rating: 5 },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark text-white py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-brand-light text-sm font-semibold uppercase tracking-widest mb-4">
              Spokane's Trusted Landscaping Professionals
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Beautiful Landscapes for Spokane, WA Homes & Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From lawn care to full landscape design, we bring your outdoor vision to life. Licensed, insured, and proudly serving the greater Spokane area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-brand-gold text-white font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition text-lg"
              >
                Request a Free Estimate
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-brand-dark transition text-lg"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Trust badges */}
        <section className="bg-brand-light py-8">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center text-brand-dark font-semibold">
            <div>✅ Licensed & Insured</div>
            <div>⭐ 15+ Years Experience</div>
            <div>🏆 5-Star Rated</div>
            <div>📍 Locally Owned in Spokane</div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6 bg-white" id="services">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-brand-dark mb-4">
              Our Landscaping Services in Spokane, WA
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Comprehensive outdoor solutions for residential and commercial properties throughout the Spokane area.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition border border-gray-100"
                >
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="bg-brand-green text-white font-bold px-8 py-4 rounded-lg hover:bg-brand-dark transition"
              >
                See All Services
              </Link>
            </div>
          </div>
        </section>

        {/* About snippet */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-brand-green rounded-xl h-64 flex items-center justify-center text-white text-6xl">
                🌲
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-heading text-3xl font-bold text-brand-dark mb-4">
                Spokane's Landscaping Experts Since 2009
              </h2>
              <p className="text-gray-600 mb-4">
                We're a locally owned landscaping company rooted in Spokane, WA. Our team understands the unique challenges of the Inland Northwest climate — from hot summers to snowy winters — and we design, build, and maintain landscapes that thrive year-round.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need weekly lawn maintenance or a complete outdoor transformation, we treat every property like our own.
              </p>
              <Link
                href="/contact"
                className="text-brand-green font-bold hover:underline"
              >
                Get to know our team →
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-brand-dark mb-12">
              What Spokane Homeowners Are Saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-100"
                >
                  <div className="text-brand-gold text-xl mb-4">
                    {"★".repeat(t.rating)}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                  <p className="font-bold text-brand-dark">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-brand-green text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Spokane Property?
            </h2>
            <p className="text-lg mb-8 text-brand-light">
              Get a free, no-obligation estimate today. We serve Spokane, Spokane Valley, Liberty Lake, Cheney, Airway Heights, and the surrounding areas.
            </p>
            <Link
              href="/contact"
              className="bg-brand-gold text-white font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition text-lg"
            >
              Request Your Free Estimate
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
