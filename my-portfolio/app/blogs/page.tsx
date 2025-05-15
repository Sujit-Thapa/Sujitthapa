"use client"

import { motion } from "framer-motion"
import GeometricPattern from "@/components/geometric-pattern"
import Link from "next/link"

const blogPosts = [
  {
    title: "Trekking to Mardi Himal: My Mountain Escape",
    description:
      "A personal story of challenge and awe, documenting my trek to Mardi Himal with stunning views and unexpected lessons.",
    slug: "/blog/mardi-himal-trek",
    tags: ["Trekking", "Nepal", "Adventure"],
  },
  {
    title: "How I Fell in Love with Animation",
    description:
      "From Blender to After Effects — my creative journey into the world of 3D and motion design.",
    slug: "/blog/animation-journey",
    tags: ["Animation", "Blender", "Story"],
  },
  {
    title: "Mastering Backend with Node.js",
    description: "An in-depth guide to building scalable backend APIs using Node, Express, and MongoDB.",
    slug: "/blog/mastering-backend",
    tags: ["Backend", "Node.js", "API"],
  },
  {
    title: "Getting Started with React Native",
    description: "Learn how to build beautiful mobile apps with React Native and Expo.",
    slug: "/blog/react-native-guide",
    tags: ["Mobile", "React Native", "Frontend"],
  },
  {
    title: "PostgreSQL vs MongoDB",
    description: "Which one is better for your next project? Here's a breakdown of the pros and cons.",
    slug: "/blog/postgres-vs-mongo",
    tags: ["Database", "PostgreSQL", "MongoDB"],
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
            From the Blog
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stories, insights, and tutorials — from trekking the Himalayas to building beautiful software and exploring 3D animation.
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

        {/* Visual side panel */}
        <div className="relative hidden lg:block">
          <GeometricPattern />
        </div>
      </div>
    </section>
  )
}
