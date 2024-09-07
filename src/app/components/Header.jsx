import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Parcoil
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/sparkle">Sparkle</Link>
          </li>
          <li>
            <Link href="https://lunaar.org">Games</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
