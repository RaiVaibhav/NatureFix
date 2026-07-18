import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nature Fix — Leave lighter than you arrived.",
    template: "%s · Nature Fix",
  },
  description:
    "Nature Fix hosts small-group mountain weekends starting in Bir, Himachal Pradesh — built around culture, community and stillness, not checklists. Leave lighter than you arrived.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
