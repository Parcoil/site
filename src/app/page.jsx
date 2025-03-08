import React from "react";
import { Button } from "@/components/ui/button";

const ParcoilHomepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Welcome to Parcoil
          </h1>
          <p className="text-xl text-blue-200 mb-8">someting</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg">
              Bring me to Projects
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg">
              Bring me to Tools
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};

export default ParcoilHomepage;
