"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const HamburgerMenu = () => {
  const [isMenuOpen, setMenu] = useState(false);

  return (
    <>
      <div className="fixed w-full justify-between px-[630px] ">
        <button
          onClick={() => setMenu(!isMenuOpen)}
          className="md:hidden text-3xl p-2 focus:outline-none justify-between"
        >
          <FiMenu />
        </button>

        {isMenuOpen && (
          <div className="bg-[#F4E2D8] w-full h-screen flex flex-col md:hidden fixed z-50 top-0 left-0">
            <div className="w-full bg-[#F4E2D8] flex justify-end pr-5 pt-5">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="w-[42px] h-[42px] mt-0 mb-8 text-3xl cursor-pointer top-0 right-0"
              />
            </div>
            <div className="flex flex-col w-full h-full bg-[#F4E2D8] items-center gap-10 pt-5 text-[32px]">
              <Link
                className="font-bold"
                href={"/aboutus"}
                onClick={() => setMenu(false)}
              >
                About Us
              </Link>
              <Link
                className="font-bold"
                href={"/projects"}
                onClick={() => setMenu(false)}
              >
                Projects
              </Link>
              <Link
                className="font-bold"
                href={"/services"}
                onClick={() => setMenu(false)}
              >
                Services
              </Link>
              <Link
                className="font-bold"
                href={"teams"}
                onClick={() => setMenu(false)}
              >
                Team
              </Link>
              <Link
                className="font-bold"
                href={"contact"}
                onClick={() => setMenu(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HamburgerMenu;
