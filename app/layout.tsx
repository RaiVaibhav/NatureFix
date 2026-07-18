import type { Metadata } from "next";
import { Rethink_Sans, Fraunces } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const description =
  "Nature Fix hosts small-group mountain weekends starting in Bir, Himachal Pradesh — built around culture, community and stillness, not checklists. Leave lighter than you arrived.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nature Fix — Leave lighter than you arrived.",
    template: "%s · Nature Fix",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Nature Fix",
    title: "Nature Fix — Leave lighter than you arrived.",
    description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature Fix — Leave lighter than you arrived.",
    description,
  },
};

// LocalBusiness, not TravelAgency — Nature Fix designs and directly hosts its own
// guided weekends from a base in Bir, rather than arranging travel (flights, visas,
// third-party bookings) for clients, which is what schema.org's TravelAgency type means.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nature Fix",
  url: SITE_URL,
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bir",
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Place",
    name: "Bir, Himachal Pradesh, India",
  },
  sameAs: ["https://www.instagram.com/adventureishani/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rethinkSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
