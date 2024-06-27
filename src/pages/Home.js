import React from "react";
import homeImg from "../assets/imgs/88.jpg";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { RxInstagramLogo } from "react-icons/rx";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("READMORE");
  const handleClick = () => {
    setIsOpen(!isOpen);
    setButtonText(isOpen ? "Read Less" : "Read More"  );
    console.log("Button clicked!");
  };
  return (
    
    <div className="w-full h-screen flex relative bg-gradient-to-b from-[#1A3443] via-[#0A2431] via-100% ">
      
      <Navbar />
      <img className="w-[1160px] h-screen " src={homeImg} alt="dessert" />
      <div className=" flex gap-6  mr-[700px] absolute bottom-[20px] left-[150px]  text-white  text-[56px] ">
        <Link target="_blank " to="https://web.whatsapp.com/">
          <PiWhatsappLogoLight />
        </Link>
        <Link target="_blank " to="https://www.instagram.com/">
          <RxInstagramLogo />
        </Link>
        <Link target="_blank " to="https://x.com/?lang=th">
          <CiTwitter />
        </Link>
      </div>

      <div className="flex  flex-col justify-center absolute right-[357px] top-56 ">
        <h1 className="w-[300px]  text-[#F0E3A1] font-bold font-judson text-[100px] ">
          PANCAKES LOVER
        </h1>
        {isOpen ? (
            <p className="font-judson w-[450px] text-[20px] text-[#F0E3A1]">
              dipisci elit. Aliquam fringilla velit sed urna faucibus, quis
              laoreet arcu placerat. Ut in lacus in urna laoreet sollicitudin
              pulvinar.
            </p>
          ) : (
            <p className="font-judson w-[450px] text-[20px] text-[#F0E3A1]">
              Lorem ipsum dolor sit amet, consectetura dipisci elit. Aliquam
              fringilla velit sed urna faucibus, quis laoreet arcu placerat. Ut
              in lacus in urna laoreet sollicitudin pulvinar.
            </p>
          )}

        <button 
        onClick={handleClick}
        className="w-[273px] text-[25px] bg-[#F0E3A1] font-judson mt-4  text-teal-950   font-bold py-[15px] rounded">
          {buttonText}
        </button>
        
      </div>
      
    </div>
  );
}

export default Home;