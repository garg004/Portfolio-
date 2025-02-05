const skills = [
  {
    category: "Frontend Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    items: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs", "GraphQL"],
  },
  {
    category: "Programming Languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Tools & Technologies",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    items: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Firebase"],
  },
]

export default function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="section-title text-center mb-16 animate-fade-in">Skills & Technologies</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="glass-card p-8 rounded-xl hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <img src={skill.icon || "/placeholder.svg"} alt={skill.category} className="w-12 h-12 mr-4" />
                <h2 className="text-2xl font-bold">{skill.category}</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skill.items.map((item) => (
                  <div key={item} className="flex items-center space-x-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

