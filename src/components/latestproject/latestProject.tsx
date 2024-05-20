import React from 'react';
import Image, { StaticImageData } from 'next/image';
import galery1 from "@/Images/Swedyarcheibg.jpg";
import relicrefuge from "@/Images/relic-refuge.webp";
import vintagevalhala from "@/Images/vintage-valhalla.webp";

interface ProjectItem {
  title: string;
  category: string;
  image: StaticImageData;
  description: string;
}

const itemProject: ProjectItem[] = [
  {
    title: "Allure Scientific",
    category: "Science & Labs",
    image: galery1,
    description:
      "Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis turpis nec, sollicitudin sodales tortor.",
  },
  {
    title: "Relic Refuge",
    category: "Science & Labs",
    image: relicrefuge,
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Vintage Valhalla",
    category: "Science & Labs",
    image: vintagevalhala,
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const LatestProject: React.FC<ProjectItem> = ({ title, category, image, description }) => {
  return (
    <div className='md:flex flex-row px-[50px] gap-10 py-10'>
      <div className='md:w-full'>
        <Image className='w-full h-[560px]'src={image} alt={title}></Image>
        <div className='md:flex md:flex-row md:justify-between md:pt-4 border-b border-black md:items-center justify-between md:pb-2 mt-2 flex flex-row items-center pb-2'>
          <h1 className='text-[28px]'>{title}</h1>
          <p className='text-[14px]'>{category}</p>
        </div>
      </div>
      <div className='md:w-[500px] pt-4'>
        <p>{description}</p>
        <button className='mt-5 w-full border-2 border-[#343432] hover:bg-[#343432] hover:text-white py-2 px-2'>See details</button>
      </div>
    </div>
  )
}

const LatestProjects: React.FC = () => {
  return (
    <div>
      {itemProject.map((project, index) => (
        <LatestProject key={index} {...project} />
      ))}
    </div>
  );
};

export default LatestProjects;
