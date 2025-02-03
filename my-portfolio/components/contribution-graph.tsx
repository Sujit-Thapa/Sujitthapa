"use client"

import { useEffect, useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { octokit } from "@/lib/octokit"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

type Contribution = {
  date: string
  count: number
}

export default function ContributionGraph() {
  const [contributions, setContributions] = useState<Contribution[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalContributions: 0,
    currentStreak: 0,
    longestStreak: 0,
  })

  useEffect(() => {
    async function fetchGitHubContributions() {
      try {
        const response = await octokit.request("GET /users/{username}/events", {
          username: "Sujit-Thapa",
          per_page: 100,
        })

        // Process the events into contributions
        const contributionMap = new Map<string, number>()

        response.data.forEach((event: { created_at: string | null }) => {
          if (event.created_at) {
            const date = event.created_at.split("T")[0]
            contributionMap.set(date, (contributionMap.get(date) || 0) + 1)
          }
        })

        const contributionArray = Array.from(contributionMap.entries()).map(([date, count]) => ({
          date,
          count,
        }))

        // Calculate stats
        const totalContributions = contributionArray.reduce((sum, item) => sum + item.count, 0)

        // Sort contributions by date
        contributionArray.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

        setContributions(contributionArray)
        setStats({
          totalContributions,
          currentStreak: calculateCurrentStreak(contributionArray),
          longestStreak: calculateLongestStreak(contributionArray),
        })
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubContributions()
  }, [])

  function calculateCurrentStreak(contributions: Contribution[]): number {
    let streak = 0
    const today = new Date().toISOString().split("T")[0]

    for (let i = contributions.length - 1; i >= 0; i--) {
      if (contributions[i].count > 0) {
        streak++
      } else {
        break
      }
    }
    return streak
  }

  function calculateLongestStreak(contributions: Contribution[]): number {
    let currentStreak = 0
    let longestStreak = 0

    contributions.forEach((contribution) => {
      if (contribution.count > 0) {
        currentStreak++
        longestStreak = Math.max(longestStreak, currentStreak)
      } else {
        currentStreak = 0
      }
    })

    return longestStreak
  }

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8">GitHub Contributions</h2>

      {loading ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Skeleton className="h-[120px] rounded-lg" />
            <Skeleton className="h-[120px] rounded-lg" />
            <Skeleton className="h-[120px] rounded-lg" />
          </div>
          <Skeleton className="h-[200px] rounded-lg" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">{stats.totalContributions}</CardTitle>
                <CardDescription>Total Contributions</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">{stats.currentStreak}</CardTitle>
                <CardDescription>Current Streak</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">{stats.longestStreak}</CardTitle>
                <CardDescription>Longest Streak</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <Calendar contributions={contributions} className="w-full" />
            </CardContent>
          </Card>
        </>
      )}
    </section>
  )
}

