import Hero from "@/components/hero"
import ContributionGraph from "@/components/contribution-graph"
import WorkExperience from "@/components/work-experience"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <ContributionGraph />
      <WorkExperience />
      <Footer />
    </div>
  )
}

