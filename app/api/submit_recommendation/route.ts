import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, rating, testimonial } = body

    // Validate required fields
    if (!name || !email || !rating || !testimonial) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Create recommendation object with timestamp
    const recommendation = {
      id: Date.now().toString(),
      name,
      email,
      rating: Number.parseInt(rating),
      testimonial,
      createdAt: new Date().toISOString(),
    }

    // Store in Vercel Blob
    const blob = await put(`recommendations/${recommendation.id}.json`, JSON.stringify(recommendation, null, 2), {
      access: "public",
      contentType: "application/json",
    })

    console.log("[v0] Recommendation saved to Blob:", blob.url)

    return NextResponse.json({
      success: true,
      message: "Recomendación guardada exitosamente",
      blobUrl: blob.url,
    })
  } catch (error) {
    console.error("[v0] Error saving recommendation:", error)
    return NextResponse.json({ error: "Error al guardar la recomendación" }, { status: 500 })
  }
}
