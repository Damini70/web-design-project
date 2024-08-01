"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  });
  //   console.log(windowWidth);

  return (
    <div className="flex justify-between mt-4">
      <div>
        <p className="text-2xl font-bold text-[#0073FF] ">
          Medi<span className="text-orange-500">Care+</span>
        </p>
      </div>
      <div className="hidden md:block">
        <ul className="flex justify-evenly text-[#0073FF] items-center font-semibold">
          <li className="md:mx-3">
            {" "}
            <Link href="">Home</Link>
          </li>
          <li className="md:mx-3">
            {" "}
            <Link href="">About</Link>
          </li>
          <li className="md:mx-3">
            {" "}
            <Link href="">Services</Link>
          </li>
          <li className="md:mx-3">
            {" "}
            <Link href="">News</Link>
          </li>
          <li className="md:mx-3">
            {" "}
            <button className="bg-[#007FF4] rounded-3xl text-white p-1 md:px-6">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
