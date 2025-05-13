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

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    setCanvasSize()

    const drawHexPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const w = canvas.width / window.devicePixelRatio
      const h = canvas.height / window.devicePixelRatio

      const size = 30
      const hexHeight = Math.sqrt(3) * size
      const offsetX = size * 1.5
      const offsetY = hexHeight

      ctx.strokeStyle = "rgba(0, 255, 148, 0.15)"
      ctx.lineWidth = 1

      for (let y = 0; y < h + hexHeight; y += offsetY) {
        for (let x = 0; x < w + size; x += offsetX) {
          const shiftX = (y / offsetY) % 2 === 0 ? 0 : size * 0.75
          drawHexagon(ctx, x + shiftX, y, size)
        }
      }
    }

    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
      ctx.beginPath()
      for (let i = 0; i <= 6; i++) {
        const angle = (Math.PI / 3) * i
        const px = x + radius * Math.cos(angle)
        const py = y + radius * Math.sin(angle)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()
    }

    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      ctx.setTransform(1, 0, 0, 1,
        Math.sin(Date.now() / 3000) * 15,
        Math.cos(Date.now() / 3000) * 15
      )
      drawHexPattern()
    }

    animate()

    window.addEventListener("resize", setCanvasSize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  )
}
