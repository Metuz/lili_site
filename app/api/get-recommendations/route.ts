import { list } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // List all files in the recommendations folder
    const { blobs } = await list({
      prefix: "recommendations/",
    })

    // Fetch and parse each JSON file
    const recommendations = await Promise.all(
      blobs.map(async (blob) => {
        const response = await fetch(blob.url)
        const data = await response.json()
        return data
      }),
    )

    // Sort by timestamp (newest first)
    recommendations.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    return NextResponse.json({
      success: true,
      recommendations,
      count: recommendations.length,
    })
  } catch (error) {
    console.error("Error fetching recommendations:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch recommendations" }, { status: 500 })
  }
}
