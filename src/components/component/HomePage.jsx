"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image  from "next/image"

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6 fixed w-full shadow-lg">
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
                href="https://github.com/stivenkno"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View My Work
              </Link>
              <Link
                href="/CV_StivenCanoAguirre.pdf "
                className="ml-4 inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
                target="_blank"
              >
                View CV
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
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
              <Image
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
                  <Image
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
                    The Cinema App is a web application developed with React and Axios that allows users to explore and discover movies. Using The Movie Database (TMDb) API, the app offers a user-friendly interface to search for movies, view details, and explore different categories.
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
                  <Image
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
                    The News Portal is a web application developed with React and Redux Toolkit (RTK) designed to provide users with the latest news articles across various categories. The application features a sleek, user-friendly interface and leverages RTK for efficient state management and API handling.
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
                  <Image
                    src="/weather.png"
                    width={400}
                    height={225}
                    alt="Project 3"
                    className="rounded-t-md object-cover aspect-video"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Weather App</h3>
                  <p className="text-muted-foreground">
                  The Weather App is a simple and intuitive web application that provides real-time weather updates. By consuming a weather API, it allows users to search for current weather conditions and forecasts for any location.
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
        <section id="skills" className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container mx-auto text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Skills</h2>
              <p className="text-muted-foreground">Here are some of the skills I&apos;ve acquired over the years.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <div className="flex flex-col items-center gap-2">
                <Image width={10} height={10} src="/html.png" alt="" className="w-10 h-10" quality={100} />
                <span className="text-sm font-medium">HTML</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image width={10} height={10} src="/css.png" alt="" className="w-10 h-10" quality={100} />
                <span className="text-sm font-medium">CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image width={10} height={10} src="/js.png" alt="" className="w-10 h-10" quality={100} />
                <span className="text-sm font-medium">JAVASCRIPT</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image width={10} height={10} src="/React.webp" alt="" className="w-10 h-10" quality={100} />
                <span className="text-sm font-medium">REACT</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image width={10} height={10} src="/tailwind.png" alt="" className="w-10 h-10" quality={100}/>
                <span className="text-sm font-medium">TAILWINDCSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image width={10} height={10} src="/nextjs.png" alt="" className="w-10 h-10" quality={100} />
                <span className="text-sm font-medium">NEXTJS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image width={10} height={10} src="/nodejs.png" alt="" className="w-10 h-10" quality={100} />
                <span className="text-sm font-medium">NODEJS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image width={10} height={10} src="/postgresql.png" alt="" className="w-10 h-10" quality={100} />
                <span className="text-sm font-medium">POSTGRESQL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image width={10} height={10} src="/docker.png" alt="" className="w-10 h-10" quality={100} />
                <span className="text-sm font-medium">DOCKER</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image width={10} height={10} src="/git.png" alt="" className="w-10 h-10" quality={100} />
                <span className="text-sm font-medium">GIT</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image width={10} height={10} src="/github.png" alt="" className="w-10 h-10" quality={100} />
                <span className="text-sm font-medium">GITHUB</span>
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
                  <form action="https://formsubmit.co/stivencano931@gmail.com" method="POST" className="space-y-4">
                    <div className="space-y-2">
                      <label  name="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        name="name"
                        id="name"
                        type="text"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label  name="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        name="email"
                        id="email"
                        type="email"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label name="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        id="message"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-primary"
                        rows={5}
                      />
                    </div>
                    <Button
                      onClick={() => {
                        alert(" Thank you for your message. I will get back to you as soon as possible.")
                      }}
                      type="submit"
                      variant="primary"
                      className="w-full h-10 items-center justify-center rounded-md px-4 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Submit
                    </Button>
                    <input type="hidden" name="_next" value="http://deployportfolio-lqci-stivenknos-projects.vercel.app/"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
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