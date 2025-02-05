import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "./components/Navigation"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nishant Garg - Personal Portfolio",
  description: "Personal portfolio of Nishant Garg, a Computer Science and Engineering student",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

