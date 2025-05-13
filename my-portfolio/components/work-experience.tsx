const experiences = [
  {
    company: "Griffity Studios",
    logo: "/griffity.jpg",
    role: "Web developer, 3D Animation artist",
    period: "June 2023 - Present",
    location: "Kathmandu, Nepal",
    description:
      "Developed immersive 3D animation sequences using Blender, while collaborating with design and technical teams to enhance visual storytelling and user engagement.",
  },
  {
    company: "Griffity Studios",
    logo: "/griffity.jpg",
    role: "Project Manager",
    period: "June 2022 - Present",
    location: "Kathmandu, Nepal",
    description:
      "Spearheaded a cross-functional team to deliver a high-stakes project within a 20% reduced timeframe, leveraging Agile methodologies to enhance collaboration and communication, ultimately exceeding client expectations at Griffity Studios.",
  },
  {
    company: "Freelancer",
    logo: "/placeholder.svg",
    role: "Video editor and Graphics Designer",
    period: "August 2018 - February 2020",
    location: "Kathmandu, Nepal",
    description:
      "Completed over 100 video edits and graphic designs using Adobe Creative Suite, enhancing client project quality and achieving a 95% client satisfaction rate.",
  },
]

export default function WorkExperience() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <img src={exp.logo || "/placeholder.svg"} alt={`${exp.company} logo`} className="w-8 h-8 rounded-sm" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{exp.role}</h3>
                <p className="text-primary">{exp.company}</p>
                <p className="text-sm text-muted-foreground">
                  {exp.period} | {exp.location}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

