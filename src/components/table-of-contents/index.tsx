"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /<h([1-6])[^>]*id="([^"]*)"[^>]*>([^<]*)<\/h[1-6]>/g
    const headings: TocItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({
        id: match[2],
        text: match[3],
        level: Number.parseInt(match[1]),
      })
    }

    setToc(headings)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    toc.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [toc])

  if (toc.length === 0) return null

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm">Table of Contents</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block text-sm py-1 px-2 rounded transition-colors ${
              activeId === item.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
            style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
          >
            {item.text}
          </a>
        ))}
      </CardContent>
    </Card>
  )
}
