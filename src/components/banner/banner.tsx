import React from 'react';
import swedybg from "@/Images/Swedyarcheibg.webp";

const Banner = () => {
  return (
    <div className='banner-container bg-cover bg-center relative w-screen h-[700px] mt-[150px]' style={{ backgroundImage: `url(${swedybg.src})` }}>
      <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
        <div>
          <h1 className='text-[80px] font-bold top-0 absolute left-10 md:text-[150px] md:translate-y-20 translate-y-4 '>Swedy Archei</h1>
        </div>
        <div>
          <h1 className='text-[50px] bottom-10 absolute md:right-20 md:w-[640px] md:text-wrap md:text-[80px] leading-none pr-3'>Fresh ideas and open minds</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
