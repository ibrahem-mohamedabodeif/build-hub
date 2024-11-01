"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { VscListFlat } from "react-icons/vsc";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between -mt-5 mr-10">
      <div className="w-52 lg:w-72 relative">
        <Image
          src={"/logo.png"}
          width={500}
          height={500}
          alt="logo"
          className="object-cover contrast-100 saturate-200"
        />
        <div className="bg-[#01161E] rotate-90 w-32 h-36 lg:w-52 lg:h-40 absolute -z-10 -top-0 left-10 rounded-br-[100px] rounded-tr-[100px]"></div>
      </div>
      <div>
        <div className="flex gap-40 tracking-wider text-white text-lg">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <IoMdClose size={35} className="text-[#01161E] relative" />
            ) : (
              <VscListFlat size={35} className="text-[#01161E] relative" />
            )}
          </button>
          {open && (
            <div className="absolute flex flex-col gap-5 top-28 right-12 bg-[#01161E] p-5 rounded-xl">
              <Link href={"#services"}>Services</Link>
              <Link href={"#projects"}>Projects</Link>
              <Link href={"#contact"}>Contact</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
