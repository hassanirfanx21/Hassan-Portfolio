"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const HoverRevealComponent = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Raw cursor positions
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Smooth spring-based cursor position
  const cursorX = useSpring(rawX, { stiffness: 150, damping: 20, mass: 0.5 });
  const cursorY = useSpring(rawY, { stiffness: 150, damping: 10, mass: 0.5 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCursor({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        rawX.set(e.clientX);
        rawY.set(e.clientY);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rawX, rawY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[40vh] md:h-[50vh] bg-[#00cccc] flex items-center justify-center overflow-hidden"
    >
      {/* Background Content */}
      <div className="absolute inset-0 bg-[#00cccc] flex items-center justify-center">
        <p className="text-black text-[6vw] md:text-[4rem] font-extrabold">
          Until <span className="text-rose-600">AI</span> takes over! 🤖
        </p>
      </div>

      {/* Foreground Content */}
      <motion.div
        className="relative z-10 w-full h-full bg-black flex items-center justify-center"
        animate={{
          // Create a dynamic mask based on cursor position
          WebkitMaskImage: `radial-gradient(circle 80px at ${cursor.x}px ${cursor.y}px, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 79px, rgba(0,0,0,1) 80px)`,
          maskImage: `radial-gradient(circle 80px at ${cursor.x}px ${cursor.y}px, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 79px, rgba(0,0,0,1) 80px)`,
        }}
        transition={{ ease: 'linear', duration: 0.1 }}
      >
        <p className="text-white text-[6vw] md:text-[3rem] font-extrabold">
          Just a{' '}
          <span className="text-cyan-500">web developer</span> creating websites
        </p>
      </motion.div>

      {/* Custom Cursor */}
     
    </div>
  );
};

export default HoverRevealComponent;
