"use client";

import React from "react";
import ContentLayout from "../Gallery/layout";
import { LinkedinIcon, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const ContactPage = () => {
  return (
    <ContentLayout>
      <motion.div
        className="
          flex flex-col md:flex-row items-center md:items-start justify-center 
          w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-12 gap-10

          /* Bigger padding and gap on large desktops */
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

              /* Increase size on xl and 2xl */
              xl:w-60 xl:h-60 
              2xl:w-72 2xl:h-72
            "
          >
            <Image
              src="/Richie.webp"
              alt="Profile"
              fill
              className="rounded-full shadow-md object-cover"
              sizes="(max-width: 768px) 128px, 192px"
            />
          </div>
        </motion.div>

        {/* Right column – Contact Info and Gear */}
        <motion.div
          id="right-column"
          className="
            flex flex-col max-w-3xl w-full

            /* Max width bigger on xl and 2xl */
            xl:max-w-4xl
            2xl:max-w-5xl
          "
          variants={itemVariants}
        >
          <motion.h1
            className="
              text-3xl 
              lg:text-4xl 

              /* Larger font sizes for desktop */
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

              /* Larger font on xl+ */
              xl:text-2xl
              2xl:text-3xl

              text-neutral mb-4 
              text-center md:text-left
            "
            variants={itemVariants}
          >
            Photographer
          </motion.h2>

          <motion.p
            className="
              text-lg 

              /* Bigger paragraph text on xl+ */
              xl:text-xl
              2xl:text-2xl

              text-neutral mb-6 text-balance 
              text-center md:text-left
              font-semibold
            "
            variants={itemVariants}
          >
            Thank you for visiting my photography portfolio! If you have any questions,
            comments, or would like to collaborate, feel free to reach out via email:
            <a
              href="mailto:rt12@stmarys-ca.edu"
              className="text-blue-600 hover:underline ml-1"
            >
              rt12@stmarys-ca.edu
            </a>
          </motion.p>

          <motion.div
            className="
              flex items-center justify-center md:justify-start space-x-4 mb-6
              /* Bigger icons on xl+ */
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
            <a href="mailto:rt12@stmarys-ca.edu">
              <Mail size={28} className="xl:w-8 xl:h-8" color="black" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p
              className="
                text-neutral mb-2 text-center md:text-left

                /* Larger text on xl+ */
                xl:text-2xl
                2xl:text-2xl
                font-semibold

              "
            >
              If you enjoyed my work and want to see more, feel free to explore some of my other projects:
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
            </div>
          </motion.div>

          <motion.h2
            className="
              text-xl 
              font-semibold  mt-10 mb-4

              /* Bigger heading on xl+ */
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

              /* Larger list items on xl+ */
              xl:text-lg
              2xl:text-xl
              
            "
            variants={itemVariants}
          >
            <li>Canon EOS R6</li>
            <li>Canon RF 24-105mm f/4L IS USM Lens</li>
            <li>Canon RF 50mm f/1.2L USM Lens</li>
            <li>Manfrotto Befree Advanced Tripod</li>
            <li>Rode VideoMic Pro+ Microphone</li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </ContentLayout>
  );
};

export default ContactPage;
