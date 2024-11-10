import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
              <Image
          alt="gallery"
          className="object-cover object-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_VYje7rKOIkd0FAymwCuK7hTfB_Zj6X3gA&s"
          fill
          priority 
        />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Editable dynamic resume builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Resume Builder
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    it is an Editable dynamic resume builder which can be edited after being submitted and it is very helpful for small stores who want to build their resume
                  </p>
                  <Link
                    target="_blank"
                    href={"https://miletsone-4.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer ">
              <div className="flex relative">
                <Image
                
                width={1000}
                height={1000}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={"data:image/png;base64,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"}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  Panacloud
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Panacloud website
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is the project which I have created for those who is interested in my skills
                    and want to see my learning by sir Ameen alam and Sir zia khan,
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/HamzaAtif/Panacloud-website-responsive"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
