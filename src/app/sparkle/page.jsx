import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertCircle,
  Download,
  Github,
  Trash2,
  Zap,
  Settings,
  Shield,
} from "lucide-react";

export const metadata = {
  title: "Sparkle | Windows Optimization Tool by Parcoil",
  description:
    "Sparkle is a free, open-source Windows optimization tool that helps debloat your system, boost FPS in games, and improve overall performance with one-click solutions.",
  keywords:
    "Sparkle, Windows optimizer, debloat Windows, boost FPS, system optimization, Parcoil, Windows performance, gaming performance",
  openGraph: {
    title: "Sparkle | Windows Optimization Tool",
    description:
      "Optimize your Windows PC, remove bloatware, and boost gaming performance with this free open-source tool.",
    type: "website",
    url: "https://parcoil.com/sparkle",
    images: [
      {
        url: "/sparkleimage.png", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Sparkle Windows Optimization Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparkle - Windows Optimization Made Easy",
    description:
      "Boost your PC performance with Sparkle, the free Windows optimization tool from Parcoil",
    images: ["/sparkleimage.png"],
  },
  canonical: "https://parcoil.com/sparkle",
};

export default function Page() {
  const features = [
    {
      icon: <Trash2 className="text-red-500" />,
      title: "Debloat Windows",
      description:
        "Remove unnecessary applications and services with one click!",
    },
    {
      icon: <Zap className="text-yellow-500" />,
      title: "Boost Performance",
      description:
        "Optimize system settings to increase FPS in games and applications.",
    },
    {
      icon: <Settings className="text-blue-500" />,
      title: "System Optimization",
      description:
        "Fine-tune Windows settings for maximum efficiency and speed.",
    },
    {
      icon: <Shield className="text-green-500" />,
      title: "Privacy Protection",
      description:
        "Disable telemetry and enhance privacy settings automatically.",
    },
  ];

  return (
    <div className="min-h-screen   text-white">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Alert Banner */}
        <Card className="bg-yellow-500 mb-12 border-none ">
          <CardContent className="flex items-center justify-center p-4 text-black">
            <AlertCircle className="mr-2 h-5 w-5 flex-shrink-0" />
            <p className="text-sm md:text-base">
              This version of Sparkle has not been updated in 1+ years. A new
              version is currently in development.
            </p>
          </CardContent>
        </Card>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl mb-4">✨</h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
            Sparkle
          </h1>
          <p className="text-lg md:text-xl text-black dark:text-gray-300 mb-8">
            The ultimate tool to optimize Windows, remove bloatware, and boost
            gaming performance
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="https://github.com/Parcoil/Sparkle/releases/latest">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <Download className="mr-2 h-5 w-5" /> Download Latest
              </Button>
            </Link>
            <Link href="https://github.com/Parcoil/Sparkle">
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
              >
                <Github className="mr-2 h-5 w-5" /> View on GitHub
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
              Features
            </h2>
            <p className="text-black dark:text-gray-400">
              Current capabilities in version v1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="dark:bg-gray-800 dark:border-gray-700 hover:border-yellow-500 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {feature.icon}
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="dark:text-gray-300">
                  {feature.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
