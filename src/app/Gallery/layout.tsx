"use client";

import { House, Images, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white flex flex-col relative selection:bg-primary selection:text-black">
      {/* Sticky Top Navigation matching homescreen style */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-black/50 border-b border-white/10 px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between shadow-lg">
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
          <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-white group-hover:text-primary transition-colors">
            Richard Trinh
          </span>
          <span className="hidden sm:inline text-sm sm:text-base text-neutral-400 font-medium">
            Photography
          </span>
        </Link>

        {/* Homescreen-style navigation pill */}
        <nav>
          <ul className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md p-1.5 sm:p-2 rounded-full border border-white/15 shadow-inner text-sm sm:text-base font-semibold">
            <li>
              <Link
                href="/"
                className={`flex items-center gap-1.5 sm:gap-2 py-1.5 px-3 sm:px-4 rounded-full transition-all ${
                  pathname === "/"
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <House className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/Gallery"
                className={`flex items-center gap-1.5 sm:gap-2 py-1.5 px-3 sm:px-4 rounded-full transition-all ${
                  pathname === "/Gallery"
                    ? "bg-primary text-black font-bold shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Images className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Gallery</span>
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className={`flex items-center gap-1.5 sm:gap-2 py-1.5 px-3 sm:px-4 rounded-full transition-all ${
                  pathname === "/Contact"
                    ? "bg-primary text-black font-bold shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content area */}
      <main className="flex-1 w-full flex flex-col">
        {children}
      </main>
    </div>
  );
};

export default ContentLayout;


