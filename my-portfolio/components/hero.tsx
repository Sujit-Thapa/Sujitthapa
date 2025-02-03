"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Instagram, ComputerIcon as Steam, Youtube } from "lucide-react"
import Link from "next/link"
import GeometricPattern from "./geometric-pattern"

const socialLinks = [
  { icon: Github, href: "https://github.com/Sujit-Thapa", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/_thapa_sujit_", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sujit-thapa-12265125a/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/_thapa_sujit_/", label: "Instagram" },
  { icon: Steam, href: "https://steam.com", label: "Steam" },
  { icon: Youtube, href: "https://www.youtube.com/@sujitthapa9990", label: "YouTube" },
]

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

          <motion.div
            className="grid grid-cols-3 md:grid-cols-6 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="p-3 hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <GeometricPattern />
        </div>
      </div>
    </section>
  )
}

