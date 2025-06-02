import React from 'react';
import ContentLayout from '../Gallery/layout';
import {LinkedinIcon, Mail} from 'lucide-react';
import Image from "next/image"


const ContactPage = () => {
    return (
        <ContentLayout>
  <div className="flex flex-col md:flex-row items-center justify-center w-full h-full p-8 gap-10">
    
    {/* Left column – Profile image */}
    <div id="left-column" className="flex-shrink-0">
      <Image
        src="/Richie.jpg"
        alt="Profile"
        width={192} // same as w-48 (12 x 16)
        height={192} // same as h-48
        className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-md object-cover"
  />    </div>

    {/* Right column – Contact Info and Gear */}
    <div id="right-column" className="flex flex-col max-w-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Richard Trinh
      </h1>
      <h2 className='text-black'> Photographer</h2>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for visiting my photography portfolio! If you have any questions,
         comments, or would like to collaborate, feel free to reach out to me via my email
        <a
          href="mailto:rt12@stmarys-ca.edu"
          className="text-blue-600 hover:underline ml-1"
        >
          rt12@stmarys-ca.edu
        </a>.
      </p>
      <div className="flex items-center space-x-4 mb-6">
        <a href='https://www.linkedin.com/in/kinhnghiem/' target='none'><LinkedinIcon className="w-6 h-6 text-blue-600" /></a>
        <a href="mailto:rt12@stmarys-ca.edu"><Mail size={28} color='black' /></a>
      </div>
      <div>
        <p className="text-gray-600 mb-2 text-align-center">
          If you&aposve got a taste for my work and wanna see more check out some of the other 
          work that I have done
        </p>
        <ul className='pr-4 flex flex-wrap gap-2'>
            <a target="none"href="https://www.stmarys-ca.edu/news/saint-marys-undergraduate-commencement-vibrant-class-2025-charges-future-eyes-forward" role="button" className="btn btn-neutral btn-dash">2025 Commencement</a>
            <a target="none" href="https://www.stmarys-ca.edu/news/2024-professor-year-celebration-jose-feito-reflects-his-saint-marys-journey" role="button" className="btn btn-neutral btn-dash">Professor of the Year</a>
            <a target="none" href="https://www.stmarys-ca.edu/news/saint-marys-college-takes-center-stage-fall-preview-day" role="button" className="btn btn-neutral btn-dash">Fall-Preview Day</a>
            <a target="none" href="https://www.stmarys-ca.edu/news/rebuilding-year-more-national-championship-year-smcs-macken-debate-and-speech-team" role="button" className="btn btn-neutral btn-dash">Debate and Speech</a>
            <a target='none' href='https://www.stmarys-ca.edu/news/lets-talk-march-gaelmadness-saint-marys-athletics-enhances-student-experience-all-year-long' role='button' className="btn btn-neutral btn-dash">GaelMadness</a>
        </ul>
      </div>


      <h2 className="text-xl font-semibold text-gray-800 mb-4">My Camera Gear:</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Canon EOS R6</li>
        <li>Canon RF 24-105mm f/4L IS USM Lens</li>
        <li>Canon RF 50mm f/1.2L USM Lens</li>
        <li>Manfrotto Befree Advanced Tripod</li>
        <li>Rode VideoMic Pro+ Microphone</li>
      </ul>
      
    </div>
  </div>
</ContentLayout>
    );
};

export default ContactPage;