import Image from "next/image";
import Link from "next/link";
import { Download, Search, Shield, Smartphone, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function AppStorePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-20 md:py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-600 dark:from-blue-300 dark:to-teal-500">
                    Parcoil App Store
                  </h1>
                  <p className="text-xl mb-8 text-muted-foreground">
                    Discover and install amazing iOS apps with ease using
                    AltStore
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    <Button asChild size="lg" className="rounded-full">
                      <Link href="#featured-apps">Explore Apps</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      disabled
                      variant="outline"
                      className="rounded-full"
                    >
                      <a
                        href="https://altstore.io"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Parcoil Store
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] max-w-md mx-auto">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Parcoil App Store Interface"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] dark:bg-grid-gray-950/[0.05]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[300px] w-[300px] bg-blue-500 rounded-full filter blur-[128px] opacity-20 dark:opacity-10" />
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-muted/50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for apps..."
                  className="pl-10 rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Apps Section */}
        <section id="featured-apps" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Apps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AppCard
                name="Awesome Game"
                description="An exciting adventure game with stunning graphics."
                icon="🎮"
              />
              <AppCard
                name="Productivity Pro"
                description="Boost your productivity with this powerful task manager."
                icon="📊"
              />
              <AppCard
                name="Social Connect"
                description="Stay connected with friends and family in a unique way."
                icon="🌐"
              />
              <AppCard
                name="Fitness Tracker"
                description="Track your workouts and achieve your fitness goals."
                icon="💪"
              />
              <AppCard
                name="Creative Studio"
                description="Unleash your creativity with this versatile design app."
                icon="🎨"
              />
              <AppCard
                name="Language Master"
                description="Learn new languages with an innovative approach."
                icon="🗣️"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-20 bg-muted/50 dark:bg-gray-900/50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Search className="h-10 w-10" />}
                title="Browse Apps"
                description="Explore our curated collection of iOS apps."
              />
              <FeatureCard
                icon={<Download className="h-10 w-10" />}
                title="Download AltStore"
                description="Install AltStore on your iOS device."
              />
              <FeatureCard
                icon={<Smartphone className="h-10 w-10" />}
                title="Install Apps"
                description="Use AltStore to install your chosen apps."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10" />}
                title="Enjoy!"
                description="Experience apps not available on the official App Store."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Discover a world of amazing iOS apps with Parcoil App Store and
              AltStore.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#featured-apps">Start Browsing</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <a
                  href="https://altstore.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Parcoil Store
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                About Parcoil App Store
              </h3>
              <p className="text-muted-foreground">
                Parcoil App Store offers a curated selection of iOS apps that
                can be installed using AltStore.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#featured-apps"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Featured Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    AltStore Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <p className="text-muted-foreground">
                Parcoil App Store is not affiliated with or endorsed by Apple
                Inc. Use at your own discretion.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground">
            <p>&copy; 2023 Parcoil App Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const AppCard = ({ name, description, icon }) => (
  <Card className="bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        {name}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="mb-4">{description}</CardDescription>
      <Button asChild variant="outline" className="w-full">
        <Link href="#">View Details</Link>
      </Button>
    </CardContent>
  </Card>
);

const FeatureCard = ({ icon, title, description }) => (
  <Card className="bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <CardHeader>
      <CardTitle className="flex flex-col items-center text-center gap-2">
        {icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-center">{description}</CardDescription>
    </CardContent>
  </Card>
);
