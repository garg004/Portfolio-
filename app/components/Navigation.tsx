"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "nav-blur shadow-lg" : ""}`}>
      <nav className="container mx-auto px-6 py-6">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item, index) => (
            <li key={item.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Link
                href={item.path}
                className={`text-lg font-medium hover:text-white transition-colors duration-300 ${
                  pathname === item.path ? "text-white" : "text-gray-400"
                } relative group`}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

