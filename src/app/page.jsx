import Image from "next/image";
import Script from "next/script";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5 bg-base-200">
      <header className="text-center mb-10">
        <div className="flex justify-center items-center mb-4">
          <Image
            src="/assets/parcoil2.png"
            alt="Parcoil Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <h1 className="text-6xl font-bold text-primary mb-4">Parcoil</h1>
        <p className="text-2xl text-base-content mb-4">
          Empowering Your Online Freedom.
        </p>
      </header>

      <div className="card bg-base-100 shadow-lg p-8 w-full max-w-4xl">
        <h2 className="text-4xl font-semibold text-secondary mb-4">
          Unlocking the Internet
        </h2>
        <p className="text-xl text-base-content mb-4">
          Parcoil is a pioneering organization on GitHub, dedicated to crafting
          innovative tools and websites that combat internet censorship. Our
          doors may be closed to new members, but our projects continue to
          inspire and empower:
        </p>
        <ul className="list-disc list-inside text-left text-base-content mb-4">
          <li>
            <strong>Cloakjs:</strong> A JavaScript tab cloak library for
            enhanced privacy.
          </li>
          <li>
            <strong>Lunaar.org:</strong> A popular platform offering unblocked
            games for all.
          </li>
          <li>
            <strong>Starlight:</strong> Another unblocked games site, breaking
            barriers to entertainment.
          </li>
          <li>
            <strong>Sparkle:</strong> A comprehensive Windows toolbox for system
            optimization.
          </li>
        </ul>
        <button className="btn btn-primary mt-4">Explore Our Projects</button>
      </div>
    </div>
  );
}
