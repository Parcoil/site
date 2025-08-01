import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Sparklecta from "@/components/Sparklecta";

export const metadata = {
  title: "Home | Parcoil",
  description:
    "Open source software and tools by Parcoil. Explore our projects like Sparkle, Lunaar, Starlight, and more.",
};

function Page() {
  return (
    <div className="min-h-[89vh] flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Sparklecta />
          <div className="items-center justify-center flex mb-8">
            <div className="relative">
              <Image
                src="/parcoil.png"
                width={120}
                height={120}
                alt="Parcoil Logo"
                className="transition-transform hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold mb-2 bg-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent/60 dark:text-primary">
            Welcome to Parcoil
          </h1>
          {/* will most likely add back soon */}
          {/* <div className="mb-4">
            <Badge
              variant="secondary"
              className="text-lg px-4 py-2 font-semibold"
            >
              Unblocking The Web
            </Badge>
          </div> */}

          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            We build open source tools/projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/projects">
              <Button
                size="lg"
                className="text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Projects
              </Button>
            </Link>
            <Link href="/tools">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105"
              >
                Browse Tools
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Active Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <CardTitle>Sparkle</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Open-source Windows optimizer with 20+ tweaks, restore point
                  manager, WinGet installer, and system utilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <CardTitle>Lunaar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Unblocked games site with built in proxy to bypass school
                  restrictions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <CardTitle>Starlight</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  React based unblocked games/proxy site with fast performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <CardTitle>Cloak.js</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Javascript library for easy favicon and title customization.
                  (tabcloak)
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Stats</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-none">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground">Active Projects</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">20K+</div>
                <div className="text-muted-foreground">Sparkle Downloads</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Open Source</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          {/* dont know what else to say */}
          <h2 className="text-4xl font-bold mb-6">Ready to Take Control?</h2>
          <p className="text-xl mb-8 opacity-90">
            View our collection of tools/projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
