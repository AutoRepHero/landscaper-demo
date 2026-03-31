import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Spokane Landscaping Portfolio",
  description:
    "Browse our landscaping projects in Spokane, WA. See before & after transformations for residential and commercial properties — lawn care, hardscaping, landscape design, and more.",
};

const projects = [
  {
    title: "South Hill Backyard Transformation",
    category: "Residential",
    services: "Landscape Design · Hardscaping · Irrigation",
    description:
      "Complete backyard redesign for a South Hill family. Installed a paver patio with fire pit, native plantings, and a new irrigation system. The space went from an unused lawn to an outdoor living room.",
    testimonial: "We use our backyard every single day now. It's like having a vacation in our own home.",
    client: "The Anderson Family",
    icon: "🏡",
  },
  {
    title: "Downtown Spokane Office Complex",
    category: "Commercial",
    services: "Lawn Care · Snow Removal · Tree Care",
    description:
      "Year-round grounds maintenance for a 3-building office complex in downtown Spokane. Weekly lawn care in summer, snow removal in winter, and quarterly tree pruning.",
    testimonial: "They keep our property looking sharp all year. Reliable and professional every single visit.",
    client: "Riverside Property Management",
    icon: "🏢",
  },
  {
    title: "Spokane Valley Dream Garden",
    category: "Residential",
    services: "Landscape Design · Garden Beds · Lighting",
    description:
      "Designed and installed a multi-season garden with perennials, ornamental grasses, and low-voltage landscape lighting for a Spokane Valley homeowner.",
    testimonial: "Our garden is the talk of the neighborhood. Even in fall it looks incredible.",
    client: "Maria S.",
    icon: "🌺",
  },
  {
    title: "Liberty Lake Retaining Wall & Patio",
    category: "Residential",
    services: "Hardscaping · Retaining Walls · Patio",
    description:
      "Built a 60-foot segmental retaining wall to solve a drainage issue, then added a terraced patio with outdoor seating. Functional and beautiful.",
    testimonial: "They solved our water problem AND gave us an amazing patio. Couldn't be happier.",
    client: "Dave & Karen P.",
    icon: "🧱",
  },
  {
    title: "Cheney Restaurant Patio & Planters",
    category: "Commercial",
    services: "Hardscaping · Planters · Seasonal Color",
    description:
      "Created an inviting outdoor dining patio with custom planters and seasonal flower rotations for a popular Cheney restaurant.",
    testimonial: "Our outdoor seating area doubled our summer revenue. The planters are always gorgeous.",
    client: "Fork & Vine Restaurant",
    icon: "🍽️",
  },
  {
    title: "North Spokane Full Property Makeover",
    category: "Residential",
    services: "Lawn Care · Landscape Design · Irrigation · Lighting",
    description:
      "A top-to-bottom property makeover for a new homeowner in North Spokane. New sod, garden beds, smart irrigation, pathway lighting, and a front yard that stops traffic.",
    testimonial: "Our house went from the worst yard on the block to the best. Absolutely worth every penny.",
    client: "The Nguyen Family",
    icon: "✨",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-dark text-white py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Projects
            </h1>
            <p className="text-lg text-gray-300">
              See what we've done for homes and businesses across the Spokane, WA
              area. Every project is a reflection of our commitment to quality.
            </p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
                >
                  {/* Image placeholder */}
                  <div className="bg-brand-light h-48 flex items-center justify-center text-6xl">
                    {p.icon}
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full">
                        {p.category}
                      </span>
                      <span className="text-sm text-gray-500">{p.services}</span>
                    </div>

                    <h2 className="font-heading text-xl font-bold text-brand-dark mb-2">
                      {p.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{p.description}</p>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-gray-700 italic text-sm mb-2">
                        "{p.testimonial}"
                      </p>
                      <p className="text-sm font-semibold text-brand-dark">
                        — {p.client}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-brand-green text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Your Property Could Be Next
            </h2>
            <p className="text-lg mb-8 text-brand-light">
              Let's talk about your vision. We offer free on-site estimates for
              homes and businesses in the greater Spokane area.
            </p>
            <Link
              href="/contact"
              className="bg-brand-gold text-white font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition text-lg"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
