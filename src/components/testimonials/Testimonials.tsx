import React from 'react';
import Image, { StaticImageData } from 'next/image';
import CEO from '@/Images/Ceo.jpg';



const testimonialItem = [
  {
    image: CEO,
    description: "From concept to completion, our team delivered tailored solutions and unwavering support, turning their vision into reality with ease and excellence",
    name: "Muklis el mangrove",
    jobTitle: "Product Development at Starboy"
  },
  {
    image: CEO,
    description: "With personalized attention and innovative design, we transformed their aspirations into a stunning architectural reality, exceeding expectations at every turn",
    name: "El Gasing",
    jobTitle: "CEO MU Trash"
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="grid grid-cols items-center justify-center p-8 gap-4 md:grid-rows">
      {testimonialItem.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row bg-slate-200 rounded-lg p-6 shadow-lg max-w-2xl mb-4">
          <div>
             </div>
          <div className="md:w-full md:pl-6 w-full">
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
