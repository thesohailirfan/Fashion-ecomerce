import React from "react";
import Image from "next/image";
import logo from "../assets/landingPage/logo.png";
import igIcon from "../assets/socialIcons/igIcon.png";
import fbIcon from "../assets/socialIcons/fbIcon.png";
import wpIcon from "../assets/socialIcons/wpIcon.png";
import twiterIcon from "../assets/socialIcons/twiterIcon.png";
import send from "../assets/socialIcons/send.png";

const Footer = () => {
  return (
    <div className="w-[100vw] h-[48vh] bg-[#333333]  mt-[100px] flex flex-col">
      <div className="w-[20%]">
        <p className="text-[45px] text-white ml-[50px] mt-[20px]">BAGIUM</p>
      </div>
      <div className="w-[100%] h-[70%]  flex justify-center items-center">
        <div className="w-[70%] h-[85%]  flex text-[18px] gap-[50px]">
          <div className="w-[20%] h-[100%] font-bold text-white flex flex-col justify-between ">
            Contact
            <div className="mt-[-40px] text-[12px] text-[#9a9a9a]">
              <p>connect@theblanc.in</p>
              <p>+91 9383562832</p>
            </div>
            <div className="w-[100%] flex justify-between">
              <Image src={igIcon} />
              <Image src={fbIcon} />
              <Image src={wpIcon} />
              <Image src={twiterIcon} />
            </div>
          </div>
          <div className="w-[20%] h-[100%] font-bold text-white flex flex-col justify-between">
            About April
            <div className=" text-[12px] text-[#9a9a9a] h-[75%] flex flex-col justify-between items-start">
              <button>About us</button>
              <button>Offices</button>
              <button>Work with us</button>
              <button>Our policies</button>
              <button>Affinity card</button>
            </div>
          </div>
          <div className="w-[20%] h-[100%] font-bold text-white flex flex-col justify-between">
            Shop Guide
            <div className=" text-[12px] text-[#9a9a9a] h-[75%] flex flex-col justify-between  items-start">
              <button>Payments</button>
              <button>Returns</button>
              <button>Gift cards</button>
              <button>Guest Purchase</button>
              <button>Terms and Conditions</button>
            </div>
          </div>
          <div className="w-[30%] h-[70%] font-bold text-white flex flex-col justify-between">
            Newsletter
            <div className=" text-[12px] text-[#9a9a9a] h-[65%] flex flex-col justify-between  items-start">
              <p>SUBSCRIBE TO OUR NEWSLETTER</p>
              <div className="flex w-[150%] h-[48px] ">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-[80%] px-[15px] bg-[#4B4B4B]"
                />
                <button className="w-[20%]">
                  <Image src={send} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
