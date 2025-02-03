"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface CalendarProps {
  contributions: Array<{
    date: string
    count: number
  }>
  className?: string
}

export function Calendar({ contributions, className }: CalendarProps) {
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

    // Calendar dimensions
    const cellSize = 10
    const cellGap = 2
    const rows = 7
    const cols = 51 // Approximately one year of weeks

    // Create contribution map for easy lookup
    const contributionMap = new Map(contributions.map((c) => [c.date, c.count]))

    // Get max contribution for color scaling
    const maxContribution = Math.max(...contributions.map((c) => c.count))

    // Draw calendar
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        const date = new Date()
        date.setDate(date.getDate() - ((cols - col - 1) * 7 + (6 - row)))
        const dateString = date.toISOString().split("T")[0]
        const count = contributionMap.get(dateString) || 0

        const x = col * (cellSize + cellGap)
        const y = row * (cellSize + cellGap)

        // Calculate color intensity based on contribution count
        const intensity = count === 0 ? 0.1 : (count / maxContribution) * 0.8 + 0.2

        ctx.fillStyle = `rgba(0, 255, 148, ${intensity})`
        ctx.fillRect(x, y, cellSize, cellSize)
      }
    }
  }, [contributions])

  return (
    <div className={cn("relative", className)}>
      <canvas ref={canvasRef} className="w-full h-[120px]" style={{ imageRendering: "pixelated" }} />
    </div>
  )
}

