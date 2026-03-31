import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Spokane's Trusted Landscaping Company",
  description:
    "Learn about Spokane Landscaping — a locally owned, licensed, and insured landscaping company serving the greater Spokane, WA area since 2009.",
};

const team = [
  {
    name: "Mike Johnson",
    role: "Owner & Lead Designer",
    bio: "Born and raised in Spokane, Mike founded the company in 2009 with a pickup truck and a passion for transforming outdoor spaces. He holds a degree in Landscape Architecture and oversees every project personally.",
    icon: "👷",
  },
  {
    name: "Rachel Torres",
    role: "Operations Manager",
    bio: "Rachel keeps everything running smoothly — scheduling, client communication, and crew coordination. She's been with the team since 2014 and knows every client by name.",
    icon: "📋",
  },
  {
    name: "Dan Williams",
    role: "Hardscape Specialist",
    bio: "Dan is our go-to for patios, retaining walls, and outdoor living spaces. With 12 years of experience in masonry and hardscaping, he builds things that last.",
    icon: "🧱",
  },
  {
    name: "Lisa Chen",
    role: "Horticulturist",
    bio: "Lisa brings the science behind beautiful gardens. She specializes in native Inland Northwest plants and designs low-maintenance, drought-tolerant landscapes.",
    icon: "🌱",
  },
];

const values = [
  { title: "Quality First", desc: "We never cut corners. Every project gets our full attention and best materials.", icon: "⭐" },
  { title: "Locally Rooted", desc: "We live here, we work here, and we care about our Spokane community.", icon: "📍" },
  { title: "Honest Pricing", desc: "Transparent quotes with no hidden fees. What we quote is what you pay.", icon: "💰" },
  { title: "Customer Focused", desc: "Your satisfaction drives everything we do. We're not done until you're thrilled.", icon: "🤝" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-dark text-white py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-300">
              Spokane's trusted landscaping company since 2009. Locally owned,
              licensed, insured, and committed to making your property beautiful.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-brand-light rounded-xl h-72 flex items-center justify-center text-7xl">
                🌲
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-heading text-3xl font-bold text-brand-dark mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                What started as a one-man lawn mowing operation in 2009 has grown
                into one of Spokane's most trusted full-service landscaping
                companies. We've stayed true to our roots — treating every yard
                like it's our own and every client like family.
              </p>
              <p className="text-gray-600 mb-4">
                We understand the Inland Northwest. The hot summers, the cold
                winters, the unique soil conditions. That local knowledge means
                we design and maintain landscapes that actually thrive here in
                Spokane — not just survive.
              </p>
              <p className="text-gray-600">
                Today our team of 15+ professionals serves hundreds of
                residential and commercial clients across the greater Spokane
                area. We're proud to be part of this community.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-brand-dark text-center mb-12">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-xl p-8 text-center border border-gray-100 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-heading text-lg font-bold text-brand-dark mb-2">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-brand-dark text-center mb-12">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((t) => (
                <div
                  key={t.name}
                  className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100"
                >
                  <div className="text-5xl mb-4">{t.icon}</div>
                  <h3 className="font-heading text-lg font-bold text-brand-dark">
                    {t.name}
                  </h3>
                  <p className="text-brand-green font-semibold text-sm mb-3">
                    {t.role}
                  </p>
                  <p className="text-gray-600 text-sm">{t.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-8">
              Licensed, Insured & Trusted
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-2">📋</div>
                <p className="text-sm font-semibold text-brand-dark">WA State Licensed</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-2">🛡️</div>
                <p className="text-sm font-semibold text-brand-dark">Fully Insured</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-2">⭐</div>
                <p className="text-sm font-semibold text-brand-dark">5-Star Rated</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-2">🏆</div>
                <p className="text-sm font-semibold text-brand-dark">15+ Years</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-brand-green text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg mb-8 text-brand-light">
              Whether it's a small lawn care job or a full property
              transformation, we'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="bg-brand-gold text-white font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
