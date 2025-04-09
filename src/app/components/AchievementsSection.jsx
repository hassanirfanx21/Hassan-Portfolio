"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Custom Animated Number Component
const CustomAnimatedNumber = ({ value, duration = 3, includeComma = true, className = "", isInView }) => {
  const [currentValue, setCurrentValue] = useState(0); // Start from 0

  useEffect(() => {
    if (!isInView) return; // Ensure animation starts only when element is in view

    let startValue = 0;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000; // Time in seconds
      const progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1
      setCurrentValue(Math.floor(startValue + (value - startValue) * progress)); // Interpolate value

      if (progress < 1) {
        requestAnimationFrame(animate); // Continue animation if not finished
      }
    };

    requestAnimationFrame(animate); // Start the animation
  }, [value, isInView, duration]); // Only rerun if `value` or `isInView` changes

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      className={`inline-block ${className}`}
    >
      {includeComma ? currentValue.toLocaleString() : currentValue} {/* Display the number with or without comma */}
    </motion.div>
  );
};

// Achievements Section with Dynamic Animation
const achievementsList = [
  { postfix: "+", metric: "Projects", value: 15 },
  { metric: "Years", value: 2 },
];

const AchievementsSection = () => {
  const [isInView, setIsInView] = useState(false);

  const handleInView = (isInView) => {
    setIsInView(isInView);
  };

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-6 sm:px-16 flex flex-col sm:flex-row items-center justify-center gap-16">
        {achievementsList.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center mx-4 my-4"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 5 }}
            onViewportEnter={() => handleInView(true)} // Set state to true when in view
            onViewportLeave={() => handleInView(false)} // Reset state when out of view
            viewport={{ once: true }} // Only animate once when in view
          >
            <h2 className="text-cyan-500 text-4xl font-bold flex flex-row justify-center items-center">
              {item.prefix || ""}
              <div className="mx-2">
                <CustomAnimatedNumber
                  value={item.value}
                  includeComma
                  className="text-cyan-500 text-4xl font-bold"
                  isInView={isInView} // Pass the in-view state
                />
              </div>
              {item.postfix || ""}
            </h2>
            <p className="text-[#269cb6] text-base">{item.metric}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
