import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Contact Me</h2>
      <Card className="bg-gray-700 border-gray-600 max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-blue-400">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" required className="bg-gray-600 text-white border-gray-500" />
            <Input type="email" placeholder="Your Email" required className="bg-gray-600 text-white border-gray-500" />
            <Textarea placeholder="Your Message" rows={4} required className="bg-gray-600 text-white border-gray-500" />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="mt-8 text-center">
        <p className="text-gray-300">Email: gargnishantg2004@gmail.com</p>
        <p className="text-gray-300">Phone: +91 6397616918</p>
      </div>
    </section>
  )
}

