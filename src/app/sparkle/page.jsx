import React from "react";
import SparkleClient from "@/components/pages/sparkle/sparkle";

export const metadata = {
  title: "Sparkle | Ultimate Windows Optimizer Tool",
  description: "Sparkle is a free, open-source Windows optimization tool",
  keywords:
    "Sparkle, Windows optimizer, debloat Windows, hone, vtrl, uninstall bloatware, optimize Windows, free tool, open source, optimization, optimizer, windows tweaks",
  openGraph: {
    title: "Sparkle | Ultimate Windows Optimizer",
    description: "Optimize your Windows PC, remove bloatware",
    type: "website",
    url: "https://parcoil.com/sparkle",
    images: [
      {
        url: "/sparklebanner.png",
        width: 1200,
        height: 630,
        alt: "Sparkle Ultimate Windows Optimizer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparkle - Ultimate Windows Optimizer",
    description: "Boost your PC performance with Sparkle",
    images: ["/sparklebanner.png"],
  },
  canonical: "https://parcoil.com/sparkle",
};

export default function Page() {
  return <SparkleClient />;
}
