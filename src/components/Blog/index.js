import React from "react";
import data from "./data.js";

function Blog() {
  return (
    <section className="max-w-screen-lg px-5 mx-auto text-center">
      <div>
        <div className="mt-16">
          <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-light">Our Blog</h1>
          <p className="text-lg text-slate-600 mt-4">
            We write about building startups and thoughts going on our mind.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16 flex flex-col items-start justify-center gap-y-16">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="grid md:grid-cols-2 grid-cols-1 grid-flow-row gap-5 md:gap-10 cursor-pointer w-full">
                <div className="rounded-md overflow-hidden w-full">
                  <img src={item.thumbnail} alt={item.title} className="object-cover object-center w-full h-full" />
                </div>
                <div className="text-left flex flex-col items-start justify-center">
                  <span className="text-sm text-blue-400 font-medium uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-3xl font-semibold leading-snug tracking-tight mt-1">{item.title}</h3>
                  <div className="mt-3 text-gray-400">
                    <span>{item.author}</span>
                    <span> • </span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
