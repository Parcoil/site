import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-8xl text-primary">404</h1>
      <h2 className="text-2xl m-2">Page not found</h2>
      <Link href="/" className="mt-5">
        <Button>
          <Home size={28} className="h-7 w-7" />
          Go back to home
        </Button>
      </Link>
    </div>
  );
}

export default notFound;
