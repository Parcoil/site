import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Home | Parcoil",
};

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="items-center justify-center flex">
            <Image src="/parcoil.png" width={100} height={100}></Image>
          </div>
          <h1 className="text-5xl font-extrabold dark:text-white mb-6">
            Welcome to Parcoil
          </h1>
          <p className="text-xl dark:text-blue-200 mb-8"> Unblocking The Web</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button size="lg">Projects</Button>
            </Link>
            <Link href="/tools">
              <Button size="lg">Tools</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
