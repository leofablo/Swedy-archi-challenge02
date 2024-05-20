import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'

interface galeryLargeProps{
    image: StaticImageData,
    description: React.ReactNode,
}

const GaleryLarge = ({image, description}: galeryLargeProps) => {


  return (
    <div className='flex flex-col item-start px-[50px] pt-[50px] md:flex-row md:pt-[80px] w-full justify-end gap-4'>
        <Image className='w-[620px] h-[620px] mb-[40px] md:w-[500px]' src={image} alt='large galery' />
        <div className='flex flex-col w-full md:w-[500px]'>
          <div className='md:ml-[20px] md:mt-0 text-[28px] text-wrap md:text-[18px]'> 
          {description}</div>
        

        </div>
              
    </div>
  )
}

export default GaleryLarge
