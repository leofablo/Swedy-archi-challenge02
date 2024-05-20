import React from 'react'

interface separatorProps {
    sectionName: string,
    sectionDescription?: string
}

const SeparatorContent = ({sectionName, sectionDescription} : separatorProps) => {
  return (
    <div className='flex flex-col 2 px-[50px] pt-[140px]'>
        <div className='border-t border-black mb-10'>
            <p className='mt-4 mb-[50px]'>{sectionName}</p>
            <h3 className='text-[28px] md:text-[32px] md:w-[620px] '>{sectionDescription}</h3>

        </div>
        
      
    </div>
  )
}

export default SeparatorContent
