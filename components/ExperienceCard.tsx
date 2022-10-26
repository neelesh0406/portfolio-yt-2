import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://qph.cf2.quoracdn.net/main-thumb-85506114-200-stzbvssyyajbpliakjspulndkxerlitd.jpeg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">UI Engineer at Impetus</h4>
        <p className="font-bold text-2xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://seeklogo.com/images/J/java-script-js-logo-ACF4AE5082-seeklogo.com.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full invert"
            src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points Lorem ipsum dolor sit amet consectetur,</li>
          <li>Summary points Lorem ipsum dolor sit amet consectetur,</li>
          <li>Summary points Lorem ipsum dolor sit amet consectetur,</li>
          <li>Summary points Lorem ipsum dolor sit amet consectetur,</li>
        </ul>
      </div>
    </article>
  );
}
