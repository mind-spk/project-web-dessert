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
      <div className=" w-full">
        <div className="  h-screen bg-image-home  flex flex-col items-center justify-end  ">
          <div className=" flex gap-8 text-[64px]  text-white mb-[20px]">
            <PiWhatsappLogoLight />
            <RxInstagramLogo />
            <CiTwitter />
          </div>
        </div>
      </div>

      <div className=" min-w-[789px] flex  items-center  bg-cyan-950 relative ">
        <div className=" text-[64px] text-[#F0E3A1] absolute right-[530px] ">
          <h1 className="w-[300px] font-bold text-[70px] ">PANCAKES LOVER</h1>
          {isOpen ? (
            <p className=" text-[20px]">
              This is the additional text that is displayed when the button is
              clicked.
            </p>
          ) : (
            <p className="text-[20px]">
              This is the initial text that is displayed.
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
