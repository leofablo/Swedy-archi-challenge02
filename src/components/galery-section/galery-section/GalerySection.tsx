import React from "react";
import Image from "next/image";
import galery1 from "@/Images/Swedyarcheibg.jpg";
import relicrefuge from "@/Images/relic-refuge.webp";
import vintagevalhala from "@/Images/vintage-valhalla.webp";

const galleryItems = [
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

const GallerySection: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      {galleryItems.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row mb-8">
          <div className="md:w-full md:h-[560px] flex justify-center md:justify-start mb-4 md:mb-0">
            <Image src={item.image} alt={item.title} className="w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2 md:pl-6">
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{item.category}</p>
            <p className="text-lg">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GallerySection;







// import React from "react";
// import galery1 from "@/Images/Swedyarcheibg.jpg";
// import Image from "next/image";
// import relicrefuge from "@/Images/relic-refuge.webp";
// import vintagevalhala from "@/Images/vintage-valhalla.webp";

// const galeryItem = [
//   {
//     title: "Allure Scientific",
//     category: "Science & Labs",
//     image: galery1,
//     description:
//       "Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis turpis nec, sollicitudin sodales tortor.",
//   },

//   {
//     title: "Relic Refuge",
//     category: "Science & Labs",
//     image: relicrefuge,
//     description:
//       "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },

//   {
//     title: "Vintage Valhalla",
//     category: "Science & Labs",
//     image: vintagevalhala,
//     description:
//       "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
// ];

// const GalerySection = () => {
//   return (
//     <div>
//       <div>
//         {galeryItem.map((item, index) => (
//           <div key={index}>
//             <div className="flex flex-row px-[50px] md:flex-row">
//               <div className="flex-row md:flex-row">
//                 <div className="md:flex-col flex flex-row"></div>
//                 <Image src={item.image} alt="" className="mb-4" />

//                 <div className="md:flex-row">
//                   <div className="text-[28px] flex flex-row items-center justify-between mb-4 pb-4 border-b border-[#111111] md:flex-col">
//                   {item.title}
//                   <div className="text-sm">{item.category}</div>
//                 </div>
//                 <div className="mb-10 md:w-full">{item.description}</div>
//               </div>
//             </div>
//           </div>
                  
//                 </div>
                
//         ))}
//       </div>  
//     </div>
//   );
// };

// export default GalerySection;
