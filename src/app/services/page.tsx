
"use client";

import React, { useState } from "react";
import swedybg from "@/Images/Swedyarcheibg.webp";
import brutalist from "@/Images/brutalis.webp";



const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="pt-[80px] px-[50px]">
        <div className="flex flex-col pt-[80px]">
          <h1 className="text-[50px] font-bold">We design a lot of things</h1>
          <p className="text-[22px]">Here are some of our favorites…</p>
        </div>
      </div>

      <div className="banner-container bg-cover bg-center relative w-screen h-full mt-[80px] grid grid-cols md:grid-cols-4">
        <div
          className="h-[400px] bg-cover bg-center relative transition duration-300 ease-in-out flex items-center justify-center overflow-hidden group"
          style={{ backgroundImage: `url(${swedybg.src})`}}
          
          
        >
          <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-125"></div>
          <button
            className="text-white text-2xl font-bold z-10"
            onClick={toggleModal}
          >
            <h1 className="transition duration-300 ease-in-out group-hover:underline">
              Architecture
            </h1>
          </button>
          <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
        </div>

        <div
          className="h-[400px] bg-cover bg-center relative transition duration-300 ease-in-out flex items-center justify-center overflow-hidden group"
          style={{ backgroundImage: `url(${swedybg.src})` }}
        >
          <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-125"></div>
          <button
            className="text-white text-2xl font-bold z-10"
            onClick={toggleModal}
          >
            <h1 className="transition duration-300 ease-in-out group-hover:underline">
              Preservation
            </h1>
          </button>
          <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
        </div>

        <div
          className="h-[400px] bg-cover bg-center relative transition duration-300 ease-in-out flex items-center justify-center overflow-hidden group"
          style={{ backgroundImage: `url(${swedybg.src})` }}
        >
          <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-125"></div>
          <button
            className="text-white text-2xl font-bold z-10"
            onClick={toggleModal}
          >
            <h1 className="transition duration-300 ease-in-out group-hover:underline">
              Interior Design
            </h1>
          </button>
          <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
        </div>

        <div
          className="h-[400px] bg-cover bg-center relative transition duration-300 ease-in-out flex items-center justify-center overflow-hidden group"
          style={{ backgroundImage: `url(${brutalist.src})` }}
        >
          <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-125"></div>
          <button
            className="text-white text-2xl font-bold z-10"
            onClick={toggleModal}
          >
            <h1 className="transition duration-300 ease-in-out group-hover:underline">
              Planning
            </h1>
          </button>
          <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white md:w-1/4 p-5 rounded-lg relative w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold"></h1>
              <button className="text-black" onClick={toggleModal}>
                &#x2715;{" "}
                {/* This is a close icon using the Unicode character for "X" */}
              </button>
            </div>
            <div className="description mb-4">
              <p>
                We invite you to explore our portfolio and see for yourself the
                breadth and depth of our work. Whether you're looking to build a
                new landmark or restore a piece of history, our architecture
                studio is here to turn your dreams into reality.
              </p>
            </div>
            <button
              className="bg-black text-white py-2 px-4 rounded"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
