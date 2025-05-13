import Hero from "@/components/hero"
import WorkExperience from "@/components/work-experience"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero /> 
      <WorkExperience />
      <Footer />
    </div>
  )
}

