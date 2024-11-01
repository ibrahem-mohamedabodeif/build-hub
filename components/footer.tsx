import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-[#124559] flex gap-5 justify-center items-center p-4 text-[#EFF6E0]">
      <div className="flex items-center gap-2 lg:before:absolute lg:before:w-1/3 lg:before:h-0.5 lg:before:bg-[#EFF6E0] lg:before:left-10">
        <MdCopyright size={20} />
        <span className="font-bold tracking-wider text-sm">
          Copyright 2024{" "}
        </span>
      </div>
      <div className="flex items-center gap-5 text-lg lg:text-2xl lg:after:absolute lg:after:w-1/3 lg:after:h-0.5 lg:after:bg-[#EFF6E0] lg:after:right-10">
        <FaInstagram />
        <CiTwitter />
        <CiFacebook />
      </div>
    </div>
  );
}
