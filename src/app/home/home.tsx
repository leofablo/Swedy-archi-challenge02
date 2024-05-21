import GaleryLarge from "@/components/galery-section/large-galery/GaleryLarge";
import HeroSection from "@/components/hero/hero";
import NumberSection from "@/components/numberSection/NumberSection";
import SeparatorContent from "@/components/separator/separator";
import React from "react";
import Large from "@/Images/Large.jpg";
import SmallImg from "@/Images/small-galery.jpg";
import GalerySmall from "@/components/galery-section/small-galery/GalerySmall";
import LargeProjectSection from "@/components/latest-project-section/LargeProjectSection/LargeProjectSection";
import LargeProject from "@/Images/Allure-scientific.webp";
import PrimaryButton from "@/components/button/PrimaryButton";
import NarrowIcon from "@/Images/arrow-narrow-up-right.svg";
import Teams from "@/components/teams/Teams";
import Ceo from "@/Images/Ceo.jpg"
import Expertise from "@/components/expertise/expertise";
import GalerySection from "@/components/galery-section/galery-section/GalerySection";
import Banner from "@/components/banner/banner";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";
import LatestProject from "@/components/latestproject/latestProject";
import Team from "@/components/teams/Teams";

const HomePage = () => {
  return (
    <div>
      <HeroSection />

      {/* About section */}
      <SeparatorContent
        sectionName="About"
        sectionDescription="We design buildings and interiors, landscapes and streetscapes, graphics and wayfinding.
        We have 26 professionals on staff in offices in Canada and Stockholm"
      />
      <NumberSection
        number="23"
        description="Years of architecture, design and planning."
      />
      <NumberSection
        number="89"
        description="Realized projects represents a culmination of effort, creativity, and execution"
      />
      <GaleryLarge
        image={Large}
        description={
          <div className="w-full">
            <p>
            Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis turpis nec, sollicitudin sodales tortor.
            </p>
            <p className="mt-5">
            Aenean dapibus magna quam, id tincidunt quam placerat consequat. Nulla eu laoreet ex. Vestibulum nec vulputate turpis, id euismod orci. Phasellus consectetur
            </p>
          </div>
        }
      >
      </GaleryLarge>

      <GaleryLarge
        image={SmallImg}
        description= {
          <div className="w-full">
            <p>
            Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis turpis nec, sollicitudin sodales tortor.
            </p>
            <p className="mt-5">
            Aenean dapibus magna quam, id tincidunt quam placerat consequat. Nulla eu laoreet ex. Vestibulum nec vulputate turpis, id euismod orci. Phasellus consectetur
            </p>
          </div>
        }
      />

      {/* Latest project section */}
      <div className="bg-[#F4E2D8] pb-[50px] mt-10">
        <SeparatorContent 
        sectionName="Latest project"
        sectionDescription="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" />
        <LatestProject /> 
        
        {/* <LargeProjectSection
          image={LargeProject}
          title="Allure Scientific"
          category="Science & Labs"
          description="Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis turpis nec, sollicitudin sodales tortor."
        /> */}
      </div>
      
      <SeparatorContent
        sectionName="Team"
        sectionDescription="Our leadership team is composed of practice leaders in each specialty area and corporate operations. Our project teams are carefully chosen for their ability to serve and innovate within the parameters set by our clients"
      />
      <Team />

      <SeparatorContent
        sectionName="Services"
        sectionDescription="where architectural excellence meets visionary design. Our passion lies in crafting spaces that inspire, innovate, and elevate the human experience. As a leading architecture agency, we offer a comprehensive range of services tailored to meet the diverse needs of our clients."
      />
      <Expertise />
      <Banner />
      <div className="bg-[#D7E1E1] pb-[50px]">
        <SeparatorContent 
        sectionName="Testimonials"
        sectionDescription="Discover what our clients have to say about their experience with Swedy Archi. From transforming visions into architectural masterpieces to delivering unparalleled customer service, our team at Swedy Archi is dedicated to exceeding expectations" />
      
        <Testimonials />
   

      </div>
      <Footer />

      


    </div>
    


  );
};

export default HomePage;
