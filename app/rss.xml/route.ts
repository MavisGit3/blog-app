import { NextResponse } from "next/server"
import { getAllPosts } from "@/src/components/blog-data"

export async function GET() {
  const posts = await getAllPosts()

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Modern Blog</title>
    <description>A modern blog built with Next.js 15 and shadcn/ui</description>
    <link>https://yourdomain.com</link>
    <atom:link href="https://yourdomain.com/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map(
        (post) => `
    <item>
      <title>${post.title}</title>
      <description>${post.excerpt}</description>
      <link>https://yourdomain.com/blog/${post.slug}</link>
      <guid>https://yourdomain.com/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${post.author}</author>
    </item>
    `,
      )
      .join("")}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
