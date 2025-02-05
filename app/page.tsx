import Image from "next/image"
import { Twitter, Instagram, Phone, Github, Linkedin } from "lucide-react"

export default function Home() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/garg004",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      link: "https://www.linkedin.com/in/nishant-garg-1b699b242/",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      link: "https://x.com/gargnishant4444",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      link: "https://www.instagram.com/nishant._04/",
    },
    {
      name: "WhatsApp",
      icon: <Phone className="w-6 h-6" />,
      link: "https://wa.me/916397616918",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <main className="container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240916_233312%20(2).jpg-Art56STZ21zHV1j6ySTKtmixyKWeAn.jpeg"
              alt="Nishant Garg"
              fill
              className="rounded-full object-cover shadow-xl animate-float"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 gradient-text animate-slide-in">Nishant Garg</h1>
          <p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in"
            style={{ animationDelay: "0.2s" }}
          >
            Computer Science and Engineering student at IIIT Kota, passionate about software development and AI.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-slide-in" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://drive.google.com/file/d/1rfI_dDyyvxtaBHxrLlPx4Vm1uWMWXx21/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-bold py-2 px-6 rounded-full transition-all duration-300 hover-lift"
            >
              View Resume
            </a>
          </div>
          <div className="flex gap-6 mt-8 justify-center animate-slide-in" style={{ animationDelay: "0.6s" }}>
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-lift p-2 rounded-full bg-secondary/50"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

