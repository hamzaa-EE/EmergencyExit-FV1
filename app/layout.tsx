import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://theemergencyexit.com"),
  title: "Coming Soon | The Emergency Exit Podcast",
  description: "The Emergency Exit Podcast is coming soon. A light-hearted but sharp-minded podcast that throws open the magic casement on imaginative thought.",
  keywords: ["podcast", "emergency exit", "literature", "books", "movies", "poetry", "storytelling"],
  authors: [{ name: "The Emergency Exit Podcast" }],
  creator: "The Emergency Exit Podcast",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theemergencyexit.com",
    siteName: "The Emergency Exit Podcast",
    title: "Coming Soon | The Emergency Exit Podcast",
    description: "A light-hearted but sharp-minded podcast that throws open the magic casement on imaginative thought. Coming soon!",
  },
  twitter: {
    card: "summary",
    title: "Coming Soon | The Emergency Exit Podcast",
    description: "A light-hearted but sharp-minded podcast that throws open the magic casement on imaginative thought.",
  },
  icons: {
    icon: "/logo-bit.svg",
    shortcut: "/logo-bit.svg",
    apple: "/logo-bit.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-bit.svg" type="image/svg+xml" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
