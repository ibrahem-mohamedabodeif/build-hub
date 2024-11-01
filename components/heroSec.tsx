import Image from "next/image";

export default function HeroSec() {
  return (
    <div>
      <Image
        src={"/serc1.jpg"}
        alt="hero"
        fill
        className="object-cover -z-30 brightness-75"
      />
      <div className="w-full h-full opacity-25 -z-20 absolute top-0 left-0 bg-[#01161E]"></div>
      <div>
        <h1 className="text-4xl lg:text-7xl lg:leading-normal font-extrabold text-[#EFF6E0] text-center leading-snug pt-14 tracking-wider">
          Crafting Modern
          <br /> <span className="text-[#124559]">Architecture</span> For A
          Better
          <br /> Future
        </h1>
      </div>
    </div>
  );
}
