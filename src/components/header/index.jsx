import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="">
      <ul
        className=" flex space-x-9 
       ml-11 h-14"
      >
        <li>Call:+01 1234567890</li>
        <li>Email:demo@gmail.com</li>
        <li>Location</li>
      </ul>
      <nav className="bg-sky-500 pl-5">
        <ul className=" space-x-5 flex text-center h-full">
          <img
            src="../images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className=" bg-slate-50 h-full w-16 p-3"
          />
          <Link
            className=" cursor-pointer text-cyan-50 hover:bg-sky-800 text-center m-5"
            href="/home"
          >
            HOME
          </Link>
          <Link
            className=" cursor-pointer text-cyan-50 hover:bg-sky-800 text-center m-5"
            href="/about"
          >
            ABOUT US
          </Link>
          <Link
            className=" cursor-pointer hover:bg-sky-700 text-cyan-50  m-5"
            href="/treatment"
          >
            TREATMENT
          </Link>
          <Link
            className=" cursor-pointer hover:bg-sky-700 text-cyan-50 m-5 "
            href="/doctors"
          >
            DOCTORS
          </Link>
          <Link
            className=" cursor-pointer hover:bg-sky-700 text-cyan-50 m-5 "
            href="/testimonial"
          >
            TESTIMONIAL
          </Link>
          <Link
            className=" cursor-pointer hover:bg-sky-700 text-cyan-50 m-5 "
            href="/contact"
          >
            CONTACT US
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
