import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <Link href="/">
            <h1 className="text-2xl lg:text-3xl font-space">Harris Perdis</h1>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="pl-5 text-2xl lg:text-3xl">
            <Link
              href="https://www.linkedin.com/in/harris-perdis-912308310"
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
          </div>
          <div className="pl-5 text-2xl lg:text-3xl">
            <Link href="https://github.com/HarrisAsync" target="_blank">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
      <hr className="h-px border-0" style={{ backgroundColor: "#1944D0" }}></hr>
    </div>
  );
};

export default NavBar;
