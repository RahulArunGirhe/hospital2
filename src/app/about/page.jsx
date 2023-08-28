import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div className=" h-full bg-white content-center px-20 md:flex">
      <Image
        src="/images/about-img.jpg"
        alt="ABOUT"
        width={500}
        height={500}
        className=" justify-items-center mt-5 h-52 w-52"
      />
      <div className="">
        <ul className=" flex space-x-2 text-4xl mt-5">
          <h1 className=" font-bold">About</h1>
          <h1 className=" font-bold text-green-500 font">Hospital</h1>
        </ul>
        <p className=" mt-5">
          has a more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors
        </p>
        <button className=" bg-black text-white p-2 my-7">Read More</button>
      </div>
    </div>
  );
};

export default about;
