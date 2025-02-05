import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="mb-16 py-20 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-4 text-blue-400">About Me</h2>
      <div className="max-w-2xl">
        <p className="mb-6 text-lg">
          Hello! I'm Nishant Garg, a passionate Computer Science and Engineering student at the Indian Institute of
          Information Technology, Kota. I'm dedicated to leveraging technology to solve real-world problems and
          constantly expanding my skills in software development and AI.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild variant="outline">
            <a
              href="/Nishant_Garg_Resume.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Download Resume
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

