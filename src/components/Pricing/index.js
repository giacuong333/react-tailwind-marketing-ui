import React from "react";
import { LuCheckCircle } from "react-icons/lu";
import Button from "../Button";

function Pricing() {
  return (
    <section className="max-w-screen-lg px-5 mx-auto text-center">
      <div className="mt-16">
        <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-light">Pricing</h1>
        <p className="text-lg text-slate-600 mt-4">Simple & Predictable pricing. No Surprises.</p>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 grid-flow-row gap-10 mt-12">
        <div className="py-5 px-6 rounded-md border-2 border-[#D8DEE9] border-opacity-50">
          <div>
            <p className="text-lg font-medium text-gray-400">Personal</p>
            <h3 className="text-4xl mt-3 font-bold text-black">Free</h3>
          </div>
          <ul className="flex flex-col items-start justify-center mt-8 gap-y-4 text-start">
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">Lifetime free</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">Up to 3 users</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">Unlimited Pages</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">Astro Sub domain</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">Basic Integrations</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">Community Support</span>
            </li>
          </ul>
          <div className="mt-8">
            <Button border widthFull>
              Get Started
            </Button>
          </div>
        </div>
        <div className="py-5 px-6 rounded-md border-2 border-[#D8DEE9] border-opacity-50">
          <div>
            <p className="text-lg font-medium text-gray-400">Startup</p>
            <h3 className="text-4xl mt-3 font-bold text-black">$19</h3>
          </div>
          <ul className="flex flex-col items-start justify-center mt-8 gap-y-4 text-start">
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">All Free Features</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">Up to 20 users</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">20 Custom domains</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">Unlimited Collaborators</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">Advanced Integrations</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">Priority Support</span>
            </li>
          </ul>
          <div className="mt-8">
            <Button dark widthFull>
              Get Started
            </Button>
          </div>
        </div>
        <div className="py-5 px-6 rounded-md border-2 border-[#D8DEE9] border-opacity-50">
          <div>
            <p className="text-lg font-medium text-gray-400">Enterprise</p>
            <h3 className="text-4xl mt-3 font-bold text-black">Custom</h3>
          </div>
          <ul className="flex flex-col items-start justify-center mt-8 gap-y-4 text-start">
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">All Pro Features</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">Unlimited Custom domains</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">99.99% Uptime SLA</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">SAML & SSO Integration</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">Dedicated Account Manager</span>
            </li>
            <li className="text-gray-800 flex items-center gap-2">
              <LuCheckCircle size={22} />
              <span className="flex-1 text-start">24/7 Phone Support</span>
            </li>
          </ul>
          <div className="mt-8">
            <Button border widthFull>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
