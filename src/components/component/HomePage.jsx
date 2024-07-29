import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Image } from "next/image"

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6 fixed w-full ">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2 text-xl font-bold" prefetch={false}>
            <BriefcaseIcon className="w-6 h-6" />
            Stiven Cano
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/#home" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Home
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="/#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Projects
            </Link>
            <Link href="/#skills" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Skills
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button
            variant="secondary"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Hire Me
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="w-6 h-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground">
              <div className="flex flex-col items-start gap-4 p-4">
                <Link href="/#home" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                  Home
                </Link>
                <Link href="/#about" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                  About
                </Link>
                <Link href="/#projects" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                  Projects
                </Link>
                <Link href="/#skills" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                  Skills
                </Link>
                <Link href="/#contact" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1 mt-16">
        <section id="home" className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hi, I&apos;m Stiven Cano</h1>
              <p className="text-lg text-primary-foreground/80">
                I&apos;m a full-stack web developer with a passion for creating beautiful and functional websites.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View My Work
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="/programador.webp"
                width={500}
                height={500}
                alt="Hero"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        <section id="about" className="bg-background text-foreground py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid gap-6 md:grid-cols-2 items-center">
            <div className="flex justify-center">
              <img
                src="/programador2.png"
                width={400}
                height={400}
                alt="John Doe"
                className="aspect-square overflow-hidden rounded-full object-cover"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
              <p className="text-muted-foreground">
              I&apos;m a full stack web developer passionate about building web applications. I work with technologies like React, Node.js, Express, and PostgreSQL. I love creating efficient, user-friendly solutions and enjoy collaborating with other developers.

              Thanks for visiting my portfolio!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Key Skills</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Nextjs</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Tools</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Git</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="bg-muted  py-12 md:py-24 lg:py-32">
          <div className="container mx-auto text-center">
            <div className="space-y-4">
              <h2 className=" text-3xl font-bold tracking-tighter sm:text-4xl ">My Projects</h2>
              <p className="text-muted-foreground">Here are some of the projects I&apos;ve worked on.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card className="bg-background text-foreground">
                <CardHeader>
                  <img
                    src="/cinemaApp.png"
                    width={400}
                    height={225}
                    alt="Project 1"
                    className="rounded-t-md object-cover aspect-video"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Cinema App</h3>
                  <p className="text-muted-foreground">
                    A modern and responsive web application built with React, Node.js, and MongoDB.
                  </p>
                  <div className="flex justify-end">
                    <Link
                      href="https://cinema-app-lake.vercel.app/"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                      target="_blank"
                    >
                      View Project
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background text-foreground">
                <CardHeader>
                  <img
                    src="/portalNoticias.png"
                    width={400}
                    height={225}
                    alt="Project 2"
                    className="rounded-t-md object-cover aspect-video"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Portal Noticias</h3>
                  <p className="text-muted-foreground">
                    A modern and responsive web application built with React, Node.js, and PostgreSQL.
                  </p>
                  <div className="flex justify-end">
                    <Link
                      href="https://noticias-app-ten.vercel.app/"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                      target="_blank"
                    >
                      View Project
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background text-foreground">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={225}
                    alt="Project 3"
                    className="rounded-t-md object-cover aspect-video"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Weather App</h3>
                  <p className="text-muted-foreground">
                    A modern and responsive web application built with React, Node.js, and PostgreSQL.
                  </p>
                  <div className="flex justify-end">
                    <Link
                      href="https://github.com/stivenkno/asyncronous-weather--.git"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                      target="_blank"
                    >
                      View Project
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="skills" className="bg-background text-foreground py-12 md:py-24 lg:py-32">
          <div className="container mx-auto text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Skills</h2>
              <p className="text-muted-foreground">Here are some of the skills I&apos;ve acquired over the years.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-10 h-10" />
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <NetworkIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DatabaseIcon className="w-10 h-10" />
                <span className="text-sm font-medium">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DatabaseIcon className="w-10 h-10" />
                <span className="text-sm font-medium">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GitGraphIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Git</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DockIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Docker</span>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-muted text-muted-foreground py-12 md:py-24 lg:py-32">
          <div className="container mx-auto text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Me</h2>
              <p className="text-muted-foreground">
                If you&apos;d like to get in touch with me, please fill out the form below.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Card className="bg-background text-foreground w-full max-w-lg">
                <CardHeader>
                  <h3 className="text-lg font-semibold">Contact Form</h3>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-primary"
                        rows={5}
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full h-10 items-center justify-center rounded-md px-4 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto text-center md:text-left">
          <p className="text-sm">© 2023 Stiven Cano. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function DockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8h20" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 16h12" />
    </svg>
  )
}


function GitGraphIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function NetworkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}