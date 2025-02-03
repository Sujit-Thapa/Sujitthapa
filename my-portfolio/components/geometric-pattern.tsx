"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function GeometricPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Draw geometric pattern
    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = "rgba(0, 255, 148, 0.2)"
      ctx.lineWidth = 1

      // Draw isometric grid
      const size = 40
      const w = canvas.width / window.devicePixelRatio
      const h = canvas.height / window.devicePixelRatio

      for (let x = 0; x < w + size * 2; x += size) {
        for (let y = 0; y < h + size * 2; y += size) {
          // Draw cube
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x + size, y)
          ctx.lineTo(x + size * 1.5, y - size * 0.5)
          ctx.lineTo(x + size * 0.5, y - size * 0.5)
          ctx.closePath()
          ctx.stroke()
        }
      }
    }

    drawPattern()

    // Animate pattern
    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      ctx.setTransform(1, 0, 0, 1, Math.sin(Date.now() / 2000) * 10, Math.cos(Date.now() / 2000) * 10)
      drawPattern()
    }

    animate()

    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

