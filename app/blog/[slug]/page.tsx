import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/src/components/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import ShareButton from "@/src/components/share-button"
import TableOfContents from "@/src/components/table-of-contents"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back Button */}
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/blog">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </Button>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          {post.categories.map((category) => (
            <Badge key={category} variant="secondary" asChild>
              <Link href={`/blog?category=${encodeURIComponent(category)}`}>{category}</Link>
            </Badge>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>

        <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          <ShareButton title={post.title} />
        </div>
      </header>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Table of Contents */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8">
            <TableOfContents content={post.content} />
          </div>
        </aside>

        {/* Article Content */}
        <div className="lg:col-span-3">
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2 ">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" asChild>
                    <Link href={`/blog?search=${encodeURIComponent(tag)}`}>#{tag}</Link>
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
