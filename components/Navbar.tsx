import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="sticky top-0 flex justify-between items-center max-w-7xl mx-auto p-5 md:px-8 z-20">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center"
      >
        <SocialIcon
          url="https://www.instagram.com/"
          fgColor="gray"
          bgColor="transparent"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://www.twitter.com/"
          fgColor="gray"
          bgColor="transparent"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/"
          fgColor="gray"
          bgColor="transparent"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://www.github.com/"
          fgColor="gray"
          bgColor="transparent"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://www.youtube.com/"
          fgColor="gray"
          bgColor="transparent"
          style={{ height: 40, width: 40 }}
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center"
      >
        <SocialIcon
          network="email"
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
          style={{ height: 40, width: 40 }}
        />

        <p className="uppercase text-gray-400 hidden md:inline-flex">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}
