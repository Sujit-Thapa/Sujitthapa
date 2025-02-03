import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Download, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 min-h-screen">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            I&apos;m Sujit Raj Thapa. I live in Kathmandu,
            <br />
            where I build the future.
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <p>
              I am a self-driven, career-oriented software engineer specializing in web development and 3D animation,
              currently pursuing a bachelor&apos;s degree in computer engineering. My expertise lies in building
              interactive web applications and creating immersive 3D animations.
            </p>

            <p>
              I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation
              possible, unfavorable or not.
            </p>

            <p>
              Beyond learning, I enjoy working on diverse projects that challenge me and allow me to grow as a
              developer. You can find my recent projects in the{" "}
              <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
                Projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>{" "}
              section.
            </p>

            <p className="flex items-center gap-2">
              If you ever spot me in the wild, don&apos;t hesitate to say hello! Let&apos;s grab a drink and geek-out
              over the latest advancements in web development or 3D animation techniques.
              <Zap className="h-4 w-4 text-primary" />
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/sujit.jpg" 
              alt="Sujit Raj Thapa"
              width={600}
              height={600}
              className="w-full object-cover"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/resume.pdf" className="inline-flex items-center gap-2">
                <span>View Résumé</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" className="w-full sm:w-auto">
              <Link href="/resume.pdf" download className="inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </Link>
            </Button>
          </div>

          <div className="flex justify-center">
            <Link
              href="mailto:sujitthapa.professional@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              sujitthapa.professional@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

