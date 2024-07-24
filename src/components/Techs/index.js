import React from "react";
import { FaReact } from "react-icons/fa6";
import { RiSvelteFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAstro, SiAlpinedotjs, SiVercel } from "react-icons/si";

function Tech() {
  return (
    <section className="max-w-screen-xl w-full px-16 mx-auto text-center mt-24 md:px-0">
      <p className="text-slate-500">Works with your technologies</p>
      <div className="flex items-cetner justify-center md:gap-20 gap-8 w-full text-center mx-auto mt-10">
        <FaReact size={54} className="inline-block" />
        <RiSvelteFill size={54} className="inline-block" />
        <SiAstro size={54} className="inline-block" />
        <RiTailwindCssFill size={54} className="inline-block" />
        <SiAlpinedotjs size={54} className="inline-block" />
        <SiVercel size={54} className="inline-block" />
      </div>
    </section>
  );
}

export default Tech;
