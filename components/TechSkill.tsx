import React from "react";
import { motion } from "framer-motion";

type Props = { directionLeft?: boolean };

const TechSkill = (props: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: props.directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?ssl=1"
        className="border border-gray-500 rounded-full object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 p-2 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 transition duration-300 ease-in-out w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 group-hover:opacity-80 group-hover:bg-white z-0 rounded-full">
        <div className="flex justify-center items-center h-full">
          <p className="text-black font-bold opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default TechSkill;
