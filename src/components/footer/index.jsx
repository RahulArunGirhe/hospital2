import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaLocationArrow,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import { MdCall, MdEmail } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="  bg-black justify-center  w-full h-full text-pink-50 px-7 sm:content-center sm:justify-center">
      <div className=" md:flex lg:flex sm:justify-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          className=" bg-white h-28 w-28 p-5
          "
        />
        <div className="flex h-20">
          <input
            type="text"
            id="name"
            value="Your email"
            className=" bg-black text-white border-b-2 pb-0 w-96 ml-7"
          />
          <button className="border-b-2 pb-0 pr-7">SUBSCRIBE</button>
        </div>
      </div>

      <div className=" lg:flex space-x-5 mx-18 sm:justify-center lg:m-0">
        <div className=" md:flex md:px-10 sm:px-20  md:space-x-60 md:m-7 md:justify-center ">
          <li className="lg:p-5 ">
            <h1 className=" mt-2">Address</h1>
            <AiOutlineArrowDown className="mb-2" />
            <Link href="/">
              {" "}
              <p className=" my-2">
                {" "}
                <MdCall /> Call: +01 1234567890
              </p>
            </Link>
            <Link href="/">
              {" "}
              <p className="my-2">
                {" "}
                <MdEmail /> Email:demo@gmail.com
              </p>
            </Link>
            <Link href="/">
              <p className="my-2">
                {" "}
                <FaLocationArrow />
                Location{" "}
              </p>
            </Link>
            <a className=" my-2 flex space-x-5 text-xl">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
            </a>
          </li>

          <li className=" ">
            <h1 className="mt-2"> Useful Link</h1>
            <AiOutlineArrowDown className="mb-2" />
            <p className="my-2">
              <Link href="/home">Home</Link>
            </p>
            <p className="my-2">
              <Link href="/about">About</Link>
            </p>
            <p className="my-2">
              <Link href="/treatment">Treatment</Link>
            </p>
            <p className="my-2">
              <Link href="/doctors">Doctors</Link>
            </p>
            <p className="my-2">
              <Link href="/testimonial">Testimonial</Link>
            </p>
            <p className="my-2">
              <Link href="/contact">Contact Us</Link>
            </p>
          </li>
        </div>
        <div className="md:flex md:space-x-60 md:m-7 md:justify-center   ">
          <li className="lg:p-5 ">
            <h1 className="mt-2">Latest Posts</h1>
            <AiOutlineArrowDown className="mb-2" />
            <Image src="/images/post1.jpg" alt="logo" width={40} height={40} />
            <p className="my-2">Normal Distribution</p>
            <Image src="/images/post2.jpg" alt="logo" width={40} height={40} />
            <p className="my-2">Normal Distribution</p>
          </li>
          <li className="lg:p-5 ">
            <h1 className="mt-2">News</h1>
            <AiOutlineArrowDown className="mb-2" />
            <Image src="/images/post3.jpg" alt="logo" width={40} height={40} />
            <p className="my-2">Normal Distribution</p>
            <Image src="/images/post4.png" alt="logo" width={40} height={40} />
            <p className="my-2">Normal Distribution</p>
          </li>
        </div>
      </div>
      <p className=" text-center pb-5">
        © 2023 All Rights Reserved By Free Html Templates
      </p>
    </div>
  );
};

export default Footer;
