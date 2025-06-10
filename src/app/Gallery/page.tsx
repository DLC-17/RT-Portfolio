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
import {
  RenderImageContext,
  RenderImageProps,
} from "react-photo-album";

// Define photo type for clarity
type GalleryPhoto = Photo & { alt?: string };

const photos: GalleryPhoto[] = [
  { src: "/Gallery/research.webp", width: 1400, height: 900, alt: "Saint Marys annual research conference" },
  { src: "/aj.webp", width: 1400, height: 900, alt: "Aj grad photos" },
  { src: "/Gallery/bgrad.webp", width: 1400, height: 900, alt: "Black Graduation" },
  { src: "/Gallery/Black_Grad_P-lo.webp", width: 1400, height: 900, alt: "recent graduates" },
  { src: "/Saddle_up_soiree.webp", width: 1400, height: 900, alt: "Saddle up soiree" },
  { src: "/Bass_Film_Festival.webp", width: 1400, height: 900, alt: "Bay area short film festival" },
];

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo.src}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default function GalleryPage() {
  const [index, setIndex] = useState<number>(-1);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((i) => (i + 1) % photos.length),
    onSwipedRight: () => setIndex((i) => (i - 1 + photos.length) % photos.length),
    trackMouse: true,
  });

  return (
    <main
      className="min-h-screen text-white p-4 w-full max-w-[1600px] mx-auto"
      onContextMenu={(e) => e.preventDefault()}
    >
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
        render={{ image: renderNextImage }}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1;
          if (containerWidth < 1024) return 2;
          if (containerWidth < 1440) return 3;
          return 3;
        }}
        spacing={24} // increased spacing for larger display
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
            <div onClick={(e) => e.stopPropagation()}>
              <Image
                src={slide.src}
                alt={slide.alt ?? "Photo"}
                width={slide.width || 800}
                height={slide.height || 600}
                style={{
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
