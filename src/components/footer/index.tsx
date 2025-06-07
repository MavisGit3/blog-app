import Link from "next/link"
import { Github, Twitter, Linkedin, Mail,  } from 'lucide-react'
import { Button } from "@/components/ui/button"
import NewsletterForm from "../newsletter-form"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Newsletter Section in Footer */}
        <div className="mb-8 pb-8 border-b">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest posts and updates delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-blue-700 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MB</span>
              </div>
              <span className="font-bold text-xl">Modern Blog</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A modern blog built with Next.js 15 and shadcn/ui. Sharing insights about web development and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                Blog
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold">Categories</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/blog?category=React" className="text-sm text-muted-foreground hover:text-primary">
                React
              </Link>
              <Link href="/blog?category=Next.js" className="text-sm text-muted-foreground hover:text-primary">
                Next.js
              </Link>
              <Link href="/blog?category=TypeScript" className="text-sm text-muted-foreground hover:text-primary">
                TypeScript
              </Link>
              <Link
                href="/blog?category=Web%20Development"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Web Development
              </Link>
              <Link href="/blog?category=CSS" className="text-sm text-muted-foreground hover:text-primary">
                CSS
              </Link>
              <Link href="/blog?category=JavaScript" className="text-sm text-muted-foreground hover:text-primary">
                JavaScript
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://twitter.com/mavisogodu3" target="_blank">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/MavisGit3" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://www.linkedin.com/in/mavis-ogodu-471528179/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="mailto:mavisogodu@mail.com.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Modern Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
