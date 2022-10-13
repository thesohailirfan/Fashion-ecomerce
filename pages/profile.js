import React from "react";
import Image from "next/image";
import bgImg from "../assets/profile/bgImg.png";
import cImg from "../assets/profile/circleImg.png";
import powerImg from "../assets/profile/powerImg.png";
import delImg from "../assets/profile/delImg.png";
import eImg from "../assets/profile/editImg.png";
import arrowImg from "../assets/profile/arrow.png";

const profile = () => {
  return (
    <div className="w-[100vw] h-[100vh]   flex items-center justify-center">
      <div className="self-start relative">
        <Image src={bgImg} />
        <button className="rounded absolute bg-[#FFFFFF] p-[8px] right-[1rem] top-[1rem] text-[12px]">
          Change Cover
        </button>
        <button className="absolute top-[1rem] left-[1rem]">
          <Image src={arrowImg} width={40} height={40} />
        </button>
      </div>
      <div className="absolute w-[80%] h-[70%]  flex justify-between ">
        <div className="w-[30%] h-[100%] bg-[#FFFFFF]  flex flex-col items-center justify-around">
          <div className="relative">
            <div className="w-[150px]">
              <Image src={cImg} />
            </div>
            <button className="absolute bottom-[10%] right-[0%] border rounded-[100px] w-[52px] h-[52px] flex items-center bg-white justify-center">
              <Image src={eImg} width={30} height={30} />
            </button>
          </div>
          <div className="w-[100%]">
            <button className="border border-x-0 broder-y-1 w-[100%] border-y-[#000000] p-[5px]">
              Order History
            </button>
            <button className="border border-x-0 broder-y-1 w-[100%] border-t-0 border-y-[#000000] p-[5px]">
              Help Center
            </button>
            <button className="border border-x-0 broder-y-1 w-[100%] border-t-0 border-y-[#000000] p-[5px]">
              Saved Cards
            </button>
            <button className="border border-x-0 broder-y-1 w-[100%] border-t-0 border-y-[#000000] p-[5px]">
              Coupons
            </button>
            <button className="border border-x-0 broder-y-1 w-[100%] border-t-0 border-y-[#000000] p-[5px]">
              Manage Your Account
            </button>
          </div>
          <div className="flex flex-col gap-[10px] items-center">
            <button className="flex items-center gap-[10px]">
              <Image src={powerImg} width={20} height={20} /> Logout
            </button>
            <button className="flex items-center gap-[10px]">
              <Image src={delImg} width={20} height={20} /> Delete Profile
            </button>
          </div>
        </div>
        <div className="w-[65%] h-[100%] bg-[#FFFFFF] flex items-center justify-between flex-col p-[20px]">
          <div className="w-[90%] h-[80%] flex flex-col justify-between">
            <div className="w-[100%] h-[80%]  flex justify-between">
              <div className="w-[40%] h-[90%] flex flex-col justify-around">
                <div>
                  <p>First Name</p>
                  <input
                    type="text"
                    className="border border-2 border-black rounded-[5px] w-[15rem]"
                  />
                </div>
                <div>
                  <p>Phone no</p>
                  <input
                    type="text"
                    className="border border-2 border-black rounded-[5px] w-[15rem]"
                  />
                </div>
                <div>
                  <p>State</p>
                  <input
                    type="text"
                    className="border border-2 border-black rounded-[5px] w-[15rem]"
                  />
                </div>
                <div>
                  <p>Pincode</p>
                  <input
                    type="text"
                    className="border border-2 border-black rounded-[5px] w-[15rem]"
                  />
                </div>
              </div>
              <div className="w-[40%] h-[90%] flex flex-col justify-around">
                <div>
                  <p>Last Name</p>
                  <input
                    type="text"
                    className="border border-2 border-black rounded-[5px] w-[15rem]"
                  />
                </div>
                <div>
                  <p>E-Mail Address</p>
                  <input
                    type="text"
                    className="border border-2 border-black rounded-[5px] w-[15rem]"
                  />
                </div>
                <div>
                  <p>City</p>
                  <input
                    type="text"
                    className="border border-2 border-black rounded-[5px] w-[15rem]"
                  />
                </div>
                <div>
                  <p>Address</p>
                  <input
                    type="text"
                    className="border border-2 border-black rounded-[5px] w-[15rem]"
                  />
                </div>
              </div>
            </div>
            <div className="self-start">
              <button className="border p-[8px] border-1 border-[#000000] w-[100px] rounded">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
