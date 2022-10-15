import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://qph.cf2.quoracdn.net/main-thumb-85506114-200-stzbvssyyajbpliakjspulndkxerlitd.jpeg"
        className="mb-15 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          debitis in? Inventore quia veniam quam expedita iusto enim veritatis
          aliquam perferendis possimus quaerat mollitia corporis blanditiis esse
          tempore ad rem necessitatibus atque, corrupti aspernatur vitae
          obcaecati! Asperiores sed similique eaque odit, soluta sapiente!
          Pariatur repudiandae minima non, debitis est ipsum iure. Iure aut
          nostrum eligendi repellendus soluta earum cumque atque, vero labore
          inventore ex non, est eum laudantium accusantium deleniti molestiae
          temporibus. Expedita quo natus quos assumenda veritatis aspernatur
          labore?
        </p>
      </div>
    </motion.div>
  );
}
