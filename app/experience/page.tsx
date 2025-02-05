import Image from "next/image"

export default function Experience() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="section-title text-center mb-16 animate-fade-in">Experience</h1>
        <div className="glass-card p-8 rounded-xl hover-lift animate-slide-up">
          <div className="flex items-center mb-6">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/NIC_logo.svg/220px-NIC_logo.svg.png"
              alt="NIC Delhi Logo"
              width={80}
              height={80}
              className="mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold">ReactJs Developer</h2>
              <p className="text-xl text-muted-foreground">National Informatics Center, New Delhi</p>
              <p className="text-lg text-muted-foreground">July 2024</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
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
        </div>
      </div>
    </div>
  )
}

