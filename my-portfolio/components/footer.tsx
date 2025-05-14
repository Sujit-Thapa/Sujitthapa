"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/Sujit-Thapa", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/_thapa_sujit_/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sujit-thapa-12265125a/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/_thapa_sujit_", label: "Twitter" },
]

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const [showFloating, setShowFloating] = useState(true)

 useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setShowFloating(!entry.isIntersecting),
    { threshold: 0.1 }
  )

  if (footerRef.current) {
    observer.observe(footerRef.current)
  }

  return () => {
    if (footerRef.current) {
      observer.unobserve(footerRef.current)
    }
  }
}, [])

  const socials = (
    <div className="flex gap-6">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          aria-label={label}
          className="hover:text-primary transition"
        >
          <Icon className="h-5 w-5" />
        </Link>
      ))}
    </div>
  )

  return (
    <>
      {/* Floating Social Icons */}
      <AnimatePresence>
        {showFloating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 transform z-50 bg-background border border-border p-3 rounded-full shadow-lg flex gap-6"
          >
            {socials}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer ref={footerRef} className="py-8 border-t border-border mt-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {socials}
          </motion.div>
          <p className="text-sm text-muted-foreground text-center md:text-right w-full md:w-auto">
            © Sujit Raj Thapa {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </footer>
    </>
  )
}
