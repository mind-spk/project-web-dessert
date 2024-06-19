import React from "react";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { RxInstagramLogo } from "react-icons/rx";
import { CiTwitter } from "react-icons/ci";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("READMORE");
  const handleClick = () => {
    setIsOpen(!isOpen);
    setButtonText(isOpen ? "Read More" : "Read Less");
    console.log("Button clicked!");
  };
  return (
    <div className=" flex w-full">
      <div className=" w-full ">
        <div className="  h-screen bg-image-home  flex flex-col items-start justify-end  ">
          <div className=" flex  gap-6 text-[40px]  text-white mb-[20px] ml-[40px]">
            <PiWhatsappLogoLight />
            <RxInstagramLogo />
            <CiTwitter />
          </div>
        </div>
      </div>

      <div className=" min-w-[789px] flex  items-center bg-gradient-to-b from-[#1A3443] via-[#0A2431] via-100% relative ">
        <div className=" text-[64px] text-[#F0E3A1] absolute right-[380px] ">
          <h1 className="w-[300px] font-bold font-judson text-[70px] ">PANCAKES LOVER</h1>
          {isOpen ? (
            <p className="font-judson w-[450px] text-[20px]">
             dipisci elit. Aliquam fringilla velit sed urna faucibus, quis laoreet arcu placerat. Ut in lacus in urna  laoreet sollicitudin pulvinar.
            </p>
          ) : (
            <p className="font-judson w-[450px] text-[20px]">
              Lorem ipsum dolor sit amet, consectetura dipisci elit. Aliquam fringilla velit sed urna faucibus, quis laoreet arcu placerat. Ut in lacus in urna  laoreet sollicitudin pulvinar.
            </p>
          )}
          <button
            onClick={handleClick}
            className=" w-[140px] text-[20px] bg-[#F0E3A1]  text-teal-950 font-bold py-2 px-4  mt-[10px]  rounded">
            {buttonText}
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
