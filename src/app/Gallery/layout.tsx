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
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-black/50 border-b border-white/10 px-2 min-[360px]:px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 flex items-center justify-between gap-1 min-[360px]:gap-2 shadow-lg">
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2.5 group shrink-0">
          <span className="font-extrabold text-xs min-[360px]:text-sm sm:text-xl md:text-2xl tracking-tight text-white group-hover:text-primary transition-colors whitespace-nowrap">
            Richard Trinh
          </span>
          <span className="hidden md:inline text-sm md:text-base text-neutral-400 font-medium">
            Photography
          </span>
        </Link>

        {/* Homescreen-style navigation pill */}
        <nav className="shrink-0">
          <ul className="flex items-center gap-0.5 min-[360px]:gap-1 sm:gap-1.5 md:gap-2 bg-white/10 backdrop-blur-md p-0.5 min-[360px]:p-1 sm:p-1.5 md:p-2 rounded-full border border-white/15 shadow-inner text-[10px] min-[360px]:text-xs sm:text-sm md:text-base font-semibold">
            <li>
              <Link
                href="/"
                aria-label="Home"
                title="Home"
                className={`flex items-center gap-0.5 min-[360px]:gap-1 sm:gap-1.5 md:gap-2 py-0.5 px-1.5 min-[360px]:py-1 min-[360px]:px-2.5 sm:py-1.5 sm:px-3.5 md:px-4 rounded-full transition-all whitespace-nowrap ${
                  pathname === "/"
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <House className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 shrink-0" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/Gallery"
                aria-label="Gallery"
                title="Gallery"
                className={`flex items-center gap-0.5 min-[360px]:gap-1 sm:gap-1.5 md:gap-2 py-0.5 px-1.5 min-[360px]:py-1 min-[360px]:px-2.5 sm:py-1.5 sm:px-3.5 md:px-4 rounded-full transition-all whitespace-nowrap ${
                  pathname === "/Gallery"
                    ? "bg-primary text-black font-bold shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Images className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 shrink-0" />
                <span>Gallery</span>
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                aria-label="Contact"
                title="Contact"
                className={`flex items-center gap-0.5 min-[360px]:gap-1 sm:gap-1.5 md:gap-2 py-0.5 px-1.5 min-[360px]:py-1 min-[360px]:px-2.5 sm:py-1.5 sm:px-3.5 md:px-4 rounded-full transition-all whitespace-nowrap ${
                  pathname === "/Contact"
                    ? "bg-primary text-black font-bold shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Mail className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 shrink-0" />
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


