import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const skills = {
    Languages: ["C/C++", "Python", "SQL", "JavaScript", "HTML/CSS"],
    "Developer Tools": ["Git", "Cloud Platform", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse"],
    Libraries: ["pandas", "NumPy", "ReactJs", "Pytorch", "Matplotlib", "MediaPipe"],
    "Relevant Courses": [
      "Data Structures and Algorithms",
      "Computer Networks",
      "Operating Systems",
      "Linear Algebra and Differential Equations",
      "Probability and Statistics",
      "Theory of Computation",
      "Machine Learning",
      "Internet of Things",
    ],
  }

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Technical Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category} className="bg-gray-700 border-gray-600">
            <CardHeader>
              <CardTitle className="text-blue-400">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

