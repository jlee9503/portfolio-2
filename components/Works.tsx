import React from "react";
import { motion } from "framer-motion";

type Props = { itemId: Number };

const Works = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2018_30/2505991/180723-open-ofice-space-dk-928.jpg"
        alt=""
        className="w-32 h-32 lg:w-[200px] lg:h-[200px] rounded-full object-cover object-center"
      />

      <div id={"Work" + props.itemId} className="px-0 md:px-10 max-w-[12rem] sm:max-w-none">
        <h4 className="text-xl md:text-4xl font-light">Job Position</h4>
        <p className="font-bold text-xl md:text-2xl mt-1">Company Name</p>
        <div id="techUsed" className="flex space-x-2 my-2">
          <p>skill 1</p>
          <p>skill 2</p>
          <p>skill 3</p>
        </div>
        <p id="dates" className="uppercase text-sm">
          Started: ... - Ended: ...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-base md:text-lg">
          <li>Description 1 - This is a description 111111111</li>
          <li>Description 2 - This is a description 22222</li>
          <li>Description 3 - This is a description 33333</li>
        </ul>
      </div>
    </article>
  );
};

export default Works;
