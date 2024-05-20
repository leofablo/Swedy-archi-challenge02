import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface smallGaleryProps{
    image: StaticImageData,
    description: string,
}

const GalerySmall = ({image, description} : smallGaleryProps) => {
  return (
    <div className='flex flex-col item-start px-[50px] pt-[50px] md:flex-row md:pt-[80px] pb-10'>
        <Image className='w-[620px] h-[620px] mb-[40px] md:w-[500px] ' src={image} alt='large galery' />
        <p className='md:ml-[20px] md:w-[300px] md:mt-0 text-[28px]'>{description}</p>
      
    </div>
  )
}

export default GalerySmall
