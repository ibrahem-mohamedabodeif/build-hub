"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Villa 01",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod architecto at adipisci aspernatur minus officia asperiores libero cumque. Soluta esse fuga consectetur voluptates, minima numquam nostrum a laudantium est voluptate laboriosam quas odit in sint iure voluptatibus non! Doloribus, architecto. Fugiat repellat error deleniti minus beatae atque nisi tempore explicabo.",
    image: "/serc1.jpg",
  },
  {
    id: 2,
    name: "Villa 02",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod architecto at adipisci aspernatur minus officia asperiores libero cumque. Soluta esse fuga consectetur voluptates, minima numquam nostrum a laudantium est voluptate laboriosam quas odit in sint iure voluptatibus non! Doloribus, architecto. Fugiat repellat error deleniti minus beatae atque nisi tempore explicabo.",
    image: "/serv1.jpg",
  },
  {
    id: 3,
    name: "Villa 03",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod architecto at adipisci aspernatur minus officia asperiores libero cumque. Soluta esse fuga consectetur voluptates, minima numquam nostrum a laudantium est voluptate laboriosam quas odit in sint iure voluptatibus non! Doloribus, architecto. Fugiat repellat error deleniti minus beatae atque nisi tempore explicabo.",
    image: "/serv7.jpg",
  },
  {
    id: 4,
    name: "Villa 04",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod architecto at adipisci aspernatur minus officia asperiores libero cumque. Soluta esse fuga consectetur voluptates, minima numquam nostrum a laudantium est voluptate laboriosam quas odit in sint iure voluptatibus non! Doloribus, architecto. Fugiat repellat error deleniti minus beatae atque nisi tempore explicabo.",
    image: "/serv8.jpg",
  },
  {
    id: 5,
    name: "Villa 05",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod architecto at adipisci aspernatur minus officia asperiores libero cumque. Soluta esse fuga consectetur voluptates, minima numquam nostrum a laudantium est voluptate laboriosam quas odit in sint iure voluptatibus non! Doloribus, architecto. Fugiat repellat error deleniti minus beatae atque nisi tempore explicabo.",
    image: "/serv9.jpg",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const handleNextProject = () => {
    setIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const currentProject = projects[index];

  return (
    <div className="pt-10 md:pt-20 px-4 md:px-20 bg-[#EFF6E0]" id="projects">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#01161E] text-center tracking-widest">
        Projects
      </h1>
      <div className="relative bg-[#AEC3B0] rounded mt-10 md:mt-20 flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between gap-6">
        <span className="font-bold text-lg md:text-2xl text-[#124559] absolute p-2 rounded-br-xl top-2 md:top-0 left-2 md:left-0 text-center border border-transparent bg-white w-36 md:w-60">
          Project <span className="text-[#598392]">{index + 1}</span> /{" "}
          {projects.length}
        </span>
        <div className="lg:ml-10 mt-20 flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-10">
          <span className="text-5xl md:text-7xl font-bold text-[#124559]">
            0{index + 1}
          </span>
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-extrabold text-[#124559] text-center lg:text-left">
              {currentProject.name}
            </h1>
            <p className="text-base md:text-xl leading-normal text-[#01161E] text-center lg:text-left max-w-xs md:max-w-md">
              {currentProject.desc}
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src={currentProject.image}
            alt={currentProject.name}
            width={500}
            height={500}
            className="rounded-l-2xl"
          />
        </div>
        <button
          onClick={handleNextProject}
          className="text-2xl md:text-3xl border rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-transparent bg-[#EFF6E0] absolute bottom-4 right-4 p-3 md:p-4"
          aria-label="Next project"
        >
          <FaArrowRight className="text-[#124559]" />
        </button>
      </div>
    </div>
  );
}
