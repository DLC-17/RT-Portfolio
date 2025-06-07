"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import PhotoAlbum, { Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/styles.css";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { motion } from "framer-motion";

// Define photo type for clarity
type GalleryPhoto = Photo & { alt?: string };

const photos: GalleryPhoto[] = [
  { src: "/GroupShot.jpg", width: 1400, height: 900, alt: "Opening day at the MOA" },
  { src: "/Aj.jpg", width: 1400, height: 900, alt: "Graduation Photo" },
  { src: "/Rigo.jpg", width: 1400, height: 900, alt: "Graduation photo for a SMC Alumn" },
  { src: "/MBB_vs_Gonzaga.jpg", width: 1400, height: 900, alt: "Basketball game vs Gonzaga" },
  { src: "/Saddle_up_soiree.jpg", width: 1400, height: 900, alt: "Saddle Up Soiree event" },
  { src: "/Bass_Film_Festival.jpg", width: 1400, height: 900, alt: "Bass Film Festival atmosphere" },
];

export default function GalleryPage() {
  const [index, setIndex] = useState<number>(-1);
  const [columns, setColumns] = useState(3);
  const [loadedImages, setLoadedImages] = useState<{ [src: string]: boolean }>({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((i) => (i + 1) % photos.length),
    onSwipedRight: () => setIndex((i) => (i - 1 + photos.length) % photos.length),
    trackMouse: true,
  });

  return (
    <main className="min-h-screen text-white p-4" onContextMenu={(e) => e.preventDefault()}>
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-center mb-8 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Gallery
      </motion.h1>

      <PhotoAlbum
        layout="masonry"
        photos={photos}
        columns={columns}
        spacing={16}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={({ photo, wrapperStyle }) => (
          <motion.div
            style={wrapperStyle}
            className="relative rounded overflow-hidden shadow-md cursor-pointer transition-transform duration-200 ease-in-out"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {!loadedImages[photo.src] && (
              <div className="absolute inset-0 bg-neutral-800 animate-pulse rounded-md z-10" />
            )}
            <Image
              src={photo.src}
              alt={photo.alt || "Photo"}
              width={photo.width}
              height={photo.height}
              className={`w-full h-auto object-cover ${!loadedImages[photo.src] ? "invisible" : ""}`}
              onLoad={() => handleImageLoad(photo.src)}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            {photo.alt && loadedImages[photo.src] && (
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-xs p-2 w-full text-center backdrop-blur-sm">
                {photo.alt}
              </div>
            )}
          </motion.div>
        )}
      />

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={photos.map((photo) => ({
          src: photo.src,
          width: photo.width,
          height: photo.height,
          alt: photo.alt,
          description: photo.alt || "Untitled Photo",
        }))}
        plugins={[Captions]}
        captions={{
          showToggle: false,
          descriptionTextAlign: "center",
          descriptionMaxLines: 3,
        }}
        animation={{ fade: 300, swipe: 300 }}
        controller={{ closeOnBackdropClick: true }}
        render={{
          slide: ({ slide }) => (
            <div
              className="max-w-[90vw] max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={slide.src}
                alt={slide.alt || "Photo"}
                width={slide.width || 800}
                height={slide.height || 600}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          ),
        }}
        on={{ view: ({ index }) => setIndex(index) }}
        {...handlers}
      />
    </main>
  );
}
