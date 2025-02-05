import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-8 h-8" />,
      link: "https://github.com/garg004",
      username: "garg004",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-8 h-8" />,
      link: "https://www.linkedin.com/in/nishant-garg-1b699b242/",
      username: "nishant-garg",
    },
    {
      name: "Email",
      icon: <Mail className="w-8 h-8" />,
      link: "mailto:gargnishantg2004@gmail.com",
      username: "gargnishantg2004@gmail.com",
    },
    {
      name: "Phone",
      icon: <Phone className="w-8 h-8" />,
      link: "tel:+916397616918",
      username: "+91 6397616918",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="section-title text-center mb-16 animate-fade-in">Get In Touch</h1>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-xl hover-lift flex items-center space-x-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-full bg-secondary">{social.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{social.name}</h3>
                  <p className="text-muted-foreground">{social.username}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="glass-card p-8 rounded-xl animate-scale-in">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors hover-lift"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

