import Image, { StaticImageData } from 'next/image'
import React from 'react'




interface buttonPrimaryProps{
    text: string,
    icon: StaticImageData,
}

const PrimaryButton = ({text, icon} : buttonPrimaryProps) => {
  return (
    <button className='flex flex-row justify-between items-center w-full px-[20px] pt-4 pb-4  border border-black mx-[50px] cursor-pointer hover:bg-black hover:text-white'>
        <div className='text-lg '>{text}</div>
        <div> <Image src={icon} alt="button-icon" /> </div>
       
    </button>
  )
}

export default PrimaryButton
