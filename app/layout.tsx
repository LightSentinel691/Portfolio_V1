import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const fontSerif = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const fontSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Timothy Kiige | Full-Stack Developer",
  description: "Portfolio of Timothy Kiige, a Full-Stack Developer and UI/UX Enthusiast building high-performance, scalable web apps.",
  keywords: ["Timothy Kiige", "Full-Stack Developer", "Software Engineer", "Nairobi", "React", "Next.js", "Portfolio"],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfbf7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Timothy Kiige",
      "url": "https://timothykiige.com", // Replace with actual URL
      "jobTitle": "Full-Stack Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "sameAs": [
        "https://linkedin.com/in/",
        "https://github.com/"
      ]
    },
    {
      "@type": "ProfessionalService",
      "name": "Timothy Kiige Web Development",
      "image": "https://timothykiige.com/og-image.jpg", // Replace with real image
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      },
      "priceRange": "$$$",
      "url": "https://timothykiige.com",
      "areaServed": {
        "@type": "Place",
        "name": "Nairobi"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontSans.variable} ${fontSerif.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-black transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
