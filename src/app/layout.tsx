import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { QueryProvider } from "@/components/query-provider";

import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

/**
 * Defines the static metadata for the application, essential for SEO and browser tab display.
 */
export const metadata: Metadata = {
  title: "Enclosures",
  description: "Mock keeper dashboard for animal needs",
};

/**
 * Establishes the foundational HTML structure, applies global styles and fonts, and wraps the application with required global context providers.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen font-sans antialiased">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
