import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata = {
  title: "Mitesh Vasoya - Senior Backend Engineer",
  description:
    "Senior Backend Engineer specializing in Node.js, PostgreSQL, and scalable fintech systems from Ahmedabad, India.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon-dark-32x32",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === "string" &&
        (args[0].includes("A tree hydrated but some attributes") ||
          args[0].includes("Expected server HTML to contain a matching") ||
          args[0].includes("Text content did not match"))
      ) {
        return; // ignore hydration mismatch warnings
      }
      originalError(...args);
    };
  }
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
