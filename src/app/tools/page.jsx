import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Globe } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { File } from "lucide-react";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Tools | Parcoil",
};
function page() {
  const tools = [
    {
      name: "Base64 Encoder/Decoder",
      description: "Encode and decode text to/from base64",
      link: "/tools/base64",
      icon: <File size={28} className="" />,
    },
    {
      name: "Password Generator",
      description: "Generate a random password",
      link: "/tools/password-generator",
      icon: <LockKeyhole size={28} className="" />,
    },
    {
      name: "IP Info",
      description: "Shows you IP related info",
      link: "/tools/ip",
      icon: <Globe size={28} className="" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-col flex-wrap items-center justify-center m-5">
        <h1 className="text-4xl font-bold">Tools</h1>
        <div className="flex flex-wrap justify-center">
          {tools.map((tool) => {
            return (
              <Card
                key={tool.name}
                className="flex flex-col items-center justify-center m-5 p-5  min-w-[400px] max-w-[400px]"
              >
                <CardHeader>
                  <div className="justify-center items-center flex">
                    {tool.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{tool.name}</h2>
                </CardHeader>
                <CardDescription>
                  <p>{tool.description}</p>
                </CardDescription>
                <CardContent className="mt-5">
                  <Link href={tool.link}>
                    <Button href={tool.link}>Go to tool</Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
