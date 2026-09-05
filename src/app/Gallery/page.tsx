"use client";

import * as React from "react";
import { useState } from "react";
import {
  MasonryPhotoAlbum,
  Photo,
  RenderImageContext,
  RenderImageProps,
} from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "react-photo-album/masonry.css";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

// Define photo type for clarity
type GalleryPhoto = Photo & { alt?: string; key?: string };

const photos: GalleryPhoto[] = [
  {
    src: "/Gallery/aj1.webp",
    width: 3648,
    height: 5472,
    alt: "A graduation photoshoot taking place in the museum of modern art located at Saint Mary's College of California",
  },
  {
    src: "/Gallery/aj2.webp",
    width: 5472,
    height: 3648,
    alt: "A graduation photoshoot at Saint Mary's College of California",
  },
  {
    src: "/Gallery/bass_film_festival_trophy.webp",
    width: 3000,
    height: 2000,
    alt: "Bass film festival trophy photography",
  },
  {
    src: "/Gallery/bass_coffee.webp",
    width: 3000,
    height: 2000,
    alt: "Bass coffee photography session",
  },
  {
    src: "/Gallery/bgrad.webp",
    width: 3000,
    height: 2000,
    alt: "Graduation photography session",
  },
  {
    src: "/Gallery/black_grad_plo.webp",
    width: 3000,
    height: 2000,
    alt: "Black graduation photography session",
  },
  {
    src: "/Gallery/carnival.webp",
    width: 3000,
    height: 2000,
    alt: "Carnival event photography",
  },
  {
    src: "/Gallery/carnival2.webp",
    width: 3000,
    height: 2000,
    alt: "Carnival event photography - second shot",
  },
  {
    src: "/Gallery/gilroy_exercise.webp",
    width: 3000,
    height: 2000,
    alt: "Gilroy exercise photography session",
  },
  {
    src: "/Gallery/caldart.webp",
    width: 3000,
    height: 2000,
    alt: "CalDART photography",
  },
  {
    src: "/Gallery/commencement_liturgy.webp",
    width: 3000,
    height: 2000,
    alt: "Commencement liturgy ceremony photography",
  },
  {
    src: "/Gallery/commencement_liturgy2.webp",
    width: 2000,
    height: 3000,
    alt: "Commencement liturgy ceremony photography - second shot",
  },
  {
    src: "/Gallery/commencement_liturgy3.webp",
    width: 3000,
    height: 2000,
    alt: "Commencement liturgy ceremony photography - third shot",
  },
  {
    src: "/Gallery/grad_on_fire.webp",
    width: 5472,
    height: 3648,
    alt: "Graduation photography with fire effect",
  },
  {
    src: "/Gallery/chapel_grad.webp",
    width: 5472,
    height: 3648,
    alt: "Chapel graduation photography",
  },
  {
    src: "/Gallery/glow_smc.webp",
    width: 3000,
    height: 2000,
    alt: "Glow Saint Mary's College photography",
  },
  {
    src: "/Gallery/Glow SMC-4.11.25-Richard Trinh-1701.webp",
    width: 3000,
    height: 2000,
    alt: "Glow Saint Mary's College event on April 11, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/Ian's Grad Photos-12.22.24-Richard Trinh-2615.webp",
    width: 2000,
    height: 3000,
    alt: "Ian's graduation photos taken on December 22, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/Ian's Grad Photos-12.22.24-Richard Trinh-2762.webp",
    width: 3000,
    height: 2000,
    alt: "Ian's graduation photos taken on December 22, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/Ian's Grad Photos-12.22.24-Richard Trinh-2819.webp",
    width: 2000,
    height: 3000,
    alt: "Ian's graduation photos taken on December 22, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/Ian's Grad Photos-12.22.24-Richard Trinh-2949.webp",
    width: 2000,
    height: 3000,
    alt: "Ian's graduation photos taken on December 22, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/Initiation Sunday-4.27.25-Richard Trinh-3517.webp",
    width: 3000,
    height: 2000,
    alt: "Initiation Sunday ceremony on April 27, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/Integral Christmas-12.11.24-Richard Trinh-2028.webp",
    width: 3000,
    height: 2000,
    alt: "Integral Christmas event on December 11, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/Integral Christmas-12.11.24-Richard Trinh-2075.webp",
    width: 3000,
    height: 2000,
    alt: "Integral Christmas event on December 11, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/future_past.webp",
    width: 5448,
    height: 3635,
    alt: "Liam's graduation photos taken on May 17, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/Liam's Grad Photos-5.17.25-Richard Trinh-8737.webp",
    width: 5472,
    height: 3648,
    alt: "Liam's graduation photos taken on May 17, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/MBBvGonzaga1247.webp",
    width: 3000,
    height: 2000,
    alt: "Men's basketball game versus Gonzaga on March 2, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/MBBvOregon_State_8606.webp",
    width: 3000,
    height: 2000,
    alt: "Men's basketball game versus Oregon State on March 1, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/MBB v. Gonzaga-2.1.25-Richard Trinh-5621.webp",
    width: 3000,
    height: 2000,
    alt: "Men's basketball game versus Gonzaga on February 1, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/MBB v. Gonzaga-2.1.25-Richard Trinh-5632.webp",
    width: 3000,
    height: 2000,
    alt: "Men's basketball game versus Gonzaga on February 1, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/MBB v. Santa Clara-2.11.25-Richard Trinh-6129.webp",
    width: 3000,
    height: 2000,
    alt: "Men's basketball game versus Santa Clara on February 11, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/research.webp",
    width: 3000,
    height: 2000,
    alt: "Research photography session",
  },
  {
    src: "/Gallery/Rigo Senior Photos-05.22.24-Richard Trinh-0619.webp",
    width: 3648,
    height: 5472,
    alt: "Rigo's senior photos taken on May 22, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/Rigo Senior Photos-05.22.24-Richard Trinh-0825.webp",
    width: 3559,
    height: 5338,
    alt: "Rigo's senior photos taken on May 22, 2024 by Richard Trinh",
  },
  {
    src: "/Gallery/No_Kings02498.webp",
    width: 6000,
    height: 3376,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-02577.webp",
    width: 6000,
    height: 3376,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-02664.webp",
    width: 6000,
    height: 3376,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4048.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4057.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4084.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4093.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4101.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4108.webp",
    width: 3648,
    height: 5472,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4117.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4130.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4142.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4149.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4156.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4161.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4178.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4189.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4193.webp",
    width: 4708,
    height: 3139,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4221.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4239.webp",
    width: 4768,
    height: 3179,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4250.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4263.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
  {
    src: "/Gallery/No Kings Protest Oakland-6.14.25-Richard Trinh-4273.webp",
    width: 5472,
    height: 3648,
    alt: "No Kings protest in Oakland on June 14, 2025 by Richard Trinh",
  },
];

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-900/80 border border-white/10 shadow-md hover:border-white/30 hover:shadow-2xl hover:scale-[1.015] transition-all duration-300 cursor-pointer"
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
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Subtle hover gradient and caption matching homescreen dark glass pill style */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-3 pointer-events-none">
        {alt && (
          <p className="text-white text-[11px] sm:text-xs line-clamp-2 font-medium drop-shadow bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 w-full">
            {alt}
          </p>
        )}
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [index, setIndex] = useState<number>(-1);
  const [displayPhotos, setDisplayPhotos] = useState<GalleryPhoto[]>(() =>
    photos.map((p, idx) => ({ ...p, key: `${p.src}-0-${idx}` }))
  );
  const loopCountRef = React.useRef(1);
  const sentinelRef = React.useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Infinite scroll: continuously loops through photos
  React.useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const currentLoop = loopCountRef.current++;
          setDisplayPhotos((prev) => {
            const nextBatch = photos.map((p, idx) => ({
              ...p,
              key: `${p.src}-${currentLoop}-${idx}`,
            }));
            return [...prev, ...nextBatch];
          });
        }
      },
      { rootMargin: "1000px" } // preload 1000px before reaching the bottom
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Back to top scroll listener
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setIndex((i) => (i >= 0 ? (i + 1) % photos.length : -1)),
    onSwipedRight: () =>
      setIndex((i) =>
        i >= 0 ? (i - 1 + photos.length) % photos.length : -1
      ),
    trackMouse: true,
  });

  return (
    <div
      className="min-h-screen text-white px-3 sm:px-6 lg:px-10 py-6 w-full max-w-[1700px] mx-auto flex flex-col"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Masonry Grid with Enlarged Photos */}
      <MasonryPhotoAlbum
        photos={displayPhotos}
        render={{ image: renderNextImage }}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1; // 1 column on mobile for large, impactful photos
          if (containerWidth < 1024) return 2; // 2 columns on tablets
          return 3; // 3 columns max on desktop (significantly larger photos)
        }}
        spacing={(containerWidth) => (containerWidth < 640 ? 12 : 20)}
        onClick={({ index: clickedIndex }) =>
          setIndex(clickedIndex % photos.length)
        }
      />

      {/* Infinite loop sentinel and indicator */}
      <div
        ref={sentinelRef}
        className="w-full py-12 flex flex-col items-center justify-center gap-2 text-xs text-neutral-400 font-mono"
      >
        <span className="loading loading-spinner text-primary loading-sm" />
        <span>Looping gallery photos...</span>
      </div>

      {/* Lightbox for Fullscreen Full-Resolution Viewing */}
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
        plugins={[Zoom, Captions]}
        carousel={{
          padding: 0,
          spacing: 0,
        }}
        zoom={{
          maxZoomPixelRatio: 4,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          scrollToZoom: true,
        }}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
          descriptionMaxLines: 2,
        }}
        animation={{ fade: 250, swipe: 250 }}
        controller={{ closeOnBackdropClick: true }}
        {...handlers}
      />

      {/* Floating scroll-to-top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-30 p-2.5 sm:p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:text-black transition-all shadow-2xl active:scale-95"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
