import { House, Images, Mail } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div className="flex w-full min-h-screen">
      {/* Navigation */}
      <nav
        className="
          fixed top-0 left-0 w-full h-16 
          md:h-full md:w-64 
          xl:w-72 
          2xl:w-80 
          z-50 flex bg-base-100 
          md:flex-col items-center md:items-start 
          justify-center md:justify-start 
          px-4 py-2 
          shadow-md
        "
      >
        <h2
          className="
            text-base md:text-lg 
            xl:text-xl 
            2xl:text-2xl
            font-bold mb-0 md:mb-4 mt-0 md:mt-6 
            w-full text-center md:text-left
          "
        >
          Richard Trinh
        </h2>
        <ul
          className="
            flex md:flex-col gap-4 md:gap-2 
            xl:gap-4 
            2xl:gap-6
            ml-4 md:ml-0 mt-0 md:mt-4
          "
        >
          <li>
            <Link
              href="/"
              className="
                hover:underline flex items-center gap-2 
                py-3 
                xl:py-4 
                2xl:py-5
              "
            >
              <House className="xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/Gallery"
              className="
                hover:underline flex items-center gap-2 
                py-3 
                xl:py-4 
                2xl:py-5
              "
            >
              <Images className="xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" /> Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="
                hover:underline flex items-center gap-2 
                py-3 
                xl:py-4 
                2xl:py-5
              "
            >
              <Mail className="xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" /> Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main content with responsive margin */}
      <main className="bg-base glass flex flex-1 pt-16 md:pt-0 md:ml-64 xl:ml-72 2xl:ml-80 px-4 py-6">
        {children}
      </main>
    </div>
  );
};

export default ContentLayout;

