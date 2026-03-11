import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: {
    default: "Paul Esthappan | Full Stack Developer",
    template: "%s | Paul Esthappan",
  },
  description:
    "Full Stack Developer specializing in Next.js, TypeScript, React, Node.js and MongoDB. Building scalable web applications and modern digital products.",
  keywords: [
    "Paul Esthappan",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Paul Esthappan" }],
  creator: "Paul Esthappan",
  metadataBase: new URL("https://paulesthappan.netlify.app"),

  openGraph: {
    title: "Paul Esthappan | Full Stack Developer",
    description:
      "Portfolio of Paul Esthappan – Full Stack Developer specializing in Next.js, TypeScript, and MERN stack.",
    url: "https://paulesthappan.netlify.app",
    siteName: "Paul Esthappan Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Paul Esthappan | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, TypeScript, React, Node.js and MongoDB.",
  },
}

export const viewport = {
  themeColor: "#050505",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-neutral-950 text-neutral-100 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}