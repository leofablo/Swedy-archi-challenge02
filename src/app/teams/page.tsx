import Teams from '@/components/teams/Teams'
import React from 'react'
import Ceo from "@/Images/Ceo.jpg"
import Team from '@/components/teams/Teams'

const Page = () => {
  return (

    <>
    <div className='pt-[80px] px-[50px]'>
        <div className='grid grid-cols-2 pt-[50px] justify-start gap-4'>
            <h1 className='text-[32px] font-bold md:w-1/2'>Meet the visionaries behind Swedy Archei.</h1>
            <p className=''> A key player since the mid-1990s, Swedy Archei has
              contributed to numerous landmark projects, blending innovation
              with meticulous design to create spaces that inspire and endure.</p>
        </div>

       
        
      
    </div>
    <div className='mt-[50px]'>
        <Team />

    </div>
     
    
    </>
    
  )
}

export default Page
