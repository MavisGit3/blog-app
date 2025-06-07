
import PostEditor from "@/src/components/post-editor"

export const metadata = {
  title: "New Post",
  description: "Create a new blog post",
}

export default function NewPostPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Create New Post</h1>
        <p className="text-muted-foreground">Write and publish a new blog post.</p>
      </div>

      <PostEditor />
    </div>
  )
}
