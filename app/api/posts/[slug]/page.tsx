import { type NextRequest, NextResponse } from "next/server"
import { getPostBySlug, updatePost, deletePost } from "@/src/components/blog-data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
     console.error("Failed to fetch post:", error);
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const { slug } = await params
    const postData = await request.json()
    const updatedPost = await updatePost(slug, postData)

    if (!updatedPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    return NextResponse.json(updatedPost)
  } catch (error) {
     console.error("Failed to fetch post:", error);
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const { slug } = await params
    const deleted = await deletePost(slug)

    if (!deleted) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Post deleted successfully" })
  } catch (error) {
     console.error("Failed to fetch post:", error);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 })
  }
}
