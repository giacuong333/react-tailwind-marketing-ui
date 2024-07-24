import React from "react";

function Footer() {
  return (
    <footer className="text-center mx-auto my-20 text-slate-500">
      <p className=" text-sm">Copyright © 2024 Astroship. All rights reserved.</p>
      <span className="text-xs mt-1">
        Made by{" "}
        <a href="/" className="hover:underline cursor-pointer">
          Web3Templates
        </a>
      </span>
    </footer>
  );
}

export default Footer;
