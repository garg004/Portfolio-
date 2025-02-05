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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-400 mb-8">Education</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
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
      </div>
    </div>
  )
}

