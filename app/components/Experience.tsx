import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Internship Experience</h2>
      <Card className="bg-gray-700 border-gray-600">
        <CardHeader>
          <CardTitle className="text-blue-400">ReactJs Developer</CardTitle>
          <p className="text-gray-300">National Informatics Center, New Delhi</p>
          <p className="text-gray-400">July 2024</p>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-gray-300">
            <li>
              Developed IMPDS homepage with React.js, using component-based architecture and modules for scalability.
            </li>
            <li>
              Integrated REST APIs with Async/Await for efficient data handling and React Router to enable navigation.
            </li>
            <li>
              Ensured responsive design and cross-browser compatibility with CSS Flexbox; used Git for version control.
            </li>
            <li>
              Applied React hooks for state management, improving data flow across components and improving performance.
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

