import React from "react";
import Image from "next/image";
import Logo from "../assets/landingPage/logo.png";
import Heart from "../assets/landingPage/Heart.png";
import Bag from "../assets/landingPage/Bag.png";
import Hamburger from "../assets/landingPage/Hamburger.png";

const Header = ({ bgColor }) => {
  return (
    <div
      className="bg-[#F2F2F2] w-[100vw] h-[10vh] flex items-center justify-around "
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-[80%] h-[100%] flex justify-between items-center ">
        <Image src={Logo} height={80} width={200} />
        <div className="w-[78%] h-[100%]  flex items-center justify-around text-[14px] font-[600]">
          <button className="font-bold">HOME</button>
          <button className="text-[#535353]">MEN</button>
          <button className="text-[#535353]">WOMEN</button>
          <button className="text-[#535353]">SHOP</button>
          <button className="text-[#535353]">CONTACT US</button>
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
        <button>
          <Image src={Heart} />
        </button>
        <button>
          <Image src={Bag} />
        </button>

        <button>
          <Image src={Hamburger} />
        </button>
      </div>
    </div>
  );
};

export default Header;
