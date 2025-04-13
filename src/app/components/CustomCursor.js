"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  // Raw mouse position values
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Smooth, spring-based animation for cursor movement (x and y)
  const cursorX = useSpring(rawX, {
    stiffness: 110,
    damping: 10,
    mass: 0.5,
  });

  const cursorY = useSpring(rawY, {
    stiffness: 100,
    damping: 10,
    mass: 0.5,
  });
  const cursorsmX = useSpring(rawX, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  const cursorsmY = useSpring(rawY, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    const handlePointerCheck = () => {
      const finePointer = window.matchMedia("(pointer: fine)").matches;
      const minScreenWidth = window.innerWidth >= 1024;
      setShowCursor(finePointer && minScreenWidth);
    };

    const updateMousePosition = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    handlePointerCheck();
    window.addEventListener("resize", handlePointerCheck);
    window.addEventListener("mousemove", updateMousePosition);

    setMounted(true);

    return () => {
      window.removeEventListener("resize", handlePointerCheck);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [rawX, rawY]);

  if (!mounted || !showCursor) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{
          position: "fixed",
          top: -15,
          left: -15,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "2px solid #00CCCC",
          backgroundColor: "transparent",
          pointerEvents: "none",
          transformOrigin: "center",
          x: cursorX,
          y: cursorY,
          zIndex: 9998,
        }}
      />

      {/* Main filled cursor (middle layer) */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#00CCCC",
          pointerEvents: "none",
          transformOrigin: "center",
          x: cursorsmX,
          y: cursorsmY,
          zIndex: 9999,
        }}
      />

      {/* Inner dot */}
      {/* <motion.div
        style={{
          position: "fixed",
          top: -2,
          left: -2,
          width: "2px",
          height: "px",
          borderRadius: "50%",
          backgroundColor: "#00CCCC",
          pointerEvents: "none",
          transformOrigin: "center",
          x: cursorX,
          y: cursorY,
          zIndex: 10000,
        }}
      /> */}
    </>
  );
};

export default CustomCursor;
