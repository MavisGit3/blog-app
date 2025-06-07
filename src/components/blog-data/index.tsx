// This is a simple in-memory blog system for demonstration
// In a real application, you would use a database

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  categories: string[]
  tags: string[]
  readTime: number
}

// Sample blog posts data
const samplePosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15: A Complete Guide",
    excerpt:
      "Learn how to build modern web applications with the latest features in Next.js 15, including the App Router, Server Components, and more.",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Next.js 15 brings exciting new features and improvements that make building React applications even better. In this comprehensive guide, we'll explore the key features and how to get started.</p>
      
      <h2 id="new-features">New Features in Next.js 15</h2>
      <p>Next.js 15 introduces several groundbreaking features:</p>
      <ul>
        <li><strong>Async Request APIs:</strong> Incremental step towards a simplified rendering and caching model</li>
        <li><strong>Caching Semantics:</strong> fetch requests, GET Route Handlers, and client navigations are no longer cached by default</li>
        <li><strong>React 19 Support:</strong> Full support for React 19 with improved hydration and error handling</li>
        <li><strong>Turbopack Dev (Stable):</strong> Significant performance improvements in development</li>
      </ul>
      
      <h2 id="getting-started">Getting Started</h2>
      <p>To create a new Next.js 15 project, run:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <h2 id="app-router">App Router</h2>
      <p>The App Router is now the recommended way to build Next.js applications. It provides:</p>
      <ul>
        <li>File-based routing with folders</li>
        <li>Layout support</li>
        <li>Server Components by default</li>
        <li>Improved data fetching</li>
      </ul>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Next.js 15 represents a significant step forward in React development. With its improved performance, better developer experience, and powerful new features, it's the perfect time to start your next project with Next.js 15.</p>
    `,
    date: "2024-01-15",
    author: "Mavis Ogodu Ayikpo",
    categories: ["Next.js", "React", "Web Development"],
    tags: ["nextjs", "react", "javascript", "tutorial"],
    readTime: 8,
  },
  {
    slug: "mastering-typescript-in-2024",
    title: "Mastering TypeScript in 2024: Advanced Patterns and Best Practices",
    excerpt:
      "Dive deep into advanced TypeScript patterns, utility types, and best practices that will make you a more effective developer.",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>TypeScript has become an essential tool for modern web development. In this article, we'll explore advanced patterns and best practices that will elevate your TypeScript skills.</p>
      
      <h2 id="utility-types">Utility Types</h2>
      <p>TypeScript provides several built-in utility types that can help you write more robust code:</p>
      <ul>
        <li><code>Partial&lt;T&gt;</code> - Makes all properties optional</li>
        <li><code>Required&lt;T&gt;</code> - Makes all properties required</li>
        <li><code>Pick&lt;T, K&gt;</code> - Creates a type with selected properties</li>
        <li><code>Omit&lt;T, K&gt;</code> - Creates a type without specified properties</li>
      </ul>
      
      <h2 id="conditional-types">Conditional Types</h2>
      <p>Conditional types allow you to create types that depend on conditions:</p>
      <pre><code>type ApiResponse&lt;T&gt; = T extends string ? string : T extends number ? number : never;</code></pre>
      
      <h2 id="mapped-types">Mapped Types</h2>
      <p>Mapped types let you create new types by transforming existing ones:</p>
      <pre><code>type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};</code></pre>
      
      <h2 id="best-practices">Best Practices</h2>
      <ul>
        <li>Use strict mode for better type safety</li>
        <li>Prefer interfaces over type aliases for object shapes</li>
        <li>Use const assertions for immutable data</li>
        <li>Leverage discriminated unions for better type narrowing</li>
      </ul>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Mastering these advanced TypeScript patterns will help you write more maintainable and type-safe code. Keep practicing and exploring the rich type system that TypeScript provides.</p>
    `,
    date: "2024-01-10",
    author: "Mavis Ogodu Ayikpo",
    categories: ["TypeScript", "JavaScript", "Programming"],
    tags: ["typescript", "javascript", "types", "advanced"],
    readTime: 12,
  },
  {
    slug: "building-responsive-layouts-with-css-grid",
    title: "Building Responsive Layouts with CSS Grid and Flexbox",
    excerpt:
      "Learn how to create modern, responsive layouts using CSS Grid and Flexbox. Includes practical examples and best practices.",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>CSS Grid and Flexbox are powerful layout systems that have revolutionized how we build responsive web layouts. In this guide, we'll explore how to use them effectively together.</p>
      
      <h2 id="css-grid-basics">CSS Grid Basics</h2>
      <p>CSS Grid is a two-dimensional layout system that allows you to create complex layouts with ease:</p>
      <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}</code></pre>
      
      <h2 id="flexbox-fundamentals">Flexbox Fundamentals</h2>
      <p>Flexbox is perfect for one-dimensional layouts and component-level design:</p>
      <pre><code>.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}</code></pre>
      
      <h2 id="combining-grid-and-flexbox">Combining Grid and Flexbox</h2>
      <p>The real power comes from using Grid and Flexbox together:</p>
      <ul>
        <li>Use Grid for page-level layouts</li>
        <li>Use Flexbox for component-level layouts</li>
        <li>Grid for two-dimensional control</li>
        <li>Flexbox for one-dimensional alignment</li>
      </ul>
      
      <h2 id="responsive-design">Responsive Design Patterns</h2>
      <p>Here are some common responsive patterns:</p>
      <ul>
        <li>Auto-fit columns with minmax()</li>
        <li>Flexible sidebar layouts</li>
        <li>Card-based designs</li>
        <li>Holy grail layout</li>
      </ul>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>CSS Grid and Flexbox together provide all the tools you need to create modern, responsive layouts. Practice with different combinations to master these powerful layout systems.</p>
    `,
    date: "2024-01-05",
    author: "Mavis Ogodu Ayikpo",
    categories: ["CSS", "Web Development", "Design"],
    tags: ["css", "grid", "flexbox", "responsive"],
    readTime: 10,
  },
]

// In-memory storage (replace with database in production)
const posts = [...samplePosts]

export async function getAllPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return posts.find((post) => post.slug === slug) || null
}

export async function getCategories(): Promise<string[]> {
  const allCategories = posts.flatMap((post) => post.categories)
  return [...new Set(allCategories)].sort()
}

export async function createPost(postData: Omit<BlogPost, "slug" | "date" | "readTime">): Promise<BlogPost> {
  const slug = postData.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

  const readTime = Math.ceil(postData.content.replace(/<[^>]*>/g, "").split(" ").length / 200)

  const newPost: BlogPost = {
    ...postData,
    slug,
    date: new Date().toISOString().split("T")[0],
    readTime,
  }

  posts.unshift(newPost)
  return newPost
}

export async function updatePost(slug: string, postData: Partial<BlogPost>): Promise<BlogPost | null> {
  const index = posts.findIndex((post) => post.slug === slug)
  if (index === -1) return null

  const readTime = postData.content
    ? Math.ceil(postData.content.replace(/<[^>]*>/g, "").split(" ").length / 200)
    : posts[index].readTime

  posts[index] = { ...posts[index], ...postData, readTime }
  return posts[index]
}

export async function deletePost(slug: string): Promise<boolean> {
  const index = posts.findIndex((post) => post.slug === slug)
  if (index === -1) return false

  posts.splice(index, 1)
  return true
}

