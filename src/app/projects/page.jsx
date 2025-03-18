import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Globe } from "lucide-react";
import Link from "next/link";
import { Download } from "lucide-react";

export const metadata = {
  title: "Projects | Parcoil",
};

function page() {
  const projects = [
    {
      name: "Cloakjs",
      description: "A JavaScript tab cloak library.",
      repo: "https://github.com/Parcoil/Cloak",
      image: "🔍",
    },
    {
      name: "Lunaar.org",
      description: "An unblocked games website.",
      repo: "https://github.com/Parcoil/lunaar.org",
      image: "🌙",
      site: "https://lunaar.org",
    },
    {
      name: "Starlight",
      description: "Another unblocked games site.",
      repo: "https://github.com/Parcoil/starlight",
      image: "💫",
      site: "https://gostarlight.xyz",
    },
    {
      name: "Sparkle",
      description: "A Windows toolbox for optimization.",
      repo: "https://github.com/Parcoil/Sparkle",
      download: "/sparkle",
      image: "✨",
    },
  ];
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-center m-5 font-bold">Projects</h1>
      <div className="m-8 gap-4 flex justify-center flex-wrap">
        {projects.map((project) => (
          <Card className="min-w-[400px]">
            <CardHeader>
              <div className="flex gap-1">
                <p className="text-xl">{project.image}</p>
                <h1 className="text-xl">{project.name}</h1>
              </div>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>

            <CardFooter className="flex gap-4">
              {project.repo && (
                <Link href={project.repo}>
                  <Button variant="secondary" asChild>
                    <div>
                      <Github />
                      Visit Github Repo
                    </div>
                  </Button>
                </Link>
              )}
              {project.site && (
                <Link href={project.site}>
                  <Button variant="outline" asChild>
                    <div>
                      <Globe />
                      Visit Site
                    </div>
                  </Button>
                </Link>
              )}
              {project.download && (
                <Link href={project.download}>
                  <Button asChild>
                    <div>
                      <Download />
                      Download
                    </div>
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default page;
