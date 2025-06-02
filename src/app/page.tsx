import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import * as React from "react";
import { House, Images, Mail } from "lucide-react";
import Link from "next/link";

const photos = [
  {src:"GroupShot.jpg",width: 1400, height:900},
  {src: "Aj.jpg", width:1400, height: 900},
  {src: "Rigo.jpg", width:1400, height: 900},
  {src: "MBB_vs_Gonzaga.jpg", width:1400, height: 900},
  {src: "Saddle_up_soiree.jpg", width:1400, height: 900},
  {src:"Bass_Film_Festival.jpg", width:1400, height:900}
  
];

export const metadata = {
  title: "Richard Trinh Photography",
  description: "Bay Area Photographer.",
  keywords: ["Photography", "Bay Area", "Portraits", "Nature", "Events"],
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-6 h-1" > 
      <div id="left" className="w-full md:w-1/3 px-6 md:float-left">
        <h1 className="text-4xl font-bold text-center mt-10">
          Richard Trinh Photography
        </h1>
        <h3 className="text-center mt-4 text-lg">
          Bay Area Photographer capturing the beauty of the world one shot at a time.
        </h3>
        
        <div className="flex justify-center mt-6">
          <nav>
            <ul className="flex flex-row gap-6 ">
              <li>
                <Link href="/" className="flex items-center gap-2">
                  <House />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/Gallery" className="flex items-center gap-2">
                  <Images />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="flex items-center gap-2">
                  <Mail />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
        <div id="right" className="w-full md:w-3/5 px-6 md:float-right">
           <ColumnsPhotoAlbum photos={photos} columns={2} />
        </div>
      </div>
  );
}
