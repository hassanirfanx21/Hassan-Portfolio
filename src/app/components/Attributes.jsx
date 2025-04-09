"use client";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Attributes = () => {
  const { scrollY } = useScroll();

  const motionConfigs = [
    { text: "🌙 Night Coder", x: ["-15%", "15%"], y: ["-15%", "15%"], rotate: "-3deg" },
    { text: "Full Stack Developer", x: ["15%", "-15%"], y: ["15%", "-15%"], rotate: "4deg" },
    { text: "Software Engineer", x: ["12%", "-12%"], y: ["-12%", "12%"], rotate: "0deg" },
    { text: "🕶️ Dark Mode forever", x: ["-18%", "18%"], y: ["18%", "-18%"], rotate: "-4deg" },
    { text: "Heavy Coder", x: ["15%", "-15%"], y: ["-15%", "15%"], rotate: "3deg" },
  ];
  

  return (
    <div className="h-[50vh] md:h-[90vh] flex flex-col justify-center items-center overflow-hidden gap-6 px-2 sm:px-8">
      {motionConfigs.map(({ text, x, y, rotate }, index) => {
        const motionX = useTransform(scrollY, [0, 2000], x);
        const motionY = useTransform(scrollY, [0, 2000], y);

        return (
          <motion.div
            key={index}
            className="text-slate-900 bg-slate-500 h-[2.2rem] sm:h-[5rem] w-[100vw] sm:w-[90vw] text-[1.4rem] sm:text-5xl text-center font-extrabold whitespace-nowrap"
            style={{
              x: motionX,
              y: motionY,
              rotate,
              position: "relative",
              top: 20,
              left: 10,
              transform: "translate(-70%, -70%)",
            }}
          >
            {text}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Attributes;
