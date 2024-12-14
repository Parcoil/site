import Link from "next/link";
import React from "react";
import Autotag from "../components/Ad";

function Page() {
  const features = [
    {
      title: "Clean Temp",
      description:
        "Instantly free up space and speed up your PC with Sparkle's one-click cleanup feature.",
    },
    {
      title: "View Ram usage",
      description:
        "Monitor CPU, RAM, and other performance metrics in real-time.",
    },
  ];

  return (
    <>
      <Autotag />
      <div
        role="alert"
        className="alert alert-warning fixed sm:top-[100px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl flex items-center space-x-4 p-4 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>
          Sparkle is out of date and has not been updated. A new version is
          coming soon!
        </span>
      </div>

      <div className="min-h-[100dvh] p-5 flex flex-col justify-center items-center text-center">
        <div>
          <h1 className="text-9xl animate-pulse">✨</h1>
          <h1 className="text-5xl font-bold text-primary mt-5">Sparkle</h1>
          <p className="text-lg mt-3 text-base-content">
            The Finest Windows Optimizer
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="text-3xl font-semibold text-secondary mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card bg-neutral shadow-lg p-5">
                <h3 className="text-xl font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base-content">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 gap-5 flex">
          <Link
            href="https://github.com/Parcoil/Sparkle/releases/latest"
            className="btn btn-primary btn-lg px-8 py-4 shadow-lg"
          >
            Download Sparkle
          </Link>
          <Link
            href="https://github.com/Parcoil/Sparkle"
            className="btn btn-secondary btn-lg px-8 py-4 shadow-lg"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page;
