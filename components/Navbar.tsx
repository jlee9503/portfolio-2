import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "@/typings";
import Link from "next/link";

type Props = {
  socials: Social[];
};

export default function Navbar({ socials }: Props) {
  return (
    <header className="sticky top-0 flex justify-between items-center max-w-7xl mx-auto p-5 md:px-8 z-20">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center"
      >
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            style={{ height: 40, width: 40 }}
          />
        ))}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex items-center group"
        >
          {/* <SocialIcon
            network="email"
            fgColor="gray"
            bgColor="transparent"
            style={{ height: 40, width: 40 }}
            className="group-hover:fill-white"
          /> */}
          <p className="uppercase text-gray-400 group-hover:text-white">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
