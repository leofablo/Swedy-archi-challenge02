import React from "react";
import NavBar from "../nav/nav";
import Image from "next/image";
import PhotoSection from "../photos-section/photo-large/layout";
import Allure from "@/Images/Allure-scientific.webp";
import Logo from "../../../public/Logo.svg";

export const navListName = [
  { navListName: "About us", url: "/aboutus" },
  { navListName: "Projects", url: "/projects" },
  { navListName: "Services", url: "/services" },
  { navListName: "Teams", url: "/teams" },
  { navListName: "Contact", url: "/contact" },
];

const HeroSection = () => {
  return (
    <>
      <NavBar leftside={Logo} rightside={navListName} />
      <div className=" bg-[#F4E2D8] h-full pb-12 w-screen md:w-full ">
        <div className="flex-col flex md:flex-row w-full px-[50px] md:items-end pb-[50px] pt-[50px] gap-10 lg:gap-40">
          <div className="text-[80px] md:text-[80px] text-wrap mt-[50px] pt-10 leading-tight max-w-[960px] font-bold">
            {" "}
            Architecture & design <br className="md:hidden"/> bureau based in Canada
          </div>
          <div className="w-[200px] md:pt-[25]">
            <p className="md:text-[12px]"> — Since 1999</p>
            <ul className="text-[42px] ">
              <li>Architecture.</li>
              <li>Design.</li>
              <li>Planning.</li>
            </ul>
          </div>
        </div>

        <div className="w-screen px-[50px]">
          <PhotoSection image={Allure} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
