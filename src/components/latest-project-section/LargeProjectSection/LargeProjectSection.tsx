import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface largeProjectProps{
    image: StaticImageData,
    description: string,
    title: string,
    category: string
}

const LargeProjectSection = ({image, title, category, description} : largeProjectProps) => {
  return (
    <div className='flex flex-col px-[50px] gap-4 pb-10'>
        <div className='flex flex-col gap-4 md:flex-row'>
            <Image src={image} alt="image" width={600} height={1000}/>
            <div className=' border-b border-black md:border-b-5 md:border-black flex flex-row justify-between items-center'>
                <h1 className='mb-2 text-[28px]'>{title}</h1>
                <p className='text-[12px]'>{category}</p>
            </div>
        </div>
        <div>
            <p className='text-wrap w-full text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default LargeProjectSection
