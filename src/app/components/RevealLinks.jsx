import React from "react";
import { motion } from "framer-motion";

const RevealLinks = () => {
  return (
    <section
      style={{
        display: "grid",
        placeContent: "center",
        gap: "24px",
        backgroundColor: "none",
        padding: "10px 22px",
        textAlign: "center",
      }}
    >
      <FlipLink href="https://github.com/hassanirfanx21">Git Hub</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/hassanirfan123/">
        LinkedIn
      </FlipLink>
      <FlipLink href="https://www.facebook.com/hassan.irfan.7712">
        Facebook
      </FlipLink>
      <FlipLink href="https://www.instagram.com/phantompain__x21/">
        Instagram
      </FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.div
      className="t-red"
      initial="initial"
      animate="initial"
      whileHover="hovered"
      style={{
        position: "relative",
        display: "block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontSize: "4rem", // Default size for larger screens
        fontWeight: "bolder",
        textTransform: "uppercase",
        lineHeight: "0.90",
      }}
    >
      <a href={href} style={{ position: "relative", display: "block" }}>
        {/* Original Text */}
        <div
          style={{
            position: "relative",
            padding: "clamp(5px, 2px, 5px)",
            fontSize: "clamp(2rem, 5vw, 4rem)", // Responsive font size
          }}
        >
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { y: 10 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              style={{ display: "inline-block", color: "#00FFFF" }}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>

        {/* Hover Effect Text */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // paddingTop:"5px",
            height: "clamp(50px, 7vw, 90px)", // Increased minimum height
            fontSize: "clamp(2rem, 5vw, 4rem)", // Responsive font size
          }}
        >
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { y: "120%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              style={{
                display: "inline-block",
                color:"white",
                padding: "10px 0",
              }}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </a>
    </motion.div>
  );
};

export default RevealLinks;
