"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am : Hamza Atif
            <br className="hidden lg:inline-block" />

          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700"></div>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[15rem]"
            alt="hero"
            width={100}
            height={100}
            src={"data:image/jpeg;base64,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"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
