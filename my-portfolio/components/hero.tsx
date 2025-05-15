"use client"

import { motion } from "framer-motion"
import GeometricPattern from "./geometric-pattern"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiBlender,
  SiAdobeaftereffects,
  SiDavinciresolve,
  SiPostgresql,
  SiFirebase,
  SiAdobeillustrator,
  SiHtml5,
  SiCss3,
  SiExpress,
} from "react-icons/si"

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

          {/* Logos section */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4 text-3xl text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SiJavascript title="JavaScript" />
            <SiTypescript title="TypeScript" />
            <SiHtml5 title="HTML5" />
            <SiCss3 title="CSS3" />
            <SiReact title="React" />
            <SiNextdotjs title="Next.js" />
            <SiNodedotjs title="Node.js" />
            <SiExpress title="Express.js" />
            <SiMongodb title="MongoDB" />
            <SiPostgresql title="PostgreSQL" />
            <SiFirebase title="Firebase" />
            <SiBlender title="Blender" />
            <SiAdobeaftereffects title="After Effects" />
            <SiDavinciresolve title="DaVinci Resolve" />
            <SiAdobeillustrator title="Adobe Illustrator" />
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <GeometricPattern />
        </div>
      </div>
    </section>
  )
}
