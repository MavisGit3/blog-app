import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, User } from "lucide-react"
import Link from "next/link"
import { getAllPosts } from "@/src/components/blog-data"
import SearchBar from "@/src/components/search-bar"
import { Skeleton } from "@/components/ui/skeleton"
// import NewsletterForm from "@/src/components/newsletter-form"

function PostCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-20 w-full" />
        <div className="flex items-center gap-4 mt-4">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-20" />
        </div>
      </CardContent>
    </Card>
  )
}

async function BlogPosts() {
  const posts = await getAllPosts()

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.slug} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              {post.categories.map((category) => (
                <Badge key={category} variant="secondary" asChild>
                  <Link href={`/blog?category=${encodeURIComponent(category)}`}>{category}</Link>
                </Badge>
              ))}
            </div>
            <CardTitle className="line-clamp-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </CardTitle>
            <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <User className="h-4 w-4" />
              <span className="text-sm">{post.author}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Modern Blog</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover insights, tutorials, and stories about web development, technology, and more.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/blog">Browse Posts</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">About Me</Link>
          </Button>
        </div>
      </section>

      {/* Search Bar */}
      <section className="mb-8">
        <SearchBar />
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
        <Suspense
          fallback={
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <PostCardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <BlogPosts />
        </Suspense>
      </section>

      {/* Newsletter Section */}
      {/* <section className="mt-16 py-12 bg-muted rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Subscribe to get notified about new posts and updates.
        </p>
        <NewsletterForm />
      </section> */}
    </div>
  )
}

