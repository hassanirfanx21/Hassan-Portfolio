"use client";

import { ReactLenis } from "lenis/react";
import { useState, useEffect } from "react";
import { cancelFrame, frame } from "framer-motion";

export default function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null); // Track Lenis instance

  useEffect(() => {
    if (!lenis) return;  // ✅ Prevent running if lenis is not yet initialized
  
    console.log("✅ Lenis initialized:", lenis); // 🔵 Debugging log
  
    function update(time) {
      lenis.raf(time);// Tells Lenis to update every frame.
    }
  
    frame.update(update, true);//Syncs Lenis with Framer Motion animations.
  
    return () => cancelFrame(update);
  }, [lenis]);  // 🟢 Runs only when lenis is set
  

  return (
    <ReactLenis
      root
      options={{
        smooth: true,        // Enable smooth scrolling
        smoothWheel: 1.5,    // Adjusts smoothness for mouse wheel (0.1 - 2)
        smoothTouch: 1.5,    // Adjusts smoothness for touch devices (0.1 - 2)
        duration: 1.5,       // Duration of the scroll animation (1.0 = default)
        // easing: (t) => 1 - Math.pow(1 - t, 3), // Custom easing function
      }}      setLenis={(instance) => {
        console.log("🔹 Lenis instance set:", instance); // Log Lenis instance
        setLenis(instance);
      }}
    >
      {children}
    </ReactLenis>
  );
}
