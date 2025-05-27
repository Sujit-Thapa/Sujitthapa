"use client"

import { motion } from "framer-motion"

const blogPosts = [
  {
    title: "Mardi Himal Expedition: A Lesson in Resilience and Solitude",
    description:
      "A reflective journey through Nepal’s highlands — where silent peaks inspired clarity and the path redefined perseverance.",
    tags: ["Trekking", "Nepal", "Adventure"],
  },
  {
    title: "The Art of Motion: How Animation Transformed My Storytelling",
    description:
      "From Blender to After Effects — uncover how I began crafting visual stories that blend emotion, timing, and design.",
    tags: ["Animation", "Blender", "Storytelling"],
  },
  {
    title: "Scalable Backend Architecture with Node.js & Express",
    description:
      "Explore the principles behind building reliable, modular APIs — and why Node.js is the heartbeat of modern web systems.",
    tags: ["Node.js", "Backend", "API Design"],
  },
  {
    title: "React Native in Practice: Crafting Cross-Platform Mobile Experiences",
    description:
      "An engineer’s guide to building fast, user-friendly mobile apps using React Native and component-first thinking.",
    tags: ["React Native", "Mobile", "Cross-Platform"],
  },
  {
    title: "Design Meets Code: Building Intuitive Frontend Interfaces",
    description:
      "Go beyond layout — learn how to design with empathy, code with intention, and deliver interfaces users love.",
    tags: ["Frontend", "UX", "Design"],
  },
  {
    title: "From Zero to Full Stack: Building with the MERN Ecosystem",
    description:
      "A practical overview of MongoDB, Express, React, and Node.js — and how these technologies shape today’s scalable web platforms.",
    tags: ["MERN", "Full Stack", "Web Development"],
  },
]

export default function BlogSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-10">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Echoes from the Blog
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stories that reflect a developer’s growth — from high-altitude lessons to deep dives into code, design, and the creative process.
          </motion.p>
        </div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="border border-border rounded-xl p-6 bg-background shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-primary/90">{post.title}</h2>
              <p className="text-muted-foreground mt-2">{post.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-muted text-foreground px-2 py-0.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
