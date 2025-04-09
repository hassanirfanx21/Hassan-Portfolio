"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: '700', // Bold weight
  subsets: ['latin'],
});

const technologies = [
  { name: "JavaScript", icon: "/icons/square-js.svg" },
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css3.svg" },
  { name: "SQL", icon: "/icons/sql.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Framer", icon: "/icons/framer-motion.svg" },
  { name: "Chrome", icon: "/icons/chrome.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
];

// Duplicate list for seamless looping
const scrollingTechnologies = [...technologies, ...technologies];

export default function Toolbox() {
  return (
    <div className="p-6 text-cyan-600 rounded-xl shadow-xl w-full max-w-lg mx-auto relative overflow-hidden">
      {/* Updated Tech Stack Heading */}
      <h2 className={`${montserrat.className} text-6xl font-extrabold text-center mb-4 tracking-wider`}>
        Tech Stack
      </h2>
      <p className="text-sm text-gray-400 text-center mb-4">
        Explore the technologies and tools I used.
      </p>

      <div className="space-y-3">
        {/* Row 1 - Moving Left */}
        <motion.div
          className="flex gap-4 whitespace-nowrap"
          animate={{ x: ["0%", "-130%"] }}
          transition={{
            ease: "linear",
            duration: 12,
            repeat: Infinity,
          }}
        >
          {scrollingTechnologies.map((tech, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg shadow-md min-w-[120px]"
            >
              <Image src={tech.icon} alt={tech.name} width={30} height={30} className="svg-cyan" />
              <span className="text-xs sm:text-sm font-medium truncate w-[80px]">{tech.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Moving Right */}
        <motion.div
          className="flex gap-4 whitespace-nowrap"
          animate={{ x: ["-130%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 12,
            repeat: Infinity,
          }}
        >
          {scrollingTechnologies.map((tech, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg shadow-md min-w-[120px]"
            >
              <Image src={tech.icon} alt={tech.name} width={30} height={30} className="svg-cyan" />
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
