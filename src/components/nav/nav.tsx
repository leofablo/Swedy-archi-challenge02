import React, { useState } from 'react'
import NavRightList from './rightlist/NavRightList';
import Image, { StaticImageData } from 'next/image';
import Logo from "../../../public/Logo.svg"
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';


interface NavbarProps {
    leftside: StaticImageData;
    rightside: {navListName: string; url: string}[];

}


const NavBar = ({leftside, rightside} : NavbarProps) => {

  
  
  return (
    
    <>
    <nav className='fixed w-full h-[80px] text-lg text-inherit flex flex-row justify-between bg-[#F4E2D8] items-center md:justify-between md:h-[80px] z-10 top-0'>
        <div className='ml-[50px] justify-center'>
            <Image src={leftside} alt='logo' />
        </div>
        <div className='gap-[40px] text-sm md:flex flex-row justify-center items-center mr-[224px] md:mr-[50px] hidden md:justify-between '>
             {rightside.map((item) => (
        <NavRightList title={item.navListName} url={item.url} title2={item.navListName} url2={item.url} key={item.navListName} />
      ))}
        </div>
      
          <HamburgerMenu />

  
   
        
    </nav>
    
    
    </>
  )
}

export default NavBar
