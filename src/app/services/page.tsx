import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping Services in Spokane, WA | Lawn Care, Design & More",
  description:
    "Explore our full range of landscaping services in Spokane, WA — lawn care, landscape design, hardscaping, irrigation, snow removal, and tree care. Free estimates.",
};

const services = [
  {
    title: "Lawn Care",
    icon: "🌿",
    desc: "Keep your Spokane lawn healthy and beautiful year-round with our comprehensive lawn care programs.",
    features: [
      "Weekly & bi-weekly mowing",
      "Fertilization & weed control",
      "Core aeration & overseeding",
      "Spring & fall cleanups",
      "Edging & trimming",
    ],
  },
  {
    title: "Landscape Design",
    icon: "🎨",
    desc: "Custom landscape designs tailored to Spokane's unique climate and your personal style.",
    features: [
      "Full property design consultations",
      "3D renderings & blueprints",
      "Native & drought-tolerant plantings",
      "Garden bed design & installation",
      "Outdoor lighting design",
    ],
  },
  {
    title: "Hardscaping",
    icon: "🧱",
    desc: "Durable, beautiful hardscape installations that add value and function to your Spokane property.",
    features: [
      "Paver patios & walkways",
      "Retaining walls",
      "Outdoor kitchens & fire pits",
      "Driveways & steps",
      "Decorative stone & gravel",
    ],
  },
  {
    title: "Irrigation",
    icon: "💧",
    desc: "Efficient sprinkler systems designed for Spokane's freeze-thaw cycles and dry summers.",
    features: [
      "Sprinkler system design & installation",
      "Drip irrigation for gardens",
      "System repair & troubleshooting",
      "Winterization & spring startup",
      "Smart controller upgrades",
    ],
  },
  {
    title: "Snow Removal",
    icon: "❄️",
    desc: "Reliable snow and ice removal to keep your Spokane property safe all winter long.",
    features: [
      "Residential driveways & walkways",
      "Commercial lot clearing",
      "De-icing & salt application",
      "24/7 storm response",
      "Seasonal contracts available",
    ],
  },
  {
    title: "Tree & Shrub Care",
    icon: "🌳",
    desc: "Professional tree and shrub services to keep your landscape healthy and looking its best.",
    features: [
      "Pruning & shaping",
      "Tree & stump removal",
      "Disease & pest treatment",
      "Hedge trimming",
      "New tree & shrub planting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-dark text-white py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Landscaping Services
            </h1>
            <p className="text-lg text-gray-300">
              Comprehensive outdoor solutions for residential and commercial
              properties throughout Spokane, WA and the surrounding areas.
            </p>
          </div>
        </section>

        {/* Services list */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`md:flex items-center gap-12 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon block */}
                <div className="md:w-1/3 mb-8 md:mb-0">
                  <div className="bg-brand-light rounded-xl h-48 flex items-center justify-center text-6xl">
                    {s.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-dark mb-3">
                    {s.title} in Spokane, WA
                  </h2>
                  <p className="text-gray-600 mb-4">{s.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-700">
                        <span className="text-brand-green">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block bg-brand-green text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-dark transition"
                  >
                    Get a Free {s.title} Estimate
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-brand-green text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-lg mb-8 text-brand-light">
              No problem — contact us for a free on-site consultation. We'll
              assess your property and recommend the best plan for your budget.
            </p>
            <Link
              href="/contact"
              className="bg-brand-gold text-white font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition text-lg"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
