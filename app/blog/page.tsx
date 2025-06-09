// import { Suspense } from "react"
// import { getAllPosts, getCategories } from "@/src/components/blog-data"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { CalendarDays, Clock, User } from "lucide-react"
// import Link from "next/link"
// import SearchBar from "@/src/components/search-bar"
// import CategoryFilter from "@/src/components/category-filter"

// export const metadata = {
//   title: "All Posts",
//   description: "Browse all blog posts",
// }

// async function BlogPostsList({ searchParams }: { searchParams: { category?: string; search?: string } }) {
//   const posts = await getAllPosts()
//   const categories = await getCategories()

//   let filteredPosts = posts

//   if (searchParams.category) {
//     filteredPosts = posts.filter((post) => post.categories.includes(searchParams.category!))
//   }

//   if (searchParams.search) {
//     const searchTerm = searchParams.search.toLowerCase()
//     filteredPosts = filteredPosts.filter(
//       (post) =>
//         post.title.toLowerCase().includes(searchTerm) ||
//         post.excerpt.toLowerCase().includes(searchTerm) ||
//         post.content.toLowerCase().includes(searchTerm),
//     )
//   }

//   return (
//     <div className="space-y-8">
//       <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//         <CategoryFilter categories={categories} />
//         <SearchBar />
//       </div>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {filteredPosts.map((post) => (
//           <Card key={post.slug} className="hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <div className="flex items-center gap-2 mb-2">
//                 {post.categories.map((category) => (
//                   <Badge key={category} variant="secondary" asChild>
//                     <Link href={`/blog?category=${encodeURIComponent(category)}`}>{category}</Link>
//                   </Badge>
//                 ))}
//               </div>
//               <CardTitle className="line-clamp-2">
//                 <Link href={`/blog/${post.slug}`} className="hover:underline">
//                   {post.title}
//                 </Link>
//               </CardTitle>
//               <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                 <div className="flex items-center gap-1">
//                   <CalendarDays className="h-4 w-4" />
//                   {new Date(post.date).toLocaleDateString()}
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Clock className="h-4 w-4" />
//                   {post.readTime} min read
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 mt-2">
//                 <User className="h-4 w-4" />
//                 <span className="text-sm">{post.author}</span>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {filteredPosts.length === 0 && (
//         <div className="text-center py-12">
//           <p className="text-muted-foreground">No posts found matching your criteria.</p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default function BlogPage({ searchParams }: { searchParams: { category?: string; search?: string } }) {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold mb-4">All Posts</h1>
//         <p className="text-muted-foreground">Explore all our blog posts and find what interests you.</p>
//       </div>

//       <Suspense fallback={<div>Loading posts...</div>}>
//         <BlogPostsList searchParams={searchParams} />
//       </Suspense>
//     </div>
//   )
// }


import { Suspense } from "react"
import { getAllPosts, getCategories } from "@/src/components/blog-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, User } from 'lucide-react'
import Link from "next/link"
import SearchBar from "@/src/components/search-bar"
import CategoryFilter from "@/src/components/category-filter"

export const metadata = {
  title: "All Posts",
  description: "Browse all blog posts",
}

async function BlogPostsList({ 
  searchParams 
}: { 
  searchParams: Promise<{ category?: string; search?: string }> 
}) {
  const params = await searchParams
  const posts = await getAllPosts()
  const categories = await getCategories()

  let filteredPosts = posts

  if (params.category) {
    filteredPosts = posts.filter((post) => post.categories.includes(params.category!))
  }

  if (params.search) {
    const searchTerm = params.search.toLowerCase()
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm),
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <CategoryFilter categories={categories} />
        <SearchBar />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
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

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No posts found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}

export default function BlogPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ category?: string; search?: string }> 
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">All Posts</h1>
        <p className="text-muted-foreground">Explore all our blog posts and find what interests you.</p>
      </div>

      <Suspense fallback={<div>Loading posts...</div>}>
        <BlogPostsList searchParams={searchParams} />
      </Suspense>
    </div>
  )
}