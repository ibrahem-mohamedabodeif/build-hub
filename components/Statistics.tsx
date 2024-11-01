export default function Statistics() {
  return (
    <div className="mt-28 flex flex-col md:flex-row justify-evenly py-10 bg-[#EFF6E0]">
      <div className="flex flex-col items-center text-2xl tracking-wide font-bold leading-relaxed">
        <h3 className="text-[#01161E]">Clients</h3>
        <span className="text-[#598392]">+100</span>
      </div>
      <div className="flex flex-col items-center text-2xl tracking-wide font-bold leading-relaxed">
        <h3 className="text-[#01161E]">Projects</h3>
        <span className="text-[#598392]">+100</span>
      </div>
      <div className="flex flex-col items-center text-2xl tracking-wide font-bold leading-relaxed">
        <h3 className="text-[#01161E]">Team Members</h3>
        <span className="text-[#598392]">+20</span>
      </div>
    </div>
  );
}
