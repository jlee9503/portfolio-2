import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {
  pageInfo: PageInfo;
};

export default function Banner({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The name is ${pageInfo?.name}`,
      "Guy-who-loves-soccer.tsx",
      "<ButEnjoysCodingMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt="profile-pic"
        width={128}
        height={128}
        className="relative mx-auto rounded-full object-cover w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52"
      />
      <div className="z-20">
        <h2 className="text-xs sm:text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
          Web Developer
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="rgb(34,211,238)" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="navMenu">About</button>
          </Link>
          <Link href="#experience">
            <button className="navMenu">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="navMenu">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="navMenu">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
