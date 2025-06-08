"use client";

import * as React from "react";
import { House, Images, Mail } from "lucide-react";
import Link from "next/link";
import RedoAnimText from "./components/ui/typewritter";
import Image from "next/image";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/masonry.css";
import { useSwipeable } from "react-swipeable";

const allPhotos = [
  { src: "/GroupShot.jpg", width: 1400, height: 900, alt: "Opening day at the MOA" },
  { src: "/Rigo.jpg", width: 1400, height: 900 , alt: "Graduation photos comissioned by an SMC student"},
  { src: "/MBB_vs_Gonzaga.jpg", width: 1400, height: 900, alt:"Men's basketball SMC vs Gonzaga" },
  { src: "/Saddle_up_soiree.jpg", width: 1400, height: 900, alt: "Saddle up Soiree event" },
  { src: "/Bass_Film_Festival.jpg", width: 1400, height: 900, alt:"BASS film festival" },
];

const doubledPhotos = [...allPhotos, ...allPhotos];

export default function Home() {
  const x = useMotionValue(0);
  const [paused, setPaused] = React.useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(0);

  const speed = 50;

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically set photoWidth based on window size to match rendered sizes
  // (These values roughly correspond to min-widths used in the photo container classes)
  const getPhotoWidth = () => {
    if (windowWidth >= 1024) return 400; // lg and up (desktop)
    if (windowWidth >= 768) return 320; // md (tablet/laptop)
    return 260; // sm (mobile)
  };

  useAnimationFrame((t, delta) => {
    if (!paused && !isMobile) {
      const deltaX = (speed * delta) / 1000;
      let nextX = x.get() - deltaX;
      const totalPhotos = doubledPhotos.length;
      const photoWidth = getPhotoWidth();
      const gapWidth = 24;
      const totalWidth = totalPhotos * (photoWidth + gapWidth);
      if (Math.abs(nextX) >= totalWidth / 2) {
        nextX += totalWidth / 2;
      }
      x.set(nextX);
    }
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % allPhotos.length),
    onSwipedRight: () => setCurrentIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length),
    trackMouse: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
  };

  return (
    <motion.div
      className="w-screen flex flex-col items-center overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section className="w-full flex flex-col items-center px-4 pt-6 " variants={itemVariants}>
        <motion.h1 className="text-4xl font-bold text-center mt-10" variants={itemVariants}>
          Richard Trinh Photography
        </motion.h1>

        <motion.div
          className="flex justify-center mt-4"
          style={{ minHeight: "1.5rem" }}
          variants={itemVariants}
        >
          <RedoAnimText />
        </motion.div>

        <motion.h3 className="text-center mt-4 text-lg max-w-xl" variants={itemVariants}>
          Bay Area based photographer capturing the beauty of the world one shot at a time.
        </motion.h3>

        <motion.div className="flex justify-center mt-6" variants={itemVariants}>
          <nav>
            <ul className="flex flex-row gap-6">
              <motion.li variants={itemVariants}>
                <Link href="/" className="flex items-center gap-2">
                  <House />
                  <span>Home</span>
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/Gallery" className="flex items-center gap-2">
                  <Images />
                  <span>Gallery</span>
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/Contact" className="flex items-center gap-2">
                  <Mail />
                  <span>Contact</span>
                </Link>
              </motion.li>
            </ul>
          </nav>
        </motion.div>

        <motion.div className="relative w-full mt-8 overflow-hidden" variants={itemVariants}>
          {!isMobile && (
            <motion.div
              className="flex gap-6 px-4 py-2"
              style={{ x }}
              onHoverStart={() => setPaused(true)}
              onHoverEnd={() => setPaused(false)}
            >
              {doubledPhotos.map((photo, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                  className="
                    relative flex-shrink-0 
                    min-w-[clamp(250px,20vw,600px)] h-[clamp(180px,15vw,450px)]  /* Default smaller */
                    md:min-w-[clamp(300px,25vw,700px)] md:h-[clamp(220px,18vw,520px)]  /* Laptop */
                    lg:min-w-[clamp(350px,30vw,800px)] lg:h-[clamp(250px,20vw,600px)]  /* Desktop */
                    rounded overflow-hidden shadow-lg cursor-pointer
                  "
                  onClick={() => {
                    setCurrentIndex(i % allPhotos.length);
                    setIsLightboxOpen(true);
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt ?? `Photo ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1800px) 800px, (min-width: 1280px) 30vw, (min-width: 768px) 40vw, 100vw"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {isMobile && (
            <div className="flex gap-6 px-4 py-2 overflow-x-auto snap-x snap-mandatory">
              {allPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="relative min-w-[300px] h-[200px] rounded overflow-hidden shadow-md snap-start cursor-pointer hover:brightness-110 hover:scale-105 transition-transform"
                  onClick={() => {
                    setCurrentIndex(i);
                    setIsLightboxOpen(true);
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt ?? `Photo ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
              ))}
            </div>
          )}
          {isMobile && (
            <p className="text-center text-sm mt-2">Swipe horizontally to explore photos</p>
          )}
        </motion.div>
      </motion.section>

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        index={currentIndex}
        slides={allPhotos.map((p) => ({ src: p.src, alt: p.alt }))}
        animation={{ fade: 300, swipe: 300 }}
        controller={{ closeOnBackdropClick: true }}
        render={{
          slide: ({ slide}) => (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Image
                width={slide.width || 800}
                height={slide.height || 600}
                src={slide.src}
                alt={slide.alt ?? ""}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
              {slide.alt && (
                <div className="mt-2 text-white text-sm text-center">{slide.alt}</div>
              )}
            </div>
          ),
        }}
        on={{
          view: ({ index }) => setCurrentIndex(index),
        }}
        {...handlers}
      />
    </motion.div>
  );
}
