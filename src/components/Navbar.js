import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex  gap-14  text-[#D7D6D6] mr-10 text-3xl font-judson font-bold absolute  right-16 p-6  ">
      <div className="flex items-center justify-between p-4">
        <button onClick={toggleMenu} className="text-2xl md:hidden">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`flex flex-col md:flex-row md:static md:items-center ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <Link to="/" className="py-2 px-4 md:px-8 hover:bg-gray-700 transition-all duration-300  hover:rounded-xl hover:text-blue-700">
          Home
        </Link>
        <Link to="/menu" className="py-2 px-4 md:px-8 hover:bg-gray-700 transition-all duration-300  hover:rounded-xl hover:text-blue-700">
          Menu
        </Link>
        <Link to="/about" className="py-2 px-4 md:px-8 hover:bg-gray-700 transition-all duration-300  hover:rounded-xl hover:text-blue-700">
          About me
        </Link>
        <Link to="/login" className="py-2 px-4 md:px-8 hover:bg-gray-700 transition-all duration-300  hover:rounded-xl hover:text-blue-700">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
