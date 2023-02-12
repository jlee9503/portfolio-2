import React from "react";
import { motion } from "framer-motion";
import Works from "./Works";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col relative text-left md:flex-row max-w-full justify-evenly overflow-hidden items-center mx-auto px-10"
    >
      <h2 className="text-gray-500 text-xl md:text-2xl uppercase tracking-[18px] mr-[-18px] absolute top-20">
        Experience
      </h2>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory absolute top-[15%] lg:static">
        <Works itemId={1} />
        <Works itemId={2} />
        <Works itemId={3} />
        <Works itemId={4} />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
