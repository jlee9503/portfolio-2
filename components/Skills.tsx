import React from "react";
import TechSkill from "./TechSkill";
import { motion } from "framer-motion";
import { Skill as SkillTypes } from "@/typings";

type Props = {
  skills: SkillTypes[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col relative text-center md:text-left justify-center items-center mx-auto xl:space-y-0 xl:px-10 max-w-[2000px] xl:flex-row"
    >
      <h2 className="text-gray-500 text-xl md:text-2xl uppercase tracking-[18px] mr-[-18px] absolute top-20">
        Tech Skills
      </h2>

      <h3 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-xs sm:text-sm">
        Hover over a skill icon for current proficiency
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
        {skills.map((skill) =>
          <TechSkill key={skill._id} skill={skill} directionLeft={true} />
        )}
      </div>
    </motion.div>
  );
};

export default Skills;
