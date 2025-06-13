import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Download, Github, Trash2, Zap } from "lucide-react";
import { LayoutGrid } from "lucide-react";

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
    description:
      "Boost your PC performance with Sparkle, the free Windows optimization tool from Parcoil",
    images: ["/sparklebanner.png"],
  },
  canonical: "https://parcoil.com/sparkle",
};
async function checkUrlExists(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
}
async function getLatestRelease() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/Parcoil/Sparkle/releases/latest",
      { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("Failed to fetch latest release");
    const release = await res.json();

    const setupAsset = release.assets.find((asset) =>
      asset.name.endsWith("-setup.exe")
    );

    if (setupAsset) {
      const urlExists = await checkUrlExists(setupAsset.browser_download_url);
      if (urlExists) {
        return {
          version: release.tag_name,
          downloadUrl: setupAsset.browser_download_url,
          downloadName: setupAsset.name,
          fallbackUrl: "https://github.com/Parcoil/Sparkle/releases/latest",
        };
      }
    }

    // Fallback if asset missing or URL invalid
    return {
      version: release.tag_name,
      downloadUrl: "https://github.com/Parcoil/Sparkle/releases/latest",
      downloadName: null,
      fallbackUrl: "https://github.com/Parcoil/Sparkle/releases/latest",
    };
  } catch (error) {
    console.error("Error fetching latest release:", error);
    return {
      version: null,
      downloadUrl: "https://github.com/Parcoil/Sparkle/releases/latest",
      downloadName: null,
      fallbackUrl: "https://github.com/Parcoil/Sparkle/releases/latest",
    };
  }
}

export default async function Page() {
  const { version, downloadUrl, downloadName } = await getLatestRelease();

  const features = [
    {
      icon: <LayoutGrid className="text-green-500" />,
      title: "Debloat Windows",
      description:
        "A tweak that runs a script to remove unnecessary apps and services.",
    },
    {
      icon: <Zap className="text-[#0096ff]" />,
      title: "Boost Performance",
      description:
        "Use tweaks to enhance system performance and responsiveness.",
    },
    {
      icon: <Trash2 className="text-red-500" />,
      title: "Clear temporary files",
      description: "Remove temporary files, caches, and logs to free up space.",
    },
    {
      icon: <AlertCircle className="text-orange-400" />,
      title: "Safe & Reversible",
      description:
        "All changes can be undone with backups, disabling the tweak. or changing system settings.",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <img className="mb-4 w-[100px]" src="/sparklelogo.png" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#0096ff] to-[#0042ff] bg-clip-text text-transparent">
            Sparkle
          </h1>
          <p className="text-lg md:text-xl text-black dark:text-gray-300 mb-4">
            The ultimate tool to optimize Windows and boost gaming performance
          </p>

          <div className="mb-4">
            {version ? (
              <p className="text-sm text-gray-300 mb-2">
                Latest Version:{" "}
                <a href="https://github.com/Parcoil/Sparkle">
                  <strong className="text-[#0096ff]">{version}</strong>
                </a>
              </p>
            ) : (
              <p className="text-sm text-gray-400 mb-2">
                Loading latest version...
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {downloadUrl ? (
              <a
                href={downloadUrl}
                download={downloadName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#0096ff] hover:bg-blue-600 text-black"
                >
                  <Download className="mr-2 h-5 w-5" /> Download Latest
                </Button>
              </a>
            ) : (
              <Button size="lg" disabled>
                <Download className="mr-2 h-5 w-5" /> Download Latest
              </Button>
            )}

            <Link href="https://github.com/Parcoil/Sparkle">
              <Button
                variant="outline"
                size="lg"
                className="border-[#0096ff] text-[#0096ff] hover:border-[#0096ff]/10"
              >
                <Github className="mr-2 h-5 w-5" /> View on GitHub
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0096ff] mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:border-[#0096ff] transition-all duration-300"
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

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Optimize?
          </h2>
          <p className="mb-6 text-muted-foreground ">
            Download Sparkle today and give your Windows PC the performance it
            deserves.
          </p>
          {downloadUrl ? (
            <a
              href={downloadUrl}
              download={downloadName}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#0096ff] hover:bg-blue-600 text-black"
              >
                <Download className="mr-2 h-5 w-5" /> Get Sparkle Now
              </Button>
            </a>
          ) : (
            <Button size="lg" disabled>
              <Download className="mr-2 h-5 w-5" /> Get Sparkle Now
            </Button>
          )}
        </div>
        <p className="text-muted-foreground/50 text-center mt-5">
          Supports Windows 11/10. (Tested on Windows 11)
        </p>
      </div>
      <p className="text-sm md:text-base text-orange-500 dark:text-orange-400 mb-8 font-medium text-center">
        ⚠️ Currently in Beta - Please report any issues on{" "}
        <a href="https://github.com/parcoil/sparkle" className="text-blue-500">
          GitHub
        </a>
      </p>
    </div>
  );
}
