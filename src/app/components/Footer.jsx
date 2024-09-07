"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-base-100 py-6 mt-16 border-t border-base-300 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/assets/Parcoil2.png"
                alt="Parcoil Logo"
                width={50}
                height={50}
                className="mx-auto"
              />
            </a>
          </Link>
        </div>

        <nav className="mb-4">
          <ul className="flex justify-center space-x-6 mb-4">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://twitter.com/Parcoil" legacyBehavior>
            <a
              className="text-base-content hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </Link>
          <Link href="https://github.com/Parcoil" legacyBehavior>
            <a
              className="text-base-content hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </Link>
        </div>

        <p className="text-sm text-base-content">
          &copy; 2024 Parcoil. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
