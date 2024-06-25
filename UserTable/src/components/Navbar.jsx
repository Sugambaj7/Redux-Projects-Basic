import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center mt-2 w-full">
      <h3 className="text-3xl">Welcome to Redux Toolkit demonstration</h3>
      <p className="text-xl text-red-400 mt-2">Admin Table</p>
      <p className="mt-2">One destination for complete web development</p>
      <nav className="bg-blue-400 mt-2 w-[70%]">
        <ul className="flex">
          <li className="px-8 py-4 text-white flex-1">Home</li>
          <li className="px-8 py-4 text-white flex-1">About</li>
          <li className="px-8 py-4 text-white flex-1">Projects</li>
          <li className="px-8 py-4 text-white flex-1">Code</li>
          <li className="px-8 py-4 text-white flex-1">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
