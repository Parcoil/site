"use client";

import Link from "next/link";
import { AppleIcon, Gamepad2, Shield, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 text-2xl font-bold">
              Parcoil
            </Link>
            <NavigationMenu className="hidden md:ml-10 md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/store" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <AppleIcon className="mr-2 h-4 w-4" />
                      iOS App Store
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Gamepad2 className="mr-2 h-4 w-4" />
                    Games
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Gamepad2 className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Unblocked Games
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Enjoy our collection of unblocked games. Play
                              anywhere, anytime!
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="https://lunaar.org" title="🌙 Lunaar">
                        our flagship site for unblocked games
                      </ListItem>
                      <ListItem
                        href="https://gostarlight.xyz"
                        title="💫 Starlight"
                      >
                        a simple proxy made in react
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/tab-cloaking" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      Tab Cloaking
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="https://github.com/parcoil"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <FaGithub className="mr-2 h-4 w-4" />
                      Github
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
            <div className="md:hidden ml-4">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ListItem = ({ className, title, children, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

const MobileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="/store" className="flex items-center">
            <AppleIcon className="mr-2 h-4 w-4" />
            iOS App Store
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/games/site1" className="flex items-center">
            <Gamepad2 className="mr-2 h-4 w-4" />
            Lunaar
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/games/site2" className="flex items-center">
            <Gamepad2 className="mr-2 h-4 w-4" />
            Starlight
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/tab-cloaking" className="flex items-center">
            <Shield className="mr-2 h-4 w-4" />
            Tab Cloaking
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/tab-cloaking" className="flex items-center">
            <FaGithub className="mr-2 h-4 w-4" />
            Github
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Navbar;
