import React from "react";
import Image from "next/image";
import Logo from "../public/assets/landingPage/logo.png";
import Heart from "../public/assets/landingPage/Heart.png";
import Bag from "../public/assets/landingPage/Bag.png";
import Hamburger from "../public/assets/landingPage/Hamburger.png";

const Header = ({ bgColor }) => {
  return (
    <div
      className="bg-[#F2F2F2] w-[100vw] h-[10vh] flex items-center justify-around "
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-[80%] h-[100%] flex justify-between items-center ">
        <Image alt="image" src={Logo} height={80} width={200} />
        <div className="w-[78%] h-[100%]  flex items-center justify-around text-[14px] font-[600]">
          <a href="#" className="font-bold">
            HOME
          </a>
          <a href="#" className="text-[#535353]">
            MEN
          </a>
          <a href="#" className="text-[#535353]">
            WOMEN
          </a>
          <a href="#" className="text-[#535353]">
            SHOP
          </a>
          <a href="#" className="text-[#535353]">
            CONTACT US
          </a>
          <input
            type="text"
            name=""
            placeholder="Search..."
            id=""
            className="w-[40%] h-[55%] rounded-[100pc] px-[20px] shadow-xl"
          />
        </div>
      </div>
      <div className="  w-[15%] flex justify-between flex items-center">
        <a href="#">
          <Image alt="image" src={Heart} />
        </a>
        <a href="#">
          <Image alt="image" src={Bag} />
        </a>

        <a className="text-[#535353] text-[18px] font-bold" href="./signup">
          SignUp
        </a>
      </div>
    </div>
  );
};

export default Header;
