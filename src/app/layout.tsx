import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://demo.chuckzonline.com"),
  title: "Top Landscaping Company in Spokane, WA | Spokane Landscaping",
  description:
    "Professional landscaping, lawn care, landscape design, hardscaping, and irrigation services in Spokane, WA. Licensed & insured. Free estimates — call (509) 555-0101.",
  keywords: [
    "landscaping Spokane WA",
    "landscaper Spokane",
    "lawn care Spokane",
    "landscape design Spokane",
    "hardscaping Spokane",
    "irrigation Spokane",
    "snow removal Spokane",
    "Spokane landscaping company",
  ],
  openGraph: {
    title: "Top Landscaping Company in Spokane, WA",
    description:
      "Professional landscaping, lawn care, and hardscaping in Spokane, WA. Free estimates.",
    url: "https://demo.chuckzonline.com",
    siteName: "Spokane Landscaping",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Spokane Landscaping",
              image: "https://demo.chuckzonline.com/hero.jpg",
              "@id": "https://demo.chuckzonline.com",
              url: "https://demo.chuckzonline.com",
              telephone: "(509) 555-0101",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Spokane, WA",
                addressLocality: "Spokane",
                addressRegion: "WA",
                postalCode: "99201",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.6588,
                longitude: -117.426,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
