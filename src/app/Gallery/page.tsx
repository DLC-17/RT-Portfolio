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
  {
    src: "/Gallery/aj1.webp",
    width: 1400,
    height: 933,
    alt: "A graduation photoshoot taking place in the museum of modern art located at Saint Mary's College of California",
  },
  {
    src: "/Gallery/aj2.webp",
    width: 1400,
    height: 933,
    alt: "A graduation photoshoot at Saint Mary's College of California",
  },
  {
    src: "/Gallery/bass_film_festival_trophy.webp",
    width: 1400,
    height: 933,
    alt: "Bass film festival trophy photography",
  },
  {
    src: "/Gallery/bass_coffee.webp",
    width: 1400,
    height: 933,
    alt: "Bass coffee photography session",
  },
  {
    src: "/Gallery/bgrad.webp",
    width: 1400,
    height: 933,
    alt: "Graduation photography session",
  },
  {
    src: "/Gallery/black_grad_plo.webp",
    width: 1400,
    height: 933,
    alt: "Black graduation photography session",
  },
  {
    src: "/Gallery/carnival.webp",
    width: 1400,
    height: 933,
    alt: "Carnival event photography",
  },
  {
    src: "/Gallery/carnival2.webp",
    width: 1400,
    height: 933,
    alt: "Carnival event photography - second shot",
  },
  {
    src: "/Gallery/gilroy_exercise.webp",
    width: 1400,
    height: 933,
    alt: "Gilroy exercise photography session",
  },
  {
    src: "/Gallery/caldart.webp",
    width: 1400,
    height: 933,
    alt: "CalDART photography",
  },
  {
    src: "/Gallery/commencement_liturgy.webp",
    width: 1400,
    height: 933,
    alt: "Commencement liturgy ceremony photography",
  },
  {
    src: "/Gallery/commencement_liturgy2.webp",
    width: 1400,
    height: 933,
    alt: "Commencement liturgy ceremony photography - second shot",
  },
  {
    src: "/Gallery/commencement_liturgy3.webp",
    width: 1400,
    height: 933,
    alt: "Commencement liturgy ceremony photography - third shot",
  },
  {
    src: "/Gallery/grad_on_fire.webp",
    width: 1400,
    height: 933,
    alt: "Graduation photography with fire effect",
  },
  {
    src: "/Gallery/chapel_grad.webp",
    width: 1400,
    height: 933,
    alt: "Chapel graduation photography",
  },
  {
    src: "/Gallery/glow_smc.webp",
    width: 1400,
    height: 933,
    alt: "Glow Saint Mary's College photography",
  },
  {
    src: "/Gallery/Glow SMC-4.11.25-Richard Trinh-1701.webp",
    width: 1400,
    height: 933,
    alt: "Glow Saint Mary's College event on April 11, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/Ian's Grad Photos-12.22.24-Richard Trinh-2615.webp",
    width: 1400,
    height: 933,
    alt: "Ian's graduation photos taken on December 22, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/Ian's Grad Photos-12.22.24-Richard Trinh-2762.webp",
    width: 1400,
    height: 933,
    alt: "Ian's graduation photos taken on December 22, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/Ian's Grad Photos-12.22.24-Richard Trinh-2819.webp",
    width: 1400,
    height: 933,
    alt: "Ian's graduation photos taken on December 22, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/Ian's Grad Photos-12.22.24-Richard Trinh-2949.webp",
    width: 1400,
    height: 933,
    alt: "Ian's graduation photos taken on December 22, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/Initiation Sunday-4.27.25-Richard Trinh-3517.webp",
    width: 1400,
    height: 933,
    alt: "Initiation Sunday ceremony on April 27, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/Integral Christmas-12.11.24-Richard Trinh-2028.webp",
    width: 1400,
    height: 933,
    alt: "Integral Christmas event on December 11, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/Integral Christmas-12.11.24-Richard Trinh-2075.webp",
    width: 1400,
    height: 933,
    alt: "Integral Christmas event on December 11, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/future_past.webp",
    width: 1400,
    height: 933,
    alt: "Liam's graduation photos taken on May 17, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/Liam's Grad Photos-5.17.25-Richard Trinh-8737.webp",
    width: 1400,
    height: 933,
    alt: "Liam's graduation photos taken on May 17, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/MBBvGonzaga1247.webp",
    width: 1400,
    height: 933,
    alt: "Men's basketball game versus Gonzaga on March 2, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/MBBvOregon_State_8606.webp",
    width: 1400,
    height: 933,
    alt: "Men's basketball game versus Oregon State on March 1, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/MBB v. Gonzaga-2.1.25-Richard Trinh-5621.webp",
    width: 1400,
    height: 933,
    alt: "Men's basketball game versus Gonzaga on February 1, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/MBB v. Gonzaga-2.1.25-Richard Trinh-5632.webp",
    width: 1400,
    height: 933,
    alt: "Men's basketball game versus Gonzaga on February 1, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/MBB v. Santa Clara-2.11.25-Richard Trinh-6129.webp",
    width: 1400,
    height: 933,
    alt: "Men's basketball game versus Santa Clara on February 11, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/research.webp",
    width: 1400,
    height: 933,
    alt: "Research photography session",
  },
  {
    src: "/Gallery/Rigo Senior Photos-05.22.24-Richard Trinh-0619.webp",
    width: 1400,
    height: 933,
    alt: "Rigo's senior photos taken on May 22, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/Rigo Senior Photos-05.22.24-Richard Trinh-0825.webp",
    width: 1400,
    height: 933,
    alt: "Rigo's senior photos taken on May 22, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/No_Kings02498.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-02577.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-02664.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4048.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4057.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4084.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4093.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4101.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4108.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4117.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4130.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4142.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4149.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4156.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4161.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4178.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4189.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4193.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4221.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4239.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4250.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4263.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4273.webp",
    width: 1400,
    height: 933,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
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
