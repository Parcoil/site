import React from "react";
import SparkleClient from "@/components/pages/sparkle/sparkle";

export const metadata = {
  title: "Sparkle | Windows Optimization Tool by Parcoil",
  description: "Sparkle is a free, open-source Windows optimization tool...",
  keywords: "Sparkle, Windows optimizer, debloat Windows, ...",
  openGraph: {
    title: "Sparkle | Windows Optimization Tool",
    description: "Optimize your Windows PC, remove bloatware...",
    type: "website",
    url: "https://parcoil.com/sparkle",
    images: [
      {
        url: "/sparklebanner.png",
        width: 1200,
        height: 630,
        alt: "Sparkle Windows Optimization Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparkle - Windows Optimization Made Easy",
    description: "Boost your PC performance with Sparkle...",
    images: ["/sparklebanner.png"],
  },
  canonical: "https://parcoil.com/sparkle",
};

export default function Page() {
  return <SparkleClient />;
}
