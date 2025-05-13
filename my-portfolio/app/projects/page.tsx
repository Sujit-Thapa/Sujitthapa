import { Github, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Hey-Job",
    description: "A job search platform built with modern web technologies.",
    image: "/login-logo.png",
    tags: ["Next.js", "TypeScript", "Firebase", "MongoDB","NextAuth"],
    githubUrl: "https://github.com/shresthasusan/hey-job",
    period: "May 2024 - Present",
  },
  {
    title: "Chat-App",
    description: "A real-time chat application leveraging React and Firebase.",
    image: "/chat_app.svg",
    tags: ["React", "Firebase","Nextjs"],
    githubUrl: "#",
    period: "September 2024 - December 2024",
  },
  {
    title: "Image to Recipe",
    description: "An AI-powered application that generates recipes from food images.",
    image: "/favicon.ico",
    tags: ["Python", "AI", "Dango"],
    githubUrl: "https://github.com/shresthasusan/img2recipe",
    period: "May 2022 - January 2024",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
        <p className="text-muted-foreground">
          A showcase of my key projects, demonstrating my skills in web development, AI, and software engineering. Each
          project represents a unique challenge and learning experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative flex flex-col space-y-4 rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors"
          >
            <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            <div className="flex-1 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
              <p className="text-muted-foreground">{project.description}</p>
              <p className="text-sm text-primary">{project.period}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="w-full sm:w-auto">
              
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link href={project.githubUrl} className="inline-flex items-center justify-center gap-2">
                  <Github className="h-4 w-4" />
                  <span>Source</span>
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-muted-foreground mb-6">Want to see more? Check out my other projects on GitHub.</p>
        <Button asChild>
          <Link href="https://github.com/Sujit-Thapa" className="inline-flex items-center gap-2">
            <Github className="h-4 w-4" />
            <span>View GitHub Profile</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

