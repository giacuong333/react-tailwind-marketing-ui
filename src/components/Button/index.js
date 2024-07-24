import React from "react";

function Button({ children, dark, dim, border, widthFull }) {
  return (
    <button
      className={`inline-block ${
        widthFull ? "w-full" : ""
      } px-4 py-2.5 rounded border-2 border-solid text-center duration-300 ${
        dark ? "text-white bg-black hover:bg-gray-800" : "text-black bg-white"
      } ${dim ? "bg-gray-100 hover:bg-gray-200" : ""} ${
        border ? "border-black hover:bg-gray-100" : "border-transparent"
      }`}>
      {children}
    </button>
  );
}

export default Button;
