import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 min-h-screen">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            I'm Sujit Raj Thapa. I live in Kathmandu,
            <br />
            where I help build the future.
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <p>
              I’m a passionate and self-driven software engineer with a strong focus on web development and 3D animation. Currently, I’m pursuing a bachelor's degree in Computer Engineering and actively working on building intuitive, interactive web applications alongside visually compelling 3D experiences.
            </p>

            <p>
              I firmly believe in lifelong learning and consistently seek opportunities for growth—regardless of the environment or challenges. My commitment to personal and professional development fuels my ability to adapt, innovate, and deliver impactful solutions.
            </p>

            <p>
              Outside of formal learning, I thrive on collaborating on diverse and challenging projects that expand my skillset and perspective as a developer. Feel free to explore some of my latest work in the{" "}
              <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
                Projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>{" "}
              section.
            </p>

            <p className="flex items-center gap-2">
              If you ever run into me in the wild, don’t hesitate to say hi! I'm always up for great conversations about the latest in web technologies or 3D animation techniques.
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
              className="w-50 h-50 rounded-full object-cover"
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
  );
}
