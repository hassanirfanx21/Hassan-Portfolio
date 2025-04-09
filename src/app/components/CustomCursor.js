// components/CustomCursor.jsx
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);

  // Raw cursor positions from mouse
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Smooth spring-based motion values
  const cursorX = useSpring(rawX, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  const cursorY = useSpring(rawY, {
    stiffness: 150,
    damping: 10,
    mass: 0.5,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    setMounted(true);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [rawX, rawY]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: -10,
        left: -10,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#00CCCC",
        pointerEvents: "none",
        transformOrigin: "center",
        x: cursorX,
        y: cursorY,
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
