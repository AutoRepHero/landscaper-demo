import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Spokane Landscaping",
  description: "Privacy policy for Spokane Landscaping. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="font-heading text-4xl font-bold text-brand-dark mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2024</p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            When you use our contact form, we collect the following information:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number (if provided)</li>
            <li>Property address (if provided)</li>
            <li>Service interest and message content</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We use the information you provide solely to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Respond to your inquiry or estimate request</li>
            <li>Provide the landscaping services you requested</li>
            <li>Follow up regarding your project</li>
          </ul>
          <p className="text-gray-600 mb-4">
            We do not sell, rent, or share your personal information with third
            parties for marketing purposes.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Form Submissions & Formspree
          </h2>
          <p className="text-gray-600 mb-4">
            Our contact form is processed by{" "}
            <a
              href="https://formspree.io"
              className="text-brand-green underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Formspree
            </a>
            , a third-party form processing service. When you submit our contact
            form, your data is transmitted to and stored by Formspree in
            accordance with their{" "}
            <a
              href="https://formspree.io/legal/privacy-policy"
              className="text-brand-green underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
            . We receive your submission via email and through the Formspree
            dashboard.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Cookies & Analytics
          </h2>
          <p className="text-gray-600 mb-4">
            This website may use cookies and analytics tools to understand how
            visitors use our site. This data is anonymized and used solely to
            improve our website experience. No personally identifiable
            information is collected through analytics.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Data Security
          </h2>
          <p className="text-gray-600 mb-4">
            We take reasonable measures to protect your personal information.
            Our website is served over HTTPS, and our form processor (Formspree)
            uses industry-standard encryption.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            You have the right to request access to, correction of, or deletion
            of your personal information. To make a request, contact us at{" "}
            <a href="mailto:info@example.com" className="text-brand-green underline">
              info@example.com
            </a>{" "}
            or call{" "}
            <a href="tel:5095550101" className="text-brand-green underline">
              (509) 555-0101
            </a>
            .
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-dark mt-8 mb-4">
            Contact
          </h2>
          <p className="text-gray-600">
            If you have questions about this Privacy Policy, please contact us
            at{" "}
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
