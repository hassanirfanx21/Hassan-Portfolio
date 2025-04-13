"use client";
import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, onEyeClick }) => {
  return (
    <div className="relative perspective-1000">
      {/* Motion div with 3D effect & slight hover shadow */}
      <motion.div
  whileHover={{
    boxShadow: "0px 5px 15px rgba(0, 139, 139, 0.25)", // dim dark cyan
  }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="transform-style-preserve-3d rounded-xl"
>

        {/* Image area with hover overlay */}
        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{
            background: `url(${imgUrl}) center/cover`,
          }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            {/* GitHub Link */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>

            {/* Preview/Eye Click */}
            <button
              onClick={onEyeClick}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </button>
          </div>
        </div>

        {/* Title & Clickable Description */}
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
          <h5 className="text-xl font-semibold mb-2 cursor-pointer hover:underline"             onClick={onEyeClick}
          >{title}</h5>
          <p
            className="text-[#ADB7BE] "
          >
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
