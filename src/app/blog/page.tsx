import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping Tips & Blog | Spokane, WA Lawn & Garden Advice",
  description:
    "Expert landscaping tips, seasonal lawn care guides, and outdoor living ideas for Spokane, WA homeowners. Stay informed with our latest articles.",
};

const posts = [
  {
    slug: "spokane-spring-lawn-care-checklist",
    title: "The Ultimate Spring Lawn Care Checklist for Spokane, WA",
    date: "March 15, 2024",
    excerpt:
      "Spring in Spokane means it's time to wake up your lawn. From aeration to fertilization, here's everything you need to do to get your yard ready for the growing season.",
    category: "Lawn Care",
    icon: "🌱",
  },
  {
    slug: "best-plants-spokane-climate",
    title: "10 Best Plants for Spokane's Climate (Low Maintenance & Beautiful)",
    date: "February 28, 2024",
    excerpt:
      "Not every plant thrives in the Inland Northwest. We break down the top 10 plants that love Spokane's hot summers and cold winters — and look great doing it.",
    category: "Landscape Design",
    icon: "🌺",
  },
  {
    slug: "hardscaping-ideas-spokane-backyards",
    title: "5 Hardscaping Ideas That Transform Spokane Backyards",
    date: "February 10, 2024",
    excerpt:
      "Thinking about adding a patio, fire pit, or retaining wall? Here are five hardscaping ideas that are perfect for Spokane properties and climates.",
    category: "Hardscaping",
    icon: "🧱",
  },
  {
    slug: "when-to-winterize-sprinklers-spokane",
    title: "When to Winterize Your Sprinklers in Spokane (Don't Wait Too Long)",
    date: "October 5, 2023",
    excerpt:
      "Spokane's first freeze can come fast. Learn exactly when to winterize your irrigation system to avoid costly burst pipes and repairs.",
    category: "Irrigation",
    icon: "💧",
  },
  {
    slug: "spokane-snow-removal-tips-homeowners",
    title: "Snow Removal Tips Every Spokane Homeowner Should Know",
    date: "November 20, 2023",
    excerpt:
      "From choosing the right ice melt to knowing when to call a pro, here are practical snow removal tips for surviving a Spokane winter.",
    category: "Snow Removal",
    icon: "❄️",
  },
  {
    slug: "how-much-does-landscaping-cost-spokane",
    title: "How Much Does Landscaping Cost in Spokane, WA? (2024 Guide)",
    date: "January 12, 2024",
    excerpt:
      "Wondering what landscaping costs in the Spokane area? We break down average prices for lawn care, design, hardscaping, and more so you can budget with confidence.",
    category: "General",
    icon: "💰",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-dark text-white py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Landscaping Tips & Insights
            </h1>
            <p className="text-lg text-gray-300">
              Expert advice for Spokane, WA homeowners — seasonal guides, design
              inspiration, and practical outdoor living tips.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((p) => (
                <article
                  key={p.slug}
                  className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition flex flex-col"
                >
                  {/* Image placeholder */}
                  <div className="bg-brand-light h-40 flex items-center justify-center text-5xl">
                    {p.icon}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full">
                        {p.category}
                      </span>
                      <span className="text-xs text-gray-500">{p.date}</span>
                    </div>

                    <h2 className="font-heading text-lg font-bold text-brand-dark mb-2">
                      {p.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {p.excerpt}
                    </p>

                    <span className="text-brand-green font-semibold text-sm hover:underline cursor-pointer">
                      Read More →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-brand-green text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Have a Question About Your Yard?
            </h2>
            <p className="text-lg mb-8 text-brand-light">
              We're happy to help. Reach out for free advice or schedule a
              consultation with our Spokane landscaping experts.
            </p>
            <Link
              href="/contact"
              className="bg-brand-gold text-white font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition text-lg"
            >
              Ask Us Anything
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
