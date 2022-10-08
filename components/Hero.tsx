import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Names's Neelesh Chandwani",
      "Guy-who-loves-Chai.tsx",
      "<LovesToRead />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center">
      <BackgroundCircles />
      <img
        className="relative rounded-full mx-auto object-cover h-32 w-32"
        src="https://qph.cf2.quoracdn.net/main-thumb-85506114-200-stzbvssyyajbpliakjspulndkxerlitd.jpeg"
        alt=""
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Frontend Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div>
          <button className="heroButton">About</button>
          <button className="heroButton">Experience</button>
          <button className="heroButton">Skills</button>
          <button className="heroButton">Projects</button>
        </div>
      </div>
    </div>
  );
}
