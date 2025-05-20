import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Parcoil",
  description:
    "Creators of Lunaar and Starlight unblocked games, and Sparkle Windows optimizer. ",
  keywords:
    "Parcoil, Lunaar, Starlight, Sparkle, Windows optimizer, unblocked games, open source, optimizer, windows tweaks, windows tweaker, vtrl, hone",
  robots: "index, follow",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children, hideNavbar = false }) {
  return (
    <html lang="en">
      <link rel="icon" href="/parcoil.png" sizes="any" />

      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {!hideNavbar && <Navbar />}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
