import ContactForm from "@/components/contact-form"
import { Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-muted-foreground mb-6">
            I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Phone className="h-5 w-5" />
            <span>+977-9803429572</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

