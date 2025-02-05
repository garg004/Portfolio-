import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="section-title text-center mb-16 animate-fade-in">About Me</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="relative h-[500px] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20241120_014334%20(1).jpg-cOmLttfk3RHEu5qWA1GxIgcGOkMlA0.jpeg"
                alt="Nishant Garg Formal"
                fill
                className="rounded-xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground">
              Hello! I'm Nishant Garg, a Computer Science and Engineering student at the Indian Institute of Information
              Technology, Kota. I'm passionate about software development and artificial intelligence, constantly
              exploring new technologies and pushing the boundaries of what's possible.
            </p>
            <p className="text-lg text-muted-foreground">
              With experience in React.js development and a strong foundation in computer science fundamentals, I've
              worked on various projects ranging from AI image captioning tools to responsive web applications. I'm
              particularly interested in creating efficient, user-friendly solutions that make a real impact.
            </p>
            <a
              href="https://drive.google.com/file/d/1rfI_dDyyvxtaBHxrLlPx4Vm1uWMWXx21/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors hover-lift"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

