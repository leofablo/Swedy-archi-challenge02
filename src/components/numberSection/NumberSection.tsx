import React from "react";

interface numberProps {
  number: string;
  description: string;
}

const NumberSection = ({ number, description }: numberProps) => {
  return (
   
      <div className="flex flex-col md:w-[500px] px-[50px] md:ml-[200px]">
        <h1 className="text-[240px] text-[#D69A77]">{number}</h1>
        <p className="text-[28px]">{description}</p>
      </div>
    
  );
};

export default NumberSection;
