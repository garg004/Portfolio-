import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  const education = [
    {
      institution: "Indian Institute of Information Technology, Kota",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      year: "2021 – 2025",
    },
    {
      institution: "Prince Uch Madhyamik Vidyalaya, Sikar",
      degree: "Grade 12",
      year: "2021",
    },
    {
      institution: "Jawahar Navodaya Vidyalaya Agra",
      degree: "Grade 10",
      year: "2019",
    },
  ]

  return (
    <section id="education" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Education</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {education.map((edu, index) => (
          <Card key={index} className="bg-gray-700 border-gray-600">
            <CardHeader>
              <CardTitle className="text-blue-400">{edu.institution}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{edu.degree}</p>
              <p className="text-gray-400 mt-2">{edu.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

