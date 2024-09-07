import React from "react";
import Link from "next/link";
function Page() {
  const projects = [
    {
      name: "Cloakjs",
      description: "A JavaScript tab cloak library.",
      url: "https://github.com/Parcoil/Cloak",
    },
    {
      name: "Lunaar.org",
      description: "An unblocked games website.",
      url: "https://github.com/Parcoil/lunaar.org",
    },
    {
      name: "Starlight",
      description: "Another unblocked games site.",
      url: "https://github.com/Parcoil/starlight",
    },
    {
      name: "Sparkle",
      description: "A Windows toolbox for optimization.",
      url: "https://github.com/Parcoil/Sparkle",
    },
  ];

  return (
    <div className="min-h-[100dvh] bg-base-200 p-5 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-primary mb-10">Projects</h1>
      <div className="grid gap-6 w-full max-w-3xl">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card bg-base-100 shadow-lg p-6 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
          >
            <h2 className="text-2xl font-semibold text-secondary">
              {project.name}
            </h2>
            <p className="text-base-content mt-3">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Page;
