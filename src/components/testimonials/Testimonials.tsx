import React from 'react';
import Image, { StaticImageData } from 'next/image';
import CEO from '@/Images/Ceo.jpg';



const testimonialItem = [
  {
    image: CEO,
    description: "Lorem lorem",
    name: "Muklis",
    jobTitle: "CEO-Kukicaps"
  },
  {
    image: CEO,
    description: "Lorem lorem",
    name: "Muklis",
    jobTitle: "CEO-Kukicaps"
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center p-8 gap-4">
      {testimonialItem.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row bg-gray-100 rounded-lg p-6 shadow-lg max-w-2xl mb-4">
          <div className="md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
            <Image src={item.image} alt={item.name} className="rounded-full w-32 h-32 object-cover" />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <p className="text-lg font-medium mb-2">{item.description}</p>
            <p className="text-gray-700 font-bold">{item.name}</p>
            <p className="text-gray-500">{item.jobTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
