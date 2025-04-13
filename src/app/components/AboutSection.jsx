"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

// Tab content data
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.ul
        className="list-disc pl-2"
        initial="hidden"
        animate="visible"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              duration: 1,
            },
          },
        }}
      >
        {[
          "React",
          "Node.js",
          "Express",
          "MySql",
          "Mongodb",
          "NextJs",
          "Software Designing",
          "Visual Paradigm",
        ].map((skill, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.ul
        className="list-disc pl-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              duration: 1,
            },
          },
        }}
      >
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          National University of Sciences and Technology (NUST)
        </motion.li>
      </motion.ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <motion.ul
        className="list-disc pl-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              duration: 1,
            },
          },
        }}
      >
        {[
          "Harvard CS-50",
          "Meta Frontend Developer Fundamentals",
          "Supervised and Unsupervised Classification by DeepLearning.io",
          "Introduction to Cloud Computing by IBM",
          "Introduction to Networking by NVIDIA",
        ].map((cert, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {cert}
          </motion.li>
        ))}
      </motion.ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-10 sm:mt-0 relative overflow-hidden" id="about">
      {/* GLOWING RADIAL BACKGROUND in bottom-left */}
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 transform translate-x-[-5%] translate-y-[5%] 
                   bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                   from-[#00f9ff] to-transparent rounded-full 
                   h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 
                   z-0 blur-3xl pointer-events-none"
      />

      <div className="rounded-md flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 space-y-8 md:space-y-0 relative z-10">
        {/* IMAGE */}
        <motion.img
          className="rounded-md"
          whileInView={{ opacity: 1, x: "0" }}
          initial={{ opacity: 0, x: "-10%" }}
          transition={{ duration: 1 }}
          src="/images/aboutPandora.jpg"
          alt="about pic"
          width={500}
          height={500}
        />

        {/* TEXT */}
        <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: "10%" }}
      transition={{ duration: 1 }}
      className="mt-4 md:mt-0 text-left flex flex-col h-full"
    >
      {/* About Me Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold text-white mb-4"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-base lg:text-lg"
      >
        I am a software engineer currently studying at the National University of
        Sciences and Technology (NUST), with a strong passion for full-stack
        development. I specialize in building scalable and efficient applications
        using technologies such as React, Node.js, and SQL. My experience spans
        from creating dynamic user interfaces to integrating backend systems and
        optimizing database performance. I am constantly learning and applying
        new techniques to enhance my skill set and contribute to impactful
        projects. In addition, I have experience in designing seamless user
        experiences and am dedicated to delivering high-quality code that meets
        both user needs and business objectives.
      </motion.p>

      {/* Tabs */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-row justify-start mt-8"
      >
        <TabButton
          selectTab={() => handleTabChange("skills")}
          active={tab === "skills"}
        >
          Skills
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Education
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
        >
          Certifications
        </TabButton>
      </motion.div>

      {/* Tab Content */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-8 h-[300px] overflow-y-auto p-4 rounded-md"
      >
        {TAB_DATA.find((t) => t.id === tab).content}
      </motion.div>
    </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
