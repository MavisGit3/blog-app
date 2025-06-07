import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"

export const metadata = {
  title: "About",
  description: "Learn more about the author and this blog",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Hero Section */}
        <section className="text-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
            MA
          </div>
          <h1 className="text-4xl font-bold mb-4">Hi, I am Mavis Ogodu Ayikpo</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate front-end developer and blogger sharing insights about modern web technologies, UI/UX design,
            and the latest trends in front-end development.
          </p>
        </section>

        {/* About Content */}
        <section className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>My Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I have been crafting user interfaces and web experiences for the past year, diving deep into modern
                front-end technologies and frameworks. My journey started with simple HTML/CSS websites and quickly
                evolved into building interactive user interfaces with React and Next.js.
              </p>
              <p>
                I am passionate about creating beautiful, accessible, and performant web experiences. This blog is my way
                of sharing front-end knowledge and documenting my learning journey while helping other developers master
                the art of building great user interfaces.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What I Write About</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>CSS & Styling</Badge>
                  <Badge>UI/UX Design</Badge>
                  <Badge>Performance</Badge>
                  <Badge>Accessibility</Badge>
                  <Badge>Animation</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  I focus on practical front-end tutorials, design patterns, and sharing experiences from building
                  user-facing applications. My goal is to help developers create better user experiences.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills & Experience */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Skills & Experience</CardTitle>
              <CardDescription>Front-end technologies and tools I work with regularly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Core Technologies</h3>
                  <div className="space-y-2 text-sm">
                    <div>React & Next.js</div>
                    <div>TypeScript</div>
                    <div>HTML5 & CSS3</div>
                    <div>JavaScript (ES6+)</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Styling & Design</h3>
                  <div className="space-y-2 text-sm">
                    <div>Tailwind CSS</div>
                    <div>Styled Components</div>
                    <div>Framer Motion</div>
                    <div>Responsive Design</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Tools & Workflow</h3>
                  <div className="space-y-2 text-sm">
                    <div>Git & GitHub</div>
                    <div>Figma</div>
                    <div>Vercel</div>
                    <div>VS Code</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Let us Connect</CardTitle>
              <CardDescription>Feel free to reach out if you have questions or just want to chat!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <Link href="mailto:mavis@example.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://twitter.com/mavisayikpo" target="_blank">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/mavisayikpo" target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://linkedin.com/in/mavisayikpo" target="_blank">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
