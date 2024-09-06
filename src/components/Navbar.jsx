import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="relative">
        <nav className="flex ml-10">
          <figure className="mt-10">
            <img src="/home/logo.svg" alt="Logo" />
          </figure>

          <ul className="flex gap-5 ml-auto mt-10 bg-[#465369] bg-opacity-70 items-center p-6 justify-end ">
            <li className="cursor-pointer">
              <Link to="/" className="flex items-center gap-2">
                <span className="font-bold">00</span> HOME
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/destination" className="flex items-center gap-2">
                <span className="font-bold">01</span> DESTINATION
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/crew" className="flex items-center gap-2">
                <span className="font-bold">02</span> CREW
              </Link>
            </li>
            <li className="pr-10 cursor-pointer">
              <Link to="/technology" className="flex items-center gap-2">
                <span className="font-bold">03</span> TECHNOLOGY
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
