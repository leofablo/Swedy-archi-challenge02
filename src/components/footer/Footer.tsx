import React from 'react'
import SeparatorContent from '../separator/separator'

const Footer = () => {
  return (
    <div>
        <SeparatorContent sectionName='Contact'/>
        <div className='text-[60px] text-wrap px-[50px] leading-tight font-bold md:w-[820px] md:mb-10 md:text-[80px]'>
            <h1>
                Would like to talk about a project? 
                <br />
                <span className='text-[#D69A77]'>— Get in touch </span>
            </h1>
        </div>

        <div className='flex flex-col gap-5 mb-10'>
          <div className='flex flex-col px-[50px] gap-10 md:flex-row md:justify-end md:mb-[50px] mb-10'>
          <div className='flex flex-col gap-1 pt-4 border-t-2 mt-10'>
            <h1 className='text-[40px] mb-2'>Canada</h1>
            <p className='text-[22px] w-full text-wrap md:w-[500px] text-slate-500'>Vancouver, 17S Main Street 1453, Canada TR 34423</p>
            <a className='text-[22px] underline-offset-8 text-slate-800' href="#">canada@swedy-archei.com</a>
          </div>
          <div className='flex flex-col gap-1 pt-4 border-t-2 mt-10'>
            <h1 className='text-[40px] mb-2'>Stockholm</h1>
            <p className='text-[22px] text-wrap w-full md:w-[500px] text-slate-500'>Sweden, 17S Main Street 1453, Stockholm TR 34423</p>
            <a className='text-[22px] underline-offset-8 text-slate-800' href="#">uppsala@swedy-archei.com</a>
          </div>

        </div>
        
          <div className='flex flex-col w-full gap-10 text-gray-700 pt-4 pb-4 md:justify-start justify-center items-center px-[50px]'>
            <div className='flex flex-col md:flex-row w-full'>
               <ul className='flex flex-col md:flex-row md:gap-10 gap-2 text-[18px] md:text-[16px]'>
              <li className='hover:underline hover:text-black pb-4'>
                <a href="#">Facebook</a>
                </li>
                <li className='hover:underline hover:text-black'>
                <a href="#">Twitter</a>
                </li>
                <li className='hover:underline hover:text-black'>
                <a href="#">Instagram</a>
                </li>
                <li className='hover:underline hover:text-black'>
                <a href="#">Linkedin</a>
                </li>
            </ul>

            </div>
            
           

          </div>
          <div className='flex flex-row justify-center items-center w-full px-[50px]  pb-10'>
                <ul className='flex flex-row justify-center w-full gap-4 text-slate-400 text-[14px]'>
                  <li>
                <a href="#">© 2022 Swedy Archei</a>
                </li>
                   <li>
                <a href="#">Terms</a>
                </li>

                </ul>

            </div>

        </div>
      
    </div>
  )
}

export default Footer
