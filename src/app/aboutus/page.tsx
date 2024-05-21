import React from "react";
import Image from "next/image";
import About from "@/Images/aboutus.webp";
import SeparatorContent from "@/components/separator/separator";
import Teams from "@/components/teams/Teams";
import Ceo from "@/Images/Ceo.jpg";
import Team from "@/components/teams/Teams";

const Page = () => {
  return (
    <div className="bg-white pt-[80px] gap-10 flex flex-col">
      <div className=" flex flex-col gap-4 pt-[80px] px-[50px] md:text-[80px] text-[50px]">
        <h1 className="font-bold">About Us</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className=" w-full md:w-2/4">
            <Image className="w-full" src={About} alt=""></Image>
          </div>
          <div className="md:w-[500px] md:text-wrap">
            <p className="text-[20px] pt-4 pb-4 md:pt-0">
              Founded in 1990, Swedy Archei has been at the forefront of
              architectural innovation for over three decades.
            </p>
            {/* content 1  */}
            <div className=" border-black border-t-2 pt-4 bottom-0 pb-4">
              <h1 className="text-[32px] pt-4">Company History</h1>
              <div className="mt-4">
                <p className="text-[18px] pt-2 ">
                  1990 - The Beginning. <br className="mt-2" />
                  </p>
                  <p className="text-[18px]">
                    {" "}
                    In the early 1990s, Leo Fablos established Swedy Archei with
                    a mission to create iconic structures that stand the test of
                    time. Our first projects were small but ambitious,
                    reflecting a commitment to meticulous design and superior
                    craftsmanship.
                  </p>
                
              </div>

              <div className="mt-4">
                <p className="text-[18px] pt-2 ">
                  2010 - Global Recognition. <br className="mt-2" />
                  </p>
                  <p className="text-[18px]">
                    {" "}
                    As our portfolio grew, so did our international presence.
                    The 2010s were characterized by a series of high-profile
                    projects around the world. From towering skyscrapers to
                    expansive cultural complexes, our work began to define
                    skylines and become landmarks in cities globally. We
                    collaborated with leading developers and local governments,
                    bringing our expertise to new and challenging environments.
                  </p>
                
              </div>

              <div className="mt-4">
                <p className="text-[18px] pt-2 ">
                  2020 - A Legacy of Innovation <br className="mt-2" />
                  </p>
                  <p className="text-[18px]">
                    {" "}
                    Today, Swedy Archei stands as a leader in the field of
                    architecture. We have completed over 100 projects, including
                    historical restorations and contemporary landmarks. Our
                    studio continues to push the boundaries of design,
                    integrating cutting-edge technology and sustainable
                    practices into every project.
                  </p>
                
              </div>
            </div>
            {/* content 2  */}
            <div className=" border-black border-t-2 pt-4 bottom-0 pb-4">
              <h1 className="text-[32px] pt-4">Culture</h1>
              <p className="text-[18px] pt-2">
                Our journey began with a vision to blend artistic creativity
                with structural excellence, transforming the way people
                experience spaces. Since our inception, we have grown from a
                small team of passionate architects to an internationally
                recognized studio, renowned for our dedication to quality,
                innovation, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SeparatorContent
        sectionName="Team"
        sectionDescription="Our leadership team is composed of practice leaders in each specialty area and corporate operations. Our project teams are carefully chosen for their ability to serve and innovate within the parameters set by our clients"
      />
      <Team />
    </div>
  );
};

export default Page;
