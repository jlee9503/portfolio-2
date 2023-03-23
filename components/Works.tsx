import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};

const Works = ({ experience }: Props) => {
  console.log(experience);
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[500px] md:w-[50%] lg:w-[50%] snap-center p-6 bg-[#292929] opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt="company-img"
        className="w-24 h-24 lg:w-[150px] lg:h-[150px] rounded-full object-cover object-center"
      />

      <div
        id={"Work" + experience._id}
        className="px-0 md:px-10 max-w-[12rem] sm:max-w-none"
      >
        <h4 className="text-lg md:text-3xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-lg md:text-xl mt-1">{experience.company}</p>
        <div id="techUsed" className="flex space-x-2 my-2">
          {experience.technologies.map((tech) => (
            <Image
              key={tech._id}
              className="rounded-full object-cover object-center"
              src={urlFor(tech.image).url()}
              alt="tech-img"
              width={40}
              height={40}
            />
          ))}
        </div>
        <p id="dates" className="uppercase text-sm">
          {new Date(experience.dateStarted).toDateString()} - {" "}
          {experience.currentWork ? "Present" : new Date(experience.dateEnded).toDateString()}
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
