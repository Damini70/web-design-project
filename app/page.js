"use client";
import Image from "next/image";
import Navbar from "./Navbar.js";
import Dashboard from "./Dashboard.js";
import Services from "./Services.js";
import Innovation from "./Innovation.js";
import Specialist from "./Specialist.js";
import Review from "./Review.js";
import Subscribe from "./Subscribe.js";
import Footer from "./Footer.js";

export default function Home() {
  return (
    <div className="text-center">
      <div className="bg-[#F8FDFF]">
        <div className="main p-3 px-[5rem]">
          {" "}
          <Navbar />
          <Dashboard />
        </div>
        <Services />
      </div>
      <Innovation />
      <Specialist />
      <Review />
      <Subscribe />
      <div className="px-[5rem]">
        <Navbar />
      </div>
      <Footer />
    </div>
  );
}
