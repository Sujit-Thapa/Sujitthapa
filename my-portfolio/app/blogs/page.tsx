"use client"

import { motion } from "framer-motion"
import GeometricPattern from "@/components/geometric-pattern"
import Link from "next/link"

const blogPosts = [
  {
    title: "Trekking to Mardi Himal: My Mountain Escape",
    description:
      "A personal tale of altitude and awe — where clouds whispered secrets and the trail taught resilience.",
    slug: "/blog/mardi-himal-trek",
    tags: ["Trekking", "Nepal", "Adventure"],
  },
  {
    title: "How I Fell in Love with Animation",
    description:
      "A journey through motion and imagination — from Blender’s 3D dreams to After Effects' magic.",
    slug: "/blog/animation-journey",
    tags: ["Animation", "Blender", "Story"],
  },
  {
    title: "Mastering Backend with Node.js",
    description:
      "Behind every beautiful frontend lies a heartbeat of code — discover how to sculpt APIs that scale and speak.",
    slug: "/blog/mastering-backend",
    tags: ["Backend", "Node.js", "API"],
  },
  {
    title: "Getting Started with React Native",
    description:
      "From idea to app — craft digital journeys with React Native and paint pixels with purpose.",
    slug: "/blog/react-native-guide",
    tags: ["Mobile", "React Native", "Frontend"],
  },
]

export default function BlogSection() {
  return (
    <section className="relative min-h-screen pt-32 px-6 lg:px-12 flex items-center">
      <div className="grid lg:grid-cols-2 gap-16">
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
            className="text-muted-foreground text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Walk through stories where mountains echo, pixels dance, and code breathes life. These are more than tutorials — they’re pieces of soul.
          </motion.p>

          {/* Blog Previews */}
          <motion.div
            className="space-y-6 pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {blogPosts.map((post, i) => (
              <Link key={i} href={post.slug}>
                <div className="border border-border rounded-xl p-5 hover:shadow-xl transition cursor-pointer bg-background group">
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-muted-foreground mt-1">{post.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-muted text-foreground px-2 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
