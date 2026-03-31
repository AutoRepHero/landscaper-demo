import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Spokane Landscaping",
  description: "Terms of service for Spokane Landscaping website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="font-heading text-4xl font-bold text-brand-dark mb-8">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2024</p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Agreement to Terms
          </h2>
          <p className="text-gray-600 mb-4">
            By accessing and using this website, you agree to be bound by these
            Terms of Service. If you do not agree with any part of these terms,
            please do not use our website.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Services
          </h2>
          <p className="text-gray-600 mb-4">
            This website provides information about our landscaping services in
            the Spokane, WA area. Submitting a contact form or estimate request
            does not constitute a binding agreement for services. All services
            are subject to a separate written agreement or proposal.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Estimates & Pricing
          </h2>
          <p className="text-gray-600 mb-4">
            All estimates provided through this website or in person are
            non-binding and subject to change based on actual site conditions,
            scope of work, and material costs. Final pricing will be confirmed
            in a written proposal before any work begins.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Intellectual Property
          </h2>
          <p className="text-gray-600 mb-4">
            All content on this website — including text, images, logos, and
            design — is the property of Spokane Landscaping and is protected by
            applicable copyright and trademark laws. You may not reproduce,
            distribute, or use any content without written permission.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Website Accuracy
          </h2>
          <p className="text-gray-600 mb-4">
            We strive to keep all information on this website accurate and
            up-to-date. However, we do not guarantee that all content is
            error-free. Service offerings, availability, and pricing may change
            without notice.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 mb-4">
            This website is provided "as is" without warranties of any kind. We
            are not liable for any damages arising from your use of this
            website, including but not limited to direct, indirect, incidental,
            or consequential damages.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Third-Party Links
          </h2>
          <p className="text-gray-600 mb-4">
            This website may contain links to third-party websites. We are not
            responsible for the content, privacy practices, or availability of
            those websites.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Governing Law
          </h2>
          <p className="text-gray-600 mb-4">
            These terms are governed by the laws of the State of Washington. Any
            disputes arising from these terms or your use of this website shall
            be resolved in the courts of Spokane County, Washington.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Changes to Terms
          </h2>
          <p className="text-gray-600 mb-4">
            We may update these Terms of Service at any time. Changes will be
            posted on this page with an updated revision date. Continued use of
            the website constitutes acceptance of the revised terms.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Contact
          </h2>
          <p className="text-gray-600">
            If you have questions about these Terms of Service, contact us at{" "}
            <a href="mailto:info@example.com" className="text-brand-green underline">
              info@example.com
            </a>{" "}
            or call{" "}
            <a href="tel:5095550101" className="text-brand-green underline">
              (509) 555-0101
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
