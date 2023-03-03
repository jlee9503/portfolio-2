import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col relative text-left md:flex-row max-w-full justify-evenly overflow-hidden items-center mx-auto">
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
              src="https://zippypixels.com/wp-content/uploads/2015/09/01-Free-perspective-website-mockup-824x542.jpg"
              className="w-[300px] h-[250px]"
            />

            <div className="max-w-6xl px-0 md:px-10 space-y-10">
              <h4 className="text-3xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-cyan-400/50">
                  Project {index + 1} of {projects.length}:
                </span>{" "}
                Project Title
              </h4>

              <p className="text-lg text-center md:text-left">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
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
