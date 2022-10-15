import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import bgImg from "../public/assets/profile/bgImg.png";
import cImg from "../public/assets/profile/circleImg.png";
import powerImg from "../public/assets/profile/powerImg.png";
import delImg from "../public/assets/profile/delImg.png";
import eImg from "../public/assets/profile/editImg.png";
import arrowImg from "../public/assets/profile/arrow.png";
import profileImg from "../public/assets/profile/profile.png";

const profile = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center gap-[40px] bg-[#F2F2F2]">
      <Header />
      <div className="w-[95%] min-h-[500px] h-[80vh]  border border-[#CECECE] rounded-[15px] flex p-[20px] bg-white">
        <div className="w-[30%] h-[100%] border border-l-[0px] border-t-[0px] border-b-[0px] flex flex-col items-center justify-around gap-[15px] ">
          <div className=" w-[100%] flex flex-col items-center gap-[10px]">
            <p className="text-[#AAAAAA] text-[18px]">Your Profile</p>
            <div className="w-[120px]">
              <Image src={profileImg} alt="profile image" />
            </div>
            <div className="text-center">
              <p className="font-[600] text-[20px] text-[#000000]">
                Anirban Roy
              </p>
              <a
                className="text-[#C0C0C0] shadow-lg border-[#C0C0C0] text-[13px]"
                href="#"
              >
                (Click to change your photo)
              </a>
            </div>
          </div>
          <hr className="w-[90%]" />
          <div className="flex flex-col h-[50%] justify-around max-h-[200px]">
            <a className="text-[13px] font-bold" href="#">
              Order History
            </a>
            <a className="text-[13px] font-bold" href="#">
              Help Centre
            </a>
            <a className="text-[13px] font-bold" href="#">
              Saved Cards
            </a>
            <a className="text-[13px] font-bold" href="#">
              Coupouns
            </a>
            <a className="text-[13px] font-bold" href="#">
              Manage your account
            </a>
          </div>
        </div>
        <div className=" h-[100%] w-[70%] text-center ">
          <div>
            <p className="text-[#AAAAAA] text-[18px]">Account Settings</p>
          </div>
          <div className="flex flex-col gap-[30px] mt-[20px] px-[3rem]">
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">First Name</p>
              <input
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Middle Name</p>
              <input
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Last Name</p>
              <input
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Middle Name</p>
              <input
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Phone No</p>
              <input
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Email Address</p>
              <input
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">State</p>
              <input
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">City</p>
              <input
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
