import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Eye } from "lucide-react"
import Link from "next/link"
import { getAllPosts } from "@/src/components/blog-data"
import DeletePostButton from "@/src/components/delete-post-button"

export const metadata = {
  title: "Admin Dashboard",
  description: "Manage your blog posts",
}

async function PostsList() {
  const posts = await getAllPosts()

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.slug}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="line-clamp-1">{post.title}</CardTitle>
                <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                <div className="flex items-center gap-2">
                  {post.categories.map((category) => (
                    <Badge key={category} variant="secondary" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    <Eye className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/admin/edit/${post.slug}`}>
                    <Edit className="h-4 w-4" />
                  </Link>
                </Button>
                <DeletePostButton slug={post.slug} title={post.title} />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your blog posts and content.</p>
        </div>
        <Button asChild>
          <Link href="/admin/new">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Link>
        </Button>
      </div>

      <Suspense fallback={<div>Loading posts...</div>}>
        <PostsList />
      </Suspense>
    </div>
  )
}
