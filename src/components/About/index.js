import React from "react";
import About1 from "../../assets/images/about1.jpg";
import About2 from "../../assets/images/about2.jpg";
import About3 from "../../assets/images/about3.jpg";

function About() {
  return (
    <section className="max-w-screen-lg px-5 mx-auto text-center">
      <div className="mt-16">
        <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-light">About</h1>
        <p className="text-lg text-slate-600 mt-4">We are a small passionate team.</p>
      </div>
      <div className="max-w-4xl mt-16 mx-auto">
        <div className=" mb-12 text-left">
          <h3 className="font-bold text-3xl text-gray-800">Empowering the world with Astro.</h3>
          <p className="text-lg leading-relaxed text-gray-500 mt-4">
            We're a multi-cultural team from around the world! We come from diverse backgrounds, bringing different
            personalities, experiences and skills to the job. This is what makes our team so special.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-flow-row gap-10">
          <div className="group">
            <div className="w-full aspect-square group-hover:shadow-xl group-hover:-translate-y-1 duration-300">
              <img src={About1} alt="About1" className="w-full h-full object-cover object-center rounded-md" />
            </div>
            <div className="mt-4 text-center">
              <h5 className="text-lg text-gray-800">Janette Lynch</h5>
              <p className="text-sm text-slate-500">Senior Director</p>
            </div>
          </div>
          <div className="group">
            <div className="w-full aspect-square group-hover:shadow-xl group-hover:-translate-y-1 duration-300">
              <img src={About2} alt="About1" className="w-full h-full object-cover object-center rounded-md" />
            </div>
            <div className="mt-4 text-center">
              <h5 className="text-lg text-gray-800">Marcell Ziemann</h5>
              <p className="text-sm text-slate-500">Principal Strategist</p>
            </div>
          </div>
          <div className="group">
            <div className="w-full aspect-square group-hover:shadow-xl group-hover:-translate-y-1 duration-300">
              <img src={About3} alt="About1" className="w-full h-full object-cover object-center rounded-md" />
            </div>
            <div className="mt-4 text-center">
              <h5 className="text-lg text-gray-800">Robert Palmer</h5>
              <p className="text-sm text-slate-500">Marketing Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
