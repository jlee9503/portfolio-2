import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

export default function Banner({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The name is John",
      "Guy-who-loves-soccer.tsx",
      "<ButEnjoysCodingMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-8 text-center overflow-hidden">
      <BackgroundCircle />
      {/* <Image /> */}
      <div>
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[20px]">Web Developer</h2>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="rgb(34,211,238)" />
        </h1>
      </div>
    </div>
  );
}
