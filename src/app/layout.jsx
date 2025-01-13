import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parcoil - iOS App Store, Unblocked Games, and Tab Cloaking",
  description:
    "Discover amazing iOS apps, play unblocked games, and protect your privacy with Parcoil.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
