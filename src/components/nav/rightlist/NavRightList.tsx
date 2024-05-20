import HamburgerMenu from "@/components/hamburgerMenu/HamburgerMenu";
import Link from "next/link";
import React from "react";

interface rightListProps {
  title: string;
  url: string;
  title2: string;
  url2: string;
}

const NavRightList = ({ title, url, url2, title2 }: rightListProps) => {
  return (
    <nav className="text-sm gap-[40px] md:flex flex-row justify-center">
      <div className="md:hover:underline underline-offset-8 text-gray-700 hover:text-black">
        <Link href={url}>{title}</Link>
        
       
      </div>
    </nav>
  );
};

export default NavRightList;
