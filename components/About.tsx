import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly items-center mx-auto px-10"
    >
      <h2 className="text-gray-500 text-xl md:text-2xl uppercase tracking-[18px] mr-[-18px] absolute top-20">
        About
      </h2>

      <motion.img
        initial={{ x: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo.profilePic).url()}
        className="flex-shrink-0 w-[150px] h-[150px] rounded-full md:rounded-lg md:w-72 md:h-80 lg:w-[400px] lg:h-[500px] xl:w-[450px] xl:h-[550px] object-cover -mb-20"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl md:text-4xl font-semibold underline decoration-cyan-400/50">
          My Background
        </h4>
        <p className="text-xs lg:text-base">
          {pageInfo.backgroundInfo}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
