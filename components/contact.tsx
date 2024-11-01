import Image from "next/image";

export default function Contact() {
  return (
    <div
      id="contact"
      className="py-10 md:py-20 mt-10 md:mt-20 border-t border-[#01161E] mx-4 md:mx-20 flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-40"
    >
      {/* Contact Form Section */}
      <div className="w-full max-w-md lg:max-w-lg">
        <h1 className="text-2xl md:text-3xl text-[#01161E] font-semibold tracking-widest pb-6 md:pb-10 text-center lg:text-left">
          Contact
        </h1>
        <div className="flex flex-col gap-3">
          <input
            placeholder="Your Name"
            className="border border-transparent placeholder:text-[#EFF6E0] placeholder:text-lg bg-[#AEC3B0] rounded-3xl h-10 w-full px-4"
          />
          <input
            placeholder="Phone Number"
            className="border border-transparent placeholder:text-[#EFF6E0] placeholder:text-lg bg-[#AEC3B0] rounded-3xl h-10 w-full px-4"
          />
          <input
            placeholder="E-mail"
            className="border border-transparent placeholder:text-[#EFF6E0] placeholder:text-lg bg-[#AEC3B0] rounded-3xl h-10 w-full px-4"
          />
          <textarea
            placeholder="Message"
            className="border border-transparent placeholder:text-[#EFF6E0] placeholder:text-lg bg-[#AEC3B0] rounded-3xl h-32 md:h-40 w-full px-4 pt-4"
          />
          <button className="border bg-[#AEC3B0] py-3 px-6 rounded-3xl text-lg md:text-xl font-semibold text-[#01161E] mt-4">
            Send Message
          </button>
        </div>
      </div>

      {/* Contact Information and Logo Section */}
      <div className="text-center lg:mr-40 mt-8 lg:mt-0">
        <div className="relative flex justify-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={400}
            height={400}
            className="md:w-96 md:h-80"
          />
          <div className="absolute w-52 md:w-56 bg-[#01161E] -z-10 h-52 md:h-56 rounded-full top-5 md:top-10 left-22 md:left-20"></div>
        </div>
        <span className="text-base md:text-lg text-[#124559] font-bold tracking-widest mt-4 block">
          hr@build-hub.com
        </span>
      </div>
    </div>
  );
}
