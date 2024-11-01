import Image from "next/image";

export default function Services() {
  return (
    <div className="py-16 bg-[#AEC3B0]" id="services">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#01161E] text-center tracking-widest">
        Services
      </h1>
      <div
        aria-label="container"
        className="flex gap-10 items-center justify-center mt-20"
      >
        <div aria-label="col-1">
          <div className="border rounded-[30px] p-5 mb-5 bg-[#01161E] max-w-xs lg:max-w-2xl">
            <p className="text-xl lg:text-4xl font-bold leading-relaxed tracking-wider text-center text-[#EFF6E0]">
              Crafting Modern
              <span className="text-[#124559]"> Architecture</span> <br />
              For A Better <span className="text-[#124559]">Future</span> And
              <br /> Taking Your <span className="text-[#124559]">Ideas</span>
              To The Next Level
              <br /> And <span className="text-[#124559]">Shining</span> Them
              Into The <span className="text-[#124559]">Light</span>.
            </p>
          </div>
          <div className="flex justify-between gap-5">
            <div className="w-72 h-80 relative flex-1 hidden lg:block">
              <Image
                src={"/serv8.jpg"}
                alt="serv"
                fill
                className="rounded-[30px] object-cover"
              />
            </div>
            <div className="border  rounded-[30px] p-5 pt-10 w-full lg:w-1/2 bg-[#01161E]">
              <p className="text-xl lg:text-3xl font-bold leading-relaxed tracking-wider text-center text-[#EFF6E0]">
                Redesigning <br />
                <span className="text-[#124559]">
                  Spaces <br />
                </span>
                And Providing{" "}
                <span className="text-[#124559]">
                  new <br />
                  Solutions
                </span>{" "}
                For <br />
                Space Utilization
              </p>
            </div>
          </div>
        </div>
        <div aria-label="col-2" className="hidden md:block">
          <div className="w-96 h-72 overflow-hidden relative mb-5">
            <Image
              src={"/serc1.jpg"}
              alt="serv2"
              fill
              className="rounded-[30px] object-cover"
            />
          </div>
          <div className="w-96 h-80 overflow-hidden relative">
            <Image
              src={"/serv1.jpg"}
              alt="serv3"
              fill
              className="rounded-[30px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
