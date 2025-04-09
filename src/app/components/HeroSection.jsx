"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import BackgroundBeamsWithCollision from "./BackgroundBeamsWithCollision";

const HeroSection = () => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="relative px-4 sm:px-8 py-20 lg:py-32 overflow-x-auto">
        {/* Animated Glowing Background Blob */}
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 
                     bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                     from-primary-900 to-transparent rounded-full 
                     h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 
                     z-0 blur-3xl pointer-events-none"
        />

        <div className="min-w-full flex flex-col items-center sm:items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full text-center sm:text-left"
          >
            <h1 className="text-white font-extrabold tracking-tight text-[1.75rem] sm:text-[4rem] lg:text-[5rem] xl:text-[6rem] leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 whitespace-nowrap">
                Hello, I&apos;m
              </span>
              <span className="block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "Hassan Irfan",
                    1500,
                    "Web Developer",
                    1500,
                    "Software Engineer",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="inline-block"
                />
              </span>
            </h1>

            <p className="text-[#ADB7BE] mt-6 text-sm sm:text-xl lg:text-2xl max-w-full whitespace-normal">
              Full-stack developer | React & Next.js Enthusiast|  Transforming Ideas into Code
            </p>
          </motion.div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
