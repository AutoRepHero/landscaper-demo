import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-36">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero-lawn.jpg')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark/80" />

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Beautiful Landscapes for
              <span className="block text-brand-light">Spokane, WA</span>
              Homes & Businesses
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your outdoor space with expert design, professional installation, 
              and year-round maintenance from Spokane&apos;s trusted landscaping team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brand-gold hover:bg-brand-gold/90 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Request a Free Estimate
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-brand-dark rounded-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                <span className="text-2xl">🛡️</span>
                <span className="text-white text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                <span className="text-2xl">⭐</span>
                <span className="text-white text-sm font-medium">15+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                <span className="text-2xl">🏆</span>
                <span className="text-white text-sm font-medium">5-Star Rated</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                <span className="text-2xl">📍</span>
                <span className="text-white text-sm font-medium">Locally Owned</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark text-center mb-4">
              Our Landscaping Services in Spokane, WA
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              From routine lawn care to complete landscape transformations, we offer 
              comprehensive services to keep your property looking its best year-round.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/service-lawn.jpg"
                    alt="Lawn Care"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-2">
                    Lawn Care
                  </h3>
                  <p className="text-gray-600 mb-4">Weekly mowing, fertilization, weed control, and seasonal cleanups to keep your lawn lush and healthy.</p>
                  <Link
                    href="/services"
                    className="text-brand-green font-semibold hover:text-brand-dark transition-colors inline-flex items-center"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/service-design.jpg"
                    alt="Landscape Design"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-2">
                    Landscape Design
                  </h3>
                  <p className="text-gray-600 mb-4">Custom designs that blend beauty with functionality, tailored to Spokane&apos;s unique climate.</p>
                  <Link
                    href="/services"
                    className="text-brand-green font-semibold hover:text-brand-dark transition-colors inline-flex items-center"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/service-hardscape.jpg"
                    alt="Hardscaping"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-2">
                    Hardscaping
                  </h3>
                  <p className="text-gray-600 mb-4">Patios, walkways, retaining walls, and outdoor living spaces built to last.</p>
                  <Link
                    href="/services"
                    className="text-brand-green font-semibold hover:text-brand-dark transition-colors inline-flex items-center"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/service-irrigation.jpg"
                    alt="Irrigation Systems"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-2">
                    Irrigation Systems
                  </h3>
                  <p className="text-gray-600 mb-4">Efficient sprinkler installation and repair to keep your landscape thriving.</p>
                  <Link
                    href="/services"
                    className="text-brand-green font-semibold hover:text-brand-dark transition-colors inline-flex items-center"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/service-snow.jpg"
                    alt="Snow Removal"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-2">
                    Snow Removal
                  </h3>
                  <p className="text-gray-600 mb-4">Reliable residential and commercial snow clearing throughout Spokane winters.</p>
                  <Link
                    href="/services"
                    className="text-brand-green font-semibold hover:text-brand-dark transition-colors inline-flex items-center"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/service-trees.jpg"
                    alt="Tree and Shrub Care"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-2">
                    Tree & Shrub Care
                  </h3>
                  <p className="text-gray-600 mb-4">Pruning, shaping, and health treatments for trees and ornamental shrubs.</p>
                  <Link
                    href="/services"
                    className="text-brand-green font-semibold hover:text-brand-dark transition-colors inline-flex items-center"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-block bg-brand-green text-white font-semibold px-8 py-3 rounded-xl hover:bg-brand-dark transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-brand-dark py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-brand-light text-sm uppercase tracking-wide">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-brand-light text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-brand-light text-sm uppercase tracking-wide">Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5-Star</div>
              <div className="text-brand-light text-sm uppercase tracking-wide">Google Rating</div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-brand-light/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark text-center mb-4">
              What Spokane Homeowners Say
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from our satisfied customers 
              throughout the Spokane area.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  <span className="text-brand-gold text-xl">⭐</span>
                  <span className="text-brand-gold text-xl">⭐</span>
                  <span className="text-brand-gold text-xl">⭐</span>
                  <span className="text-brand-gold text-xl">⭐</span>
                  <span className="text-brand-gold text-xl">⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;They transformed our backyard into an oasis. The patio and fire pit area is now our favorite spot!&rdquo;</p>
                <div className="font-semibold text-brand-dark">Sarah M.</div>
                <div className="text-sm text-gray-500">South Hill</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  <span className="text-brand-gold text-xl">⭐</span>
                  <span className="text-brand-gold text-xl">⭐</span>
                  <span className="text-brand-gold text-xl">⭐</span>
                  <span className="text-brand-gold text-xl">⭐</span>
                  <span className="text-brand-gold text-xl">⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;Reliable, professional, and always on time. Our lawn has never looked better. Highly recommend!&rdquo;</p>
                <div className="font-semibold text-brand-dark">Mike & Jennifer T.</div>
                <div className="text-sm text-gray-500">Spokane Valley</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  <span className="text-brand-gold text-xl">⭐</span>
                  <span className="text-brand-gold text-xl">⭐</span>
                  <span className="text-brand-gold text-xl">⭐</span>
                  <span className="text-brand-gold text-xl">⭐</span>
                  <span className="text-brand-gold text-xl">⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;The irrigation system they installed cut our water bill in half. Great work and great people!&rdquo;</p>
                <div className="font-semibold text-brand-dark">David R.</div>
                <div className="text-sm text-gray-500">Liberty Lake</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-brand-green py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-brand-light text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation estimate for your landscaping project. 
              We serve Spokane and surrounding areas.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand-gold text-white font-semibold px-8 py-4 rounded-xl hover:bg-brand-gold/90 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Request Your Free Estimate
            </Link>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Proudly Serving th
