import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="justify-center text-center min-h-[100vh] flex flex-col gap-4">
      <h1 className="font-bold text-5xl">404</h1>
      <h2 className="text-2xl">Page Not Found</h2>
      <div>
        <Link href="/" className="btn">
          Go home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
