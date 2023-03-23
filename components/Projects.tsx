import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";

type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col relative text-left md:flex-row max-w-full justify-evenly overflow-hidden items-center mx-auto"
    >
      <h2 className="text-gray-500 text-xl md:text-2xl uppercase tracking-[18px] mr-[-18px] absolute top-20">
        Projects
      </h2>

      <div className="relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-cyan-400/50">
        {projects.map((project, index) => (
          <div
            key={index}
            className="snap-center w-screen h-screen flex flex-shrink-0 flex-col space-y-5 justify-center items-center p-20 md:p-44"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.projectImage).url()}
              className="w-[300px] h-[250px]"
            />

            <div className="max-w-6xl px-0 md:px-10 space-y-10">
              <h4 className="text-3xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-cyan-400/50">
                  Project {index + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex justify-center items-center space-x-2">
                {project?.technologies.map((tech, idx) =>
                  <Image key={idx} src={urlFor(tech.image).url()} alt="tech-img" width={40} height={40} />
                )}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-[400px] xl:h-[500px] absolute top-[30%] left-0 bg-cyan-400/10 -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
