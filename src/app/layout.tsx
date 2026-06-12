import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Undangan Pernikahan | Rizky & Aisyah",
  description:
    "Pernikahan Rizky Akbar Pratama & Aisyah Putri Rabbani — 17 Agustus 2025",
  openGraph: {
    title: "Undangan Pernikahan | Rizky & Aisyah",
    description:
      "Pernikahan Rizky Akbar Pratama & Aisyah Putri Rabbani — 17 Agustus 2025",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600&family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Pernikahan Rizky & Aisyah",
              startDate: "2025-08-17T09:00:00+07:00",
              location: {
                "@type": "Place",
                name: "Masjid Agung Al-Hikmah",
                address: "Jl. Merdeka No. 123, Jakarta Pusat",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
