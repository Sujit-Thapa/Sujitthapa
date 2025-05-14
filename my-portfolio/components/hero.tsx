"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Instagram, ComputerIcon as Steam, Youtube } from "lucide-react"
import Link from "next/link"
import GeometricPattern from "./geometric-pattern"


export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Software engineer, Backend developer and 3d animator.
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I&apos;m Sujit Raj Thapa, an experienced Backend developer passionate about learning and building open-source
            software that is beneficial to developers and the world at large.
          </motion.p>

         
        </div>

        <div className="relative hidden lg:block">
          <GeometricPattern />
        </div>
      </div>
    </section>
  )
}

