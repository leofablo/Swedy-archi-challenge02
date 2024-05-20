import Image from 'next/image'
import React from 'react'
import img from "@/Images/arrow-narrow-right.svg"
import { FaArrowRight } from 'react-icons/fa';






const services = [
    {
        title: 'Architecture',
        icon: FaArrowRight
    },

    {
        title: 'Planning',
        icon: FaArrowRight,
    },

    {
        title: 'Preservation',
        icon: FaArrowRight,
    },

    {
        title: 'Interior Design',
        icon: FaArrowRight,
    },

    {
        title: 'Landscape Architecture',
        icon: FaArrowRight,
    },

     {
        title: 'Visualisation',
        icon: FaArrowRight,
    },

]

const Expertise = () => {
  return (


    <div className='flex flex-col px-[50px] '>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer'>
            {
                services.map((item, index) => (
                   <div key={index}>

                        <div className='flex flex-row justify-between border-y-2 py-2 mb-4 hover:bg-black hover:text-white hover:px-[50px] border-r-black hover:items-center items-center' >
                         <div className='text-[40px]'>{item.title}</div>
                        <item.icon className='group-hover:text-white justify-center hover:justify-center' size={34} />

                    </div>

                    </div>
 
                ))
            }
        </div>

    </div>

  )
}

export default Expertise
