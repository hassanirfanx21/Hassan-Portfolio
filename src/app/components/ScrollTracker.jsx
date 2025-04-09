"use client";
import { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";

export default function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function update() {
      setScrollY(window.scrollY);
      requestAnimationFrame(update); // Keep updating on each frame
    }

    let raf = requestAnimationFrame(update); //didi this to calll itself continously
    return () => cancelAnimationFrame(raf);
  }, []);
  
  return (
    <ReactLenis root options={{ smooth: true }}>
      <div className="fixed top-40 left-40 text-white z-10">
        Scroll Y: {scrollY.toFixed(2)}px
      </div>
    </ReactLenis>
  );
}
//In requestAnimationFrame(), your function runs once per frame, syncing updates (like scroll tracking or animations) to the screen refresh for smooth performance.
