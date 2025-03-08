import React from "react";

function Footer() {
  return (
    <footer className="py-6 w-full bg-gray-900 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-200 mb-4 md:mb-0">
            © 2025 Parcoil. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-200 hover:text-white">
              Terms
            </a>
            <a href="#" className="text-blue-200 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-blue-200 hover:text-white">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
