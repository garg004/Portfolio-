import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">Nishant Garg</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#education" className="hover:text-blue-400 transition-colors">
              Education
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:text-blue-400 transition-colors">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

