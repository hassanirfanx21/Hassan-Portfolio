import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import projectDescriptions from "./ProjectDetails";

const ProjectDescription = ({ project }) => {
  if (!project) return <p className="text-[#ADB7BE]">No project selected.</p>;

  console.log("Project Title:", project.title); // Debugging
  const description =
    projectDescriptions[project.title?.trim()] || "No description available.";

  return (
    <div className="w-full md:w-1/2 px-4 flex flex-col md:h-[65vh]">
      <div className="bg-[#181818] p-4 rounded-lg h-full flex flex-col">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <div className="overflow-y-auto flex-grow mt-2 pr-2 max-h-[50vh] custom-scrollbar">
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
        <div className="mt-4 flex space-x-4">
          <a
            href={project.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px]  transition-opacity duration-500 group-hover:opacity-100"></span>

            <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
              <div className="relative z-10 flex items-center space-x-2">
                <span className="transition-all duration-500 group-hover:translate-x-1">
                  View Code
                </span>
                <svg
                  className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                  data-slot="icon"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Popup = ({ project, onClose, onPrev, onNext }) => {
  const controls = useAnimation();

  const handleSpringAnimation = async (direction) => {
    await controls.start({
      x: direction === "next" ? 30 : -30, // Move left or right
      transition: {
        type: "spring",
        stiffness: 350, // Adjust stiffness for a snappy effect
        damping: 30, // Controls how bouncy it feels
      },
    });

    // Reset position smoothly
    await controls.start({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 12,
      },
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
      <motion.div
        className="bg-[#181818] text-cyan-700 rounded-lg p-6 max-w-5xl w-full flex flex-col md:flex-row relative max:h-[70vh]"
        initial={{ opacity: 1, scale: 1 }}
        animate={controls}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ease-in-out bg-gray-700 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:ring-4 hover:ring-teal-500"
          onClick={onClose}
        >
          <XMarkIcon className="w-6 h-6 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-90 md:h-100 flex items-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-md md:h-3/4"
          />
        </div>

        {/* Project Description Component */}
        <ProjectDescription project={project} />

        {/* Navigation Buttons with Hover Effects */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 hover:ring-4 hover:ring-teal-500 p-2 rounded-full transition-all duration-300 ease-in-out"
          onClick={async () => {
            await handleSpringAnimation("prev");
            onPrev();
          }}
        >
          ⬅
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 hover:ring-4 hover:ring-teal-500 p-2 rounded-full transition-all duration-300 ease-in-out"
          onClick={async () => {
            await handleSpringAnimation("next");
            onNext();
          }}
        >
          ➡
        </button>
      </motion.div>
    </div>
  );
};

export default Popup;
