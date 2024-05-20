import React from 'react'
import Image, { StaticImageData } from 'next/image'


interface photoSectionProps {
    image: StaticImageData
}

const PhotoSection = ({image} : photoSectionProps) => {
  return (
    <Image 
    src={image} 
    alt='photo' 
    className='w-full h-[610px]'
     />
  )
}

export default PhotoSection
