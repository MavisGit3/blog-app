"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface CategoryFilterProps {
  categories: string[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get("category")

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams)
    if (selectedCategory === category) {
      params.delete("category")
    } else {
      params.set("category", category)
    }
    router.push(`/blog?${params.toString()}`)
  }

  const clearCategory = () => {
    const params = new URLSearchParams(searchParams)
    params.delete("category")
    router.push(`/blog?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm font-medium">Categories:</span>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </Button>
      ))}
      {selectedCategory && (
        <Button variant="ghost" size="sm" onClick={clearCategory}>
          <X className="h-3 w-3 mr-1" />
          Clear
        </Button>
      )}
    </div>
  )
}
