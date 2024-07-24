import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Tippy from "@tippyjs/react";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <header className="max-w-[1280px] w-full px-4 mx-auto my-5">
      {/* Medium and large screen */}
      <div className="md:flex hidden items-center justify-between">
        <Link to={"/"} className="text-lg cursor-pointer">
          <span className="font-bold text-slate-800">Astro</span>
          <span className="text-slate-500">ship</span>
        </Link>

        <ul className="flex items-center gap-3">
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer duration-300">
            <Tippy
              interactive
              trigger="click"
              placement="bottom-start"
              content={
                <ul className="bg-white rounded-md lg:shadow lg:border lg:py-2 px-3">
                  <li className="py-1 text-gray-600  hover:text-gray-900">
                    <Link to={""}>Action</Link>
                  </li>
                  <li className="py-1 text-gray-600  hover:text-gray-900">
                    <Link to={""}>Another action</Link>
                  </li>
                  <li className="py-1 text-gray-600  hover:text-gray-900">
                    <Link to={""}>Dropdown Submenu</Link>
                  </li>
                  <li className="py-1 text-gray-600  hover:text-gray-900">
                    <Link to={"/404"}>404 Page</Link>
                  </li>
                </ul>
              }>
              <div className="inline-flex py-2 md:px-3 items-center">
                <span className="mr-1">Features</span>
                <IoIosArrowDown size={14} className="mt-0.5" />
              </div>
            </Tippy>
          </li>
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer duration-300">
            <Link to={"/pricing"} className="inline-block py-2 md:px-3">
              Pricing
            </Link>
          </li>
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer duration-300">
            <Link to={"/about"} className="inline-block py-2 md:px-3">
              About
            </Link>
          </li>
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer duration-300">
            <Link to={"/blog"} className="inline-block py-2 md:px-3">
              Blog
            </Link>
          </li>
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer duration-300">
            <Link to={"/contact"} className="inline-block py-2 md:px-3">
              Contact
            </Link>
          </li>
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer duration-300">
            <Link to={"/proversion"} className="inline-block py-2 md:px-3">
              Pro version{" "}
              <span className="uppercase font-semibold bg-indigo-600 text-white text-[10px] rounded-full py-0.5 px-2">
                New
              </span>
            </Link>
          </li>
        </ul>
        <div>
          <Button>Log in</Button>
          <Button dark>Sign up</Button>
        </div>
      </div>

      {/* Small screen */}
      <div className="md:hidden block">
        <h3 className="text-lg cursor-pointer inline-block">
          <span className="font-bold text-slate-800">Astro</span>
          <span className="text-slate-500">ship</span>
        </h3>

        <div onClick={handleNav} className="flex cursor-pointer float-right">
          {nav ? <IoClose size={24} /> : <FaBars size={20} />}
        </div>

        {nav && (
          <div>
            <ul className="block items-center gap-3 mt-2">
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer duration-300">
                <div className="inline-flex py-2 md:px-3 items-center">
                  <span className="mr-1">Features</span>
                  <IoIosArrowDown size={14} className="mt-0.5" />
                </div>
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer duration-300">
                <Link to={"/pricing"} className="inline-block py-2 md:px-3">
                  Pricing
                </Link>
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer duration-300">
                <Link to={"/about"} className="inline-block py-2 md:px-3">
                  About
                </Link>
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer duration-300">
                <Link to={"/blog"} className="inline-block py-2 md:px-3">
                  Blog
                </Link>
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer duration-300">
                <Link to={"/contact"} className="inline-block py-2 md:px-3">
                  Contact
                </Link>
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer duration-300">
                <Link to={"/proversion"} className="inline-block py-2 md:px-3">
                  Pro version{" "}
                  <span className="uppercase font-semibold bg-indigo-600 text-white text-[10px] rounded-full py-0.5 px-2">
                    New
                  </span>
                </Link>
              </li>
            </ul>
            <div className="flex items-center justify-between gap-4 mt-4">
              <Button dim widthFull>
                Log in
              </Button>
              <Button dark widthFull>
                Sign up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
