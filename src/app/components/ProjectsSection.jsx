"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import Popup from "./Popup";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Crime Patrol Website",
    description: "A crime-mapping Dashboard",
    image: "/images/projects/crime.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hassanirfanx21/Crime-Patrol-Project",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Picture Sharing Website",
    description: "A picture sharing website",
    image: "/images/projects/pinterest.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hassanirfanx21/pinterest-cloudinaryVer",
    previewUrl: "/",
  },

  {
    id: 3,
    title: "Music Player",
    description: "A music player with spotify API",
    image: "/images/projects/song.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hassanirfanx21/Music-Player",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Currency Exchange",
    description: "A currency converter integrating API ",
    image: "/images/projects/currency.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hassanirfanx21/CurrencyExchange",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Netflix Homepage",
    description: "A Responsive Netflix homepage ",
    image: "/images/projects/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hassanirfanx21/NetflixHomePage",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "kHOJ - a Search Engine",
    description: "Flask-powered search engine with dynamic CSV updates ",
    image: "/images/projects/khoj.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hassanirfanx21/Khoj--a-SearchEngine",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleEyeClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex(
      (p) => p.id === selectedProject.id
    );
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setSelectedProject(projectsData[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex(
      (p) => p.id === selectedProject.id
    );
    const prevIndex =
      (currentIndex - 1 + projectsData.length) % projectsData.length;
    setSelectedProject(projectsData[prevIndex]);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              onEyeClick={() => handleEyeClick(project)}
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
          ////
          // <motion.li key={index}>
          //   <ProjectCard
          //     {...project}
          //     onEyeClick={() => handleEyeClick(project)}
          //   />
          // </motion.li>
          ////
        ))}
      </ul>

      {selectedProject && (
        <Popup
          project={selectedProject}
          onClose={handleClosePopup}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
