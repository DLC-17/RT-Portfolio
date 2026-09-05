"use client";

import * as React from "react";
import {
  House,
  Images,
  Mail,
  ChevronUp,
  ChevronDown,
  Maximize2,
  Play,
  Pause,
} from "lucide-react";
import Link from "next/link";
import RedoAnimText from "./components/ui/typewritter";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { useSwipeable } from "react-swipeable";

// Automated import for all homepage images
const homepagePhotos = [
  {
    src: "/Homepage/aj_grad.webp",
    width: 5472,
    height: 3648,
    alt: "A graduation photo of an Art History major from SMC",
  },
  {
    src: "/Homepage/bass_film_festival.webp",
    width: 3000,
    height: 2000,
    alt: "Annual Bay Area Student Film Festival",
  },
  {
    src: "/Homepage/David_grad.webp",
    width: 5472,
    height: 3648,
    alt: "A graduation taken at Saint Mary's College of California",
  },
  {
    src: "/Homepage/CAB_Carnival.webp",
    width: 3000,
    height: 2000,
    alt: "The Annual CAB carnival",
  },
  {
    src: "/Homepage/halley_grad.webp",
    width: 5472,
    height: 3648,
    alt: "Comissioned Graduation Picture",
  },
  {
    src: "/Homepage/saddle_up_soiree.webp",
    width: 3000,
    height: 2000,
    alt: "Saddle up Soiree event",
  },
  {
    src: "/Homepage/ian_grad.webp",
    width: 3000,
    height: 2000,
    alt: "Graduation photos from a recent Berkley graduate",
  },
  {
    src: "/Homepage/olg.webp",
    width: 3000,
    height: 2000,
    alt: "The celebration for Our Lady of Guadelupe",
  },
  {
    src: "/Homepage/rigo_grad.webp",
    width: 5472,
    height: 3648,
    alt: "Graduation photo for SMC Alumn",
  },
  {
    src: "/Homepage/mbb_vs_gonzaga.webp",
    width: 3000,
    height: 2000,
    alt: "A shot of the fans watching the Saint Mary's College of California men's basketball team",
  },
];

const variants: Variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0.6,
  }),
  center: {
    y: "0%",
    opacity: 1,
    transition: {
      y: { type: "tween" as const, ease: [0.25, 1, 0.5, 1], duration: 0.85 },
      opacity: { duration: 0.45 },
    },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 0.6,
    transition: {
      y: { type: "tween" as const, ease: [0.25, 1, 0.5, 1], duration: 0.85 },
      opacity: { duration: 0.45 },
    },
  }),
};

export default function Home() {
  const [pageState, setPageState] = React.useState({ page: 0, direction: 1 });
  const [isPaused, setIsPaused] = React.useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  const totalPhotos = homepagePhotos.length;
  const currentIndex =
    ((pageState.page % totalPhotos) + totalPhotos) % totalPhotos;
  const currentPhoto = homepagePhotos[currentIndex];

  const paginate = React.useCallback((newDirection: number) => {
    setPageState((prev) => ({
      page: prev.page + newDirection,
      direction: newDirection,
    }));
  }, []);

  const goToSlide = React.useCallback(
    (targetIndex: number) => {
      setPageState((prev) => {
        const currentIdx =
          ((prev.page % totalPhotos) + totalPhotos) % totalPhotos;
        if (targetIndex === currentIdx) return prev;
        const diff = targetIndex - currentIdx;
        return {
          page: prev.page + diff,
          direction: diff > 0 ? 1 : -1,
        };
      });
    },
    [totalPhotos]
  );

  // Auto-advance vertically every 5 seconds
  React.useEffect(() => {
    if (isPaused || isLightboxOpen) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [pageState.page, isPaused, isLightboxOpen, paginate]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        paginate(1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        paginate(-1);
      } else if (e.key === " ") {
        e.preventDefault();
        setIsPaused((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, paginate]);

  // Mouse wheel scroll to cycle
  const lastScrollTime = React.useRef(0);
  const handleWheel = (e: React.WheelEvent) => {
    if (isLightboxOpen) return;
    const now = Date.now();
    if (now - lastScrollTime.current < 650) return;
    if (Math.abs(e.deltaY) > 30) {
      if (e.deltaY > 0) {
        paginate(1);
      } else {
        paginate(-1);
      }
      lastScrollTime.current = now;
    }
  };

  // Swipe up/down navigation
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => paginate(1),
    onSwipedDown: () => paginate(-1),
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  return (
    <main
      className="relative w-screen h-screen min-h-screen overflow-hidden text-white select-none"
      onWheel={handleWheel}
      {...swipeHandlers}
    >
      {/* Full-screen Background Slider */}
      <div className="fixed inset-0 overflow-hidden -z-10 bg-black">
        <AnimatePresence initial={false} custom={pageState.direction}>
          <motion.div
            key={pageState.page}
            custom={pageState.direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {/* Ambient blurred backdrop on mobile screens so letterboxed photos have a subtle matching background glow */}
            <Image
              src={currentPhoto.src}
              alt=""
              fill
              className="object-cover object-center blur-2xl opacity-40 sm:hidden pointer-events-none scale-110"
              sizes="100vw"
              aria-hidden="true"
            />
            {/* Main photo: scaled down to fit the screen on mobile (object-contain), full cover on tablet/desktop (sm:object-cover) */}
            <Image
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              fill
              priority
              className="object-contain sm:object-cover object-center pointer-events-none"
              sizes="100vw"
            />
            {/* Dark tint overlay for text legibility */}
            <div className="absolute inset-0 bg-black/45 backdrop-brightness-90" />
            {/* Subtle top and bottom gradient for headers and controls */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/80 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Box with Richard Trinh Photography - centered horizontally on mobile, left-aligned on sm+; positioned 80% from bottom on mobile (top-[20%]), 50% on sm+ */}
      <motion.section
        className="absolute left-0 right-0 mx-auto sm:right-auto sm:mx-0 sm:left-8 md:left-12 lg:left-16 xl:left-20 top-[20%] sm:top-1/2 -translate-y-1/2 z-10 w-[clamp(215px,68vw,300px)] sm:w-[clamp(270px,28vw,440px)] max-h-[calc(100vh-4.5rem)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left p-3 sm:p-[clamp(1rem,1.8vw,1.75rem)] rounded-xl sm:rounded-3xl bg-black/50 sm:bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
          <h1 className="text-sm xs:text-base sm:text-[clamp(1.35rem,2.2vw,2.4rem)] font-bold sm:font-extrabold tracking-tight leading-snug sm:leading-[1.15] drop-shadow-md text-white">
            Richard Trinh Photography
          </h1>

          <div
            className="flex justify-center sm:justify-start mt-1 sm:mt-2 text-primary text-[11px] sm:text-[clamp(0.75rem,0.95vw,1rem)] font-medium tracking-wide"
            style={{ minHeight: "1.1rem" }}
          >
            <RedoAnimText />
          </div>

          <p className="mt-1 sm:mt-2 text-[10px] sm:text-[clamp(0.75rem,0.9vw,0.95rem)] text-gray-200 drop-shadow max-w-[220px] sm:max-w-sm leading-tight sm:leading-relaxed">
            Bay Area based photographer capturing the beauty of the world one shot at a time.
          </p>

          <nav className="mt-2.5 sm:mt-5 w-full flex justify-center sm:justify-start">
            <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm p-1 sm:p-1.5 rounded-full border border-white/15 w-fit">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[clamp(0.7rem,0.85vw,0.875rem)] font-semibold text-white hover:text-primary transition-colors py-0.5 px-2 sm:py-1 sm:px-3 rounded-full bg-white/15"
                >
                  <House className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/Gallery"
                  className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[clamp(0.7rem,0.85vw,0.875rem)] font-semibold text-gray-200 hover:text-white transition-colors py-0.5 px-2 sm:py-1 sm:px-3 rounded-full hover:bg-white/10"
                >
                  <Images className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[clamp(0.7rem,0.85vw,0.875rem)] font-semibold text-gray-200 hover:text-white transition-colors py-0.5 px-2 sm:py-1 sm:px-3 rounded-full hover:bg-white/10"
                >
                  <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </motion.section>

      {/* Right-side Vertical Navigation Dots & Chevrons (scaled smaller on mobile) */}
      <div className="fixed right-1.5 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-1 sm:gap-2.5 backdrop-blur-md bg-black/50 sm:bg-black/40 p-1 sm:p-2.5 rounded-full border border-white/15 shadow-2xl">
        <button
          onClick={() => paginate(-1)}
          className="p-0.5 sm:p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 active:scale-95 transition-all"
          aria-label="Previous photo (slide down)"
          title="Previous photo"
        >
          <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </button>

        <div className="flex flex-col gap-1 sm:gap-2 py-0.5 sm:py-1 items-center">
          {homepagePhotos.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`transition-all duration-300 rounded-full ${
                i === currentIndex
                  ? "w-1.5 h-3.5 sm:w-2.5 sm:h-6 bg-primary shadow-lg ring-1 sm:ring-2 ring-primary/40"
                  : "w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to photo ${i + 1}`}
              title={`Photo ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 active:scale-95 transition-all"
          aria-label="Next photo (slide up)"
          title="Next photo"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Bottom Bar: Photo Information, Status & Lightbox Trigger - centered horizontally and 20% up from bottom on mobile; bottom-6 on sm+ */}
      <footer className="absolute bottom-[20%] sm:bottom-6 left-0 right-0 sm:left-8 md:left-12 lg:left-16 xl:left-24 sm:right-14 md:right-20 z-10 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1.5 sm:gap-3 pointer-events-none px-4 sm:px-0">
        <div className="backdrop-blur-md bg-black/50 sm:bg-black/40 border border-white/15 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full text-white/90 flex items-center gap-1.5 sm:gap-3 shadow-lg max-w-[240px] xs:max-w-[280px] sm:max-w-md md:max-w-lg truncate pointer-events-auto text-[10px] sm:text-xs md:text-sm">
          <span className="font-mono text-primary font-bold">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(totalPhotos).padStart(2, "0")}
          </span>
          <span className="text-white/30">|</span>
          <span className="truncate text-gray-200">
            {currentPhoto.alt}
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 backdrop-blur-md bg-black/50 sm:bg-black/40 border border-white/15 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full shadow-lg pointer-events-auto">
          <button
            onClick={() => setIsPaused((p) => !p)}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium text-white/90 hover:text-white hover:bg-white/15 transition-all"
            aria-label={isPaused ? "Resume auto cycle" : "Pause auto cycle"}
          >
            {isPaused ? (
              <Play className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
            ) : (
              <Pause className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
            )}
            <span>{isPaused ? "Play" : "Pause"}</span>
          </button>

          <button
            onClick={() => setIsLightboxOpen(true)}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium text-white/90 hover:text-white hover:bg-white/15 transition-all"
            aria-label="Open fullscreen photo view"
          >
            <Maximize2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            <span>View</span>
          </button>
        </div>
      </footer>

      {/* Lightbox for Fullscreen Full-Resolution Viewing */}
      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        index={currentIndex}
        slides={homepagePhotos.map((p) => ({
          src: p.src,
          alt: p.alt,
          title: p.alt,
          description: p.alt,
          width: p.width,
          height: p.height,
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
        on={{
          view: ({ index }) => goToSlide(index),
        }}
      />
    </main>
  );
}
