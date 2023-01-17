import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 3, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-cyan-400 rounded-full w-[200px] h-[200px] mt-52 animate-ping" />
      <div className="absolute border border-gray-700 rounded-full w-[300px] h-[300px] mt-52" />
      <div className="border border-gray-700 rounded-full w-[500px] h-[500px] mt-52 absolute" />
      <div className="rounded-full border border-cyan-400 opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="border border-gray-700 rounded-full w-[800px] h-[800px] mt-52 absolute" />
    </motion.div>
  );
}
