import { House,Images,Mail } from "lucide-react";
import Link from "next/link";


const ContentLayout = ({ children }) => {
  return (
<div className="flex w-full">
  {/* Navigation */}
  <nav className="fixed top-0 left-0 w-full h-16 md:h-full md:w-64 z-50 flex bg-base-100 md:flex-col items-center md:items-start justify-center md:justify-start px-4 py-2">
    <h2 className="text-base md:text-lg font-bold mb-0 md:mb-4 mt-0 md:mt-6 w-full text-center">
      Richard Trinh 
    </h2>
    <ul className="flex md:flex-col gap-4 md:gap-2 ml-4 md:ml-0 mt-0 md:mt-4">
      <li><Link href="/" className="hover:underline flex items-center gap-2 py-3"><House /> Home</Link></li>
      <li><Link href="/Gallery" className="hover:underline flex items-center gap-2 py-3"><Images /> Gallery</Link></li>
      <li><Link href="/Contact" className="hover:underline flex items-center gap-2 py-3"><Mail /> Contact</Link></li>
    </ul>
  </nav>

  {/* Main content with proper margin */}
  <main className="flex bg-white pt-10 md:pt-6 md:ml-34 w-full h-full">
    {children}
  </main>
</div>

  );
};

export default ContentLayout;
