import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "./Components/Navbar"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NeoVerse - Future of Virtual Reality",
  description: "Experience the next generation of virtual reality with NeoVerse",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
        <Script id="handle-hash-change">
          {`
            function handleHashChange() {
              const hash = window.location.hash;
              if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }

            window.addEventListener('hashchange', handleHashChange);
            window.addEventListener('load', handleHashChange);
          `}
        </Script>
      </body>
    </html>
  )
}

