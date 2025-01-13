import Link from "next/link";
import { AppleIcon, Gamepad2, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-32 md:py-48">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 dark:from-purple-300 dark:to-pink-500">
                Welcome to Parcoil
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Discover our iOS App Store, Unblocked Games, and Tab Cloaking
                solutions
              </p>
              <div className="gap-4 flex justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/store">Explore Our Upcoming App Store</Link>
                </Button>
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/store">Explore Our Upcoming App Store</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] dark:bg-grid-gray-950/[0.05]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[300px] w-[300px] bg-purple-500 rounded-full filter blur-[128px] opacity-20 dark:opacity-10" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<AppleIcon className="h-10 w-10" />}
                title="iOS App Store"
                description="Discover and download amazing iOS apps from our curated collection."
                href="/store"
              />
              <FeatureCard
                icon={<Gamepad2 className="h-10 w-10" />}
                title="Unblocked Games"
                description="Enjoy our vast collection of unblocked games. Play anywhere, anytime!"
                href="/games"
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10" />}
                title="Tab Cloaking"
                description="Protect your privacy with our advanced tab cloaking technology."
                href="/tab-cloaking"
              />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Join thousands of satisfied users and experience the Parcoil
              difference today!
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/store">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Parcoil</h3>
              <p className="text-muted-foreground">
                Parcoil is your one-stop destination for iOS apps, unblocked
                games, and privacy solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/store"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    iOS App Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="/games"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Unblocked Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tab-cloaking"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Tab Cloaking
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-muted-foreground">
                Email: support@parcoil.com
              </p>
              <p className="text-muted-foreground">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground">
            <p>&copy; 2023 Parcoil. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FeatureCard = ({ icon, title, description, href }) => (
  <Card className="bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="mb-4">{description}</CardDescription>
      <Button asChild variant="outline" className="w-full">
        <Link href={href}>Learn More</Link>
      </Button>
    </CardContent>
  </Card>
);
