import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
import Link from "next/link";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:neeleshchandwani@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 md:top-[9%] uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-1xl">{pageInfo?.phoneNumber}</p>
          </div>

          <Link href={`mailto:${pageInfo?.email}`}>
            <div className="flex items-center space-x-5 justify-center cursor-pointer">
              <EnvelopeIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
              <p className="text-1xl">{pageInfo?.email}</p>
            </div>
          </Link>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-1xl">{pageInfo?.address}</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-[70%] md:w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>

          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 md:py-4 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
