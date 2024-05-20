import NavBar from '@/components/nav/nav'
import React from 'react'
import Logo from "../../../public/Logo.svg";
import LatestProjects from '@/components/latestproject/latestProject';



const Page = () => {
  return (
    <div>
      <div className='flex flex-col gap-6'>
          <div className='text-[100px] px-[50px] pt-[80px]'>
        <h1>Projects</h1>
        </div>
      <div className='md:grid grid-cols-2 top-10 px-[50px] justify-between items-start mb-[50px]'>
        <h1 className='text-[32px] md:w-full mb-4'> 
          We have been innovating in construction since 1990, prioritizing modern architecture that is user-centered, comfortable, and secure</h1>
        <p className='text-[15px] md:w-full justify-end items-end'>Our approach to design is rooted in a deep understanding of our clients &apos; needs and aspirations. We collaborate closely with stakeholders to deliver solutions that are not only visually stunning but also functional, sustainable, and future-proof. Whether it's a cutting-edge contemporary structure or a tribute to traditional craftsmanship, every project bears the hallmark of our expertise and passion. 
        <br/>
          Driven by innovation and guided by principles of user-centric design, we strive to push boundaries and challenge conventions. Our team of architects, designers, and engineers are united in their pursuit of excellence, working tirelessly to bring visionary concepts to life.
          From towering skyscrapers to humble dwellings, we embrace diversity in scale, scope, and style. Each project is a unique opportunity to create something extraordinary, blending artistry with technical precision to exceed expectations.</p>
      </div>

      </div>
    

      <LatestProjects />
    
    </div>
  )
}

export default Page
