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
      "Architectural marvel that stands as a testament to innovation and design excellence. With its striking façade and modern amenities, Allure Scientific redefines urban living. Discover a harmonious blend of functionality and aesthetics, where every detail is meticulously crafted to enhance your lifestyle. Welcome to Allure Scientific, where luxury meets sophistication, setting new standards in contemporary living.",
  },
  {
    title: "Relic Refuge",
    category: "Science & Labs",
    image: relicrefuge,
    description:
      "Experience the epitome of architectural brilliance with Relic Refuge. This iconic structure combines cutting-edge design with sustainable features, creating a space that inspires and uplifts. From its sleek exterior to its thoughtfully curated interiors, every aspect of Relic Refuge exudes elegance and sophistication, setting a new standard for urban living",
  },
  {
    title: "Vintage Valhalla",
    category: "Science & Labs",
    image: vintagevalhala,
    description:
      "Step into a world of luxury and refinement at Vintage Valhalla. Boasting stunning views and unparalleled amenities, this architectural masterpiece offers a sanctuary amidst the bustling cityscape. With meticulous attention to detail and a commitment to quality, Vintage Valhalla provides a haven where residents can indulge in the ultimate urban lifestyle.",
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
