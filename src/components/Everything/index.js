import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { BiSolidWindowAlt } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { BiSolidFileFind } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";

const everythingList = [
  {
    icon: <FaBriefcase size={14} className="text-white" />,
    title: "Bring Your Own Framework",
    subtitle: "Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.",
  },
  {
    icon: <BiSolidWindowAlt size={14} className="text-white" />,
    title: "100% Static HTML, No JS",
    subtitle:
      "Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.",
  },
  {
    icon: <FaDatabase size={14} className="text-white" />,
    title: "On-Demand Components",
    subtitle:
      "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.",
  },
  {
    icon: <FaRobot size={14} className="text-white" />,
    title: "Broad Integration",
    subtitle:
      "Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
  },
  {
    icon: <BiSolidFileFind size={14} className="text-white" />,
    title: "SEO Enabled",
    subtitle:
      "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
  },
  {
    icon: <FaUser size={14} className="text-white" />,
    title: "Community",
    subtitle:
      "Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.",
  },
];

function Everything() {
  return (
    <section className="max-w-screen-xl mx-auto px-5 mt-16 md:mt-0">
      <div>
        <h3 className="lg:text-5xl text-4xl font-bold">Everything you need to start a website</h3>
        <p className="text-lg mt-4 text-slate-600">
          Astro comes batteries included. It takes the best parts of state-of-the-art tools and adds its own
          innovations.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-flow-row gap-16 mt-16">
        {everythingList.map((item, index) => {
          return (
            <div key={index} className="flex items-start gap-4">
              <div className="p-2 bg-black rounded-full">{item.icon}</div>
              <div>
                <h5 className="text-lg font-semibold">{item.title}</h5>
                <p className="mt-2 text-slate-500 leading-relaxed">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Everything;
