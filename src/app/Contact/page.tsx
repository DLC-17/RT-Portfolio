"use client";

import React from "react";
import ContentLayout from "../Gallery/layout";
import { Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

const ContactPage = () => {
  return (
    <ContentLayout>
      <motion.div
        className="
          flex flex-col md:flex-row items-center md:items-start justify-center
          w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-12 gap-10
          xl:px-24 xl:py-20 xl:gap-16
          2xl:px-32 2xl:py-24 2xl:gap-20
        "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left column – Profile image */}
        <motion.div
          id="left-column"
          className="flex-shrink-0"
          variants={itemVariants}
        >
          <div
            className="
              relative 
              w-32 h-32 
              md:w-48 md:h-48 
              xl:w-60 xl:h-60 
              2xl:w-72 2xl:h-72
            "
          >
            <Image
              src="/Richie.webp"
              alt="Profile"
              fill
              className="rounded-full shadow-md object-cover"
              sizes="
                (max-width: 768px) 128px,
                (max-width: 1024px) 192px,
                (max-width: 1280px) 240px,
                (max-width: 1536px) 288px,
                288px
              "
            />
          </div>
        </motion.div>

        {/* Right column – Contact Info and Gear */}
        <motion.div
          id="right-column"
          className="
            flex flex-col max-w-3xl w-full
            xl:max-w-4xl
            2xl:max-w-5xl
          "
          variants={itemVariants}
        >
          <motion.h1
            className="
              text-3xl lg:text-4xl
              xl:text-5xl
              2xl:text-6xl
              font-bold text-primary mb-2 
              text-center md:text-left
            "
            variants={itemVariants}
          >
            Richard Trinh
          </motion.h1>

          <motion.h2
            className="
              text-xl 
              xl:text-2xl
              2xl:text-3xl
              text-neutral-600 mb-4 
              text-center md:text-left
            "
            variants={itemVariants}
          >
            Photographer
          </motion.h2>

          <motion.p
            className="
              text-lg 
              xl:text-xl
              2xl:text-2xl
              text-neutral-600 mb-6 
              text-center md:text-left
              font-semibold
            "
            variants={itemVariants}
          >
            Thank you for visiting my photography portfolio! If you have any
            questions, comments, or would like to collaborate, feel free to
            reach out via email:
            <a
              href="mailto:rt12@stmarys-ca.edu"
              className="text-blue-600 hover:underline ml-1"
              rel="noopener noreferrer"
            >
              rt12@stmarys-ca.edu
            </a>
          </motion.p>

          <motion.div
            className="
              flex items-center justify-center md:justify-start space-x-4 mb-6
              xl:space-x-6
            "
            variants={itemVariants}
          >
            <a
              href="https://www.linkedin.com/in/kinhnghiem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="w-6 h-6 xl:w-8 xl:h-8" />
            </a>
            <a href="mailto:rt12@stmarys-ca.edu" rel="noopener noreferrer">
              <Mail size={28} className="xl:w-8 xl:h-8" color="black" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p
              className="
                text-neutral-600 mb-2 
                text-center md:text-left
                xl:text-2xl
                2xl:text-2xl
                font-semibold
              "
            >
              If you enjoyed my work and want to see more, feel free to explore
              some of my other projects:
            </p>

            <div className="flex flex-wrap gap-3 sm:justify-center md:justify-start">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.stmarys-ca.edu/news/saint-marys-undergraduate-commencement-vibrant-class-2025-charges-future-eyes-forward"
                className="btn btn-primary btn-dash"
              >
                2025 Commencement
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.stmarys-ca.edu/news/2024-professor-year-celebration-jose-feito-reflects-his-saint-marys-journey"
                className="btn btn-success btn-dash"
              >
                Professor of the Year
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.stmarys-ca.edu/news/saint-marys-college-takes-center-stage-fall-preview-day"
                className="btn btn-error btn-dash"
              >
                Fall-Preview Day
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.stmarys-ca.edu/news/rebuilding-year-more-national-championship-year-smcs-macken-debate-and-speech-team"
                className="btn btn-info btn-dash"
              >
                Debate and Speech
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.stmarys-ca.edu/news/lets-talk-march-gaelmadness-saint-marys-athletics-enhances-student-experience-all-year-long"
                className="btn btn-warning btn-dash"
              >
                GaelMadness
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.stmarys-ca.edu/news/la-luna-y-el-sol-la-promesa-de-guadalupe"
                className="btn btn-success btn-dash"
              >
                La Luna y el Sol
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.stmarys-ca.edu/news/photo-gallery-meet-saint-marys-2024-faculty-award-winners-and-provosts-faculty-research-grant"
                className="btn btn-primary btn-dash"
              >
                2024 Faculty Awards
              </a>
            </div>
          </motion.div>

          <motion.h2
            className="
              text-xl font-semibold mt-10 mb-4
              xl:text-2xl
              2xl:text-3xl
            "
            variants={itemVariants}
          >
            My Camera Gear:
          </motion.h2>

          <motion.ul
            className="
              list-disc list-inside text-info space-y-2
              xl:text-lg
              2xl:text-xl
            "
            variants={itemVariants}
          >
            <li>Canon 6D</li>
            <li>Sigma 35mm f/1.4 DG HSM Art</li>
            <li>Tamron SP 45mm f/1.8 Di VC USD</li>
            <li>Rokinon 85mm T1.5 Full Frame Cine DS</li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </ContentLayout>
  );
};

export default ContactPage;
