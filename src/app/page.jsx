import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Home | Parcoil",
};

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold dark:text-white mb-6">
            Welcome to Parcoil
          </h1>
          <p className="text-xl dark:text-blue-200 mb-8">someting</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="" size="lg">
              Bring me to Projects
            </Button>
            <Link href="/tools">
              <Button className="">Bring me to Tools</Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
}

export default Page;
