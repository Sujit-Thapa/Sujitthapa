"use client"

import { motion } from "framer-motion"

const blogPosts = [
  {
    title: "Trekking to Mardi Himal: My Mountain Escape",
    description:
      "An awe-inspiring trek across the Himalayas where every step taught resilience and nature whispered serenity. Join me on a personal adventure through Nepal's hidden trail.",
    tags: ["Trekking", "Nepal", "Adventure"],
  },
  {
    title: "How I Discovered a Passion for Animation",
    description:
      "From Blender's 3D experimentation to After Effects' storytelling — a creative journey into the world of animation and motion design.",
    tags: ["Animation", "Blender", "Storytelling"],
  },
  {
    title: "Building Scalable APIs with Node.js",
    description:
      "Explore how to design scalable, maintainable backend systems with Node.js — the backbone of modern web apps.",
    tags: ["Node.js", "Backend", "API"],
  },
  {
    title: "React Native: From Concept to App Store",
    description:
      "Learn how I transformed ideas into functional mobile apps using React Native. One codebase, multiple platforms, endless creativity.",
    tags: ["React Native", "Mobile", "Frontend"],
  },
]

export default function BlogSection() {
  return (
    <section className="w-full px-6 py-16 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Echoes from the Blog
        </motion.h1>
        <motion.p
          className="text-muted-foreground text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Walk through stories where mountains echo, pixels dance, and code breathes life. These aren't just articles —
          they're experiences woven into words.
        </motion.p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {blogPosts.map((post, i) => (
          <div
            key={i}
            className="group border border-border rounded-xl bg-card p-6 hover:border-primary/50 transition-colors flex flex-col"
          >
            <h2 className="text-xl font-semibold text-primary/90 mb-2">{post.title}</h2>
            <p className="text-muted-foreground mb-4">{post.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
