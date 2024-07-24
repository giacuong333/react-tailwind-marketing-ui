import React from "react";
import Button from "../Button";

function Build() {
  return (
    <section className="max-w-5xl w-full px-4 mt-20 mx-auto text-center">
      <div className="bg-black rounded-lg p-8 md:p-20 w-full">
        <h2 className="text-white font-semibold text-4xl md:text-6xl tracking-tight">Build faster websites.</h2>
        <p className="text-lg md:text-xl text-slate-400 my-5">
          Pull content from anywhere and serve it fast with Astro's next-gen island architecture.
        </p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
}

export default Build;
