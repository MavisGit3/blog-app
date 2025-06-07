import { type NextRequest, NextResponse } from "next/server"
import { createPost, getAllPosts } from "@/src/components/blog-data"

export async function GET() {
  try {
    const posts = await getAllPosts()
    return NextResponse.json(posts)
  } catch (error) {
     console.error("Failed to fetch post:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const postData = await request.json()
    const newPost = await createPost(postData)
    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
     console.error("Failed to fetch post:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 })
  }
}
