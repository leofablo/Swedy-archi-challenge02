import Image, { StaticImageData } from 'next/image'
import React from 'react'


interface teamProps{
    photo: StaticImageData,
    name: string,
    jobtitle: string,
}

const Teams = ({photo, name, jobtitle}: teamProps) => {
  return (

    <div className='w-full px-[50px]'>
      <div className='grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-4'>
         <div className='w-[300px] md:w-full'>
        <Image src={photo} alt='' className='mb-4 md:w-full'/>
        <div className='flex flex-row justify-between item-center'>
            <div className=''>
            <h3 className='text-[18px] mb-1'>{name}</h3>
        </div>
        <div>
            <p className='text-xs mt-1'>{jobtitle}</p>
        </div>
        </div>
        
      </div>

      <div className='w-[300px] md:w-full'>
        <Image src={photo} alt='' className='mb-4 md:w-full'/>
        <div className='flex flex-row justify-between item-center'>
            <div className=''>
            <h3 className='text-[18px] mb-1'>{name}</h3>
        </div>
        <div>
            <p className='text-xs mt-1'>{jobtitle}</p>
        </div>
        </div>
        
      </div>
       
        
      
    </div>

    </div>
    
  )
}

export default Teams
