import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "AI Image Captioning SaaS Tool",
      date: "Jan 2024-Present",
      tools: "dlib, Matplotlib, Transformer, MediaPipe, PyTorch, BLIP (BlipProcessor)",
      description: [
        "Built AI model using BLIP and MediaPipe on Flickr8k dataset to generate context-aware captions.",
        "Developed Transformer-based architecture, improving BLEU score by 15% through transfer learning.",
        "Used PyTorch for model training, reducing training time by 30% with GPU acceleration.",
        "Achieved 90% accuracy in generating grammatically and contextually relevant captions on test data.",
      ],
    },
    {
      title: "TechCorp",
      date: "Aug 2024-October 2024",
      tools: "Vite, Tailwind CSS, Framer Motion, OpenStreetMap, PostCSS",
      description: [
        "Engineered a responsive web application using React with Vite, implementing modular component architecture and modern React patterns.",
        "Developed an interactive mapping system with real-time search functionality and custom controls using react-leaflet.",
        "Implemented performant UI animations and transitions using Framer Motion with optimized asset loading.",
        "Achieved optimal performance metrics through Vite's build optimization and mobile-first responsive design using Tailwind CSS.",
      ],
    },
    {
      title: "Photo Portfolio",
      date: "Sep 2024-Nov 2024",
      tools: "CSS (Bootstrap), React, ScrollReveal, Swiper",
      description: [
        "Developed a responsive photo portfolio to showcase images with design and smooth user interactions.",
        "Implemented a dynamic navigation menu using React and JavaScript for toggling and real-time icon update.",
        "Integrated ScrollReveal.js and Swiper.js for scroll animations, responsive carousels to improve user experience.",
        "Achieved consistent performance and responsive UI across devices by leveraging CSS Grid, Flexbox, and Bootstrap.",
      ],
    },
  ]

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-700 border-gray-600">
            <CardHeader>
              <CardTitle className="text-blue-400">{project.title}</CardTitle>
              <p className="text-gray-400">{project.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-2">Tools: {project.tools}</p>
              <ul className="list-disc list-inside text-gray-300">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

