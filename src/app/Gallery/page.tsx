"use client";

import * as React from "react";
import { useState } from "react";
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
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1;
          if (containerWidth < 1024) return 2;
          return 3;
        }}
        spacing={16}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={photos.map((photo) => ({
          src: photo.src,
          width: photo.width,
          height: photo.height,
          alt: photo.alt ?? "Photo",
          description: photo.alt ?? "Untitled Photo",
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
                alt={slide.alt ?? "Photo"}
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
        {...handlers}
      />
    </main>
  );
}
