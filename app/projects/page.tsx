const projects = [
  {
    title: "Personal Portfolio Website",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
    description: "Modern portfolio website built with Next.js and TypeScript",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    codeLink: "#", // Will be updated once you deploy to GitHub
    liveLink: "#", // Will be updated once deployed
  },
  {
    title: "AI Image Captioning Tool",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    description: "AI-powered tool for generating image captions",
    tools: ["Python", "PyTorch", "BLIP", "MediaPipe"],
    codeLink: "#", // Add GitHub link when available
  },
  {
    title: "TechCorp Website",
    image:
      "https://sjc.microlink.io/1R9AgXBaMG2xpoJNX-9pWXUN0GaUFo-oXdLA5b5fKLEXH9oSHH1q0MxeTZT7tUAe43p2q6aqWnUvyWrN_oi5Wg.jpeg",
    description: "Corporate website with modern design and animations",
    tools: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    codeLink: "https://github.com/garg004/Tech-Webpage",
    liveLink: "https://tech-webpage.vercel.app/",
  },
  {
    title: "Photo Portfolio",
    image:
      "https://sjc.microlink.io/H1vOTq3wR_Curs-AuGL8IA6Z6e0Vml-OMv5WOP4klsN8rT-QAqW3dN0FEHdgMS5IKyoxRlRkrMmO0v5Y0jxI-w.jpeg",
    description: "Dynamic photo showcase platform with animations",
    tools: ["React", "Bootstrap", "ScrollReveal", "Swiper"],
    codeLink: "https://github.com/garg004/Photos-portfolio",
    liveLink: "https://photos-portfolio-tau.vercel.app/",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="section-title text-center mb-16 animate-fade-in">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-xl overflow-hidden hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-secondary rounded-full text-sm text-primary">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

