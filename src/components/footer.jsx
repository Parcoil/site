import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Parcoil</h3>
            <p className="text-muted-foreground">
              Parcoil is your one-stop destination for iOS apps, unblocked
              games, and privacy solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/store"
                  className="text-muted-foreground hover:text-foreground"
                >
                  iOS App Store
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Unblocked Games
                </Link>
              </li>
              <li>
                <Link
                  href="/tab-cloaking"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Tab Cloaking
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-muted-foreground">Email: support@parcoil.com</p>
            <p className="text-muted-foreground">Phone: (123) 456-7890</p>
          </div> */}
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Parcoil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
