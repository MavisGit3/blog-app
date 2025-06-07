import { notFound } from "next/navigation"
import { getPostBySlug } from "@/src/components/blog-data"
import PostEditor from "@/src/components/post-editor"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: `Edit: ${post.title}`,
    description: `Edit the blog post: ${post.title}`,
  }
}

export default async function EditPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Edit Post</h1>
        <p className="text-muted-foreground">Make changes to {post.title}</p>
      </div>

      <PostEditor
        initialData={{
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          categories: post.categories,
          tags: post.tags,
          author: post.author,
        }}
        isEditing={true}
        slug={slug}
      />
    </div>
  )
}
