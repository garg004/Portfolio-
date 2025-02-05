export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Nishant Garg. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}

