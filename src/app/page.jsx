import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5 bg-base-200">
      <header className="text-center mb-10">
        <div className="flex justify-center items-center ">
          <Image
            src="/assets/parcoil2.png"
            alt="Parcoil Logo"
            width={60}
            height={60}
          />
        </div>
        <h1 className="text-5xl font-bold text-primary mb-4">Parcoil</h1>
        <p className="text-xl text-base-content">Ending Internet Censorship.</p>
      </header>

      <div className="card bg-base-100 shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-secondary mb-4">
          About Parcoil
        </h2>
        <p className="text-lg text-base-content mb-4">
          Parcoil is an organization on GitHub focused on creating tools and
          websites that fight internet censorship. While membership is closed,
          the group has developed several projects:
        </p>
        <ul className="list-disc list-inside text-left text-base-content">
          <li>
            <strong>Cloakjs:</strong> A JavaScript tab cloak library.
          </li>
          <li>
            <strong>Lunaar.org:</strong> An unblocked games website.
          </li>
          <li>
            <strong>Starlight:</strong> Another unblocked games site.
          </li>
          <li>
            <strong>Sparkle:</strong> A Windows toolbox for optimization.
          </li>
        </ul>
      </div>
    </div>
  );
}
