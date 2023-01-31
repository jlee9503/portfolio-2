import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly items-center mx-auto px-10"
    >
      <h2 className="text-gray-500 text-xl md:text-2xl uppercase tracking-[18px] absolute top-24">
        About
      </h2>

      <motion.img
        initial={{ x: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="/profile-pic.jpeg"
        className="flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-72 md:h-80 lg:w-[450px] lg:h-[550px] xl:w-[500px] xl:h-[600px] object-cover -mb-20"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl md:text-4xl font-semibold underline decoration-cyan-400/50">
          My Background
        </h4>
        <p className="text-base">
          lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
