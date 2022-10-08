import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";
import heroImg from "../assets/signupLogin/signupImg.png";
import gIcon from "../assets/signupLogin/googleIcon.png";
import mailIcon from "../assets/signupLogin/mailIcon.png";
import lockIcon from "../assets/signupLogin/lockIcon.png";

const signup = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center ">
      <div className="w-[80%] h-[100%]  relative flex">
        <div className="relative w-[55%] h-[100%]">
          <Image
            alt="Mountains"
            src={heroImg}
            layout="fill"
            objectFit="contain"
          />
          <button className="bg-[#0C222C] w-[15rem] absolute	left-[30%] top-[20%] flex p-[15px] justify-around items-center rounded rounded-[100px]">
            <p className="text-[#FFFFFF] ">Login With Google</p>{" "}
            <Image src={gIcon} />
          </button>
          <div className="absolute right-[25px] top-[40%] w-[50px] h-[50px] bg-[#0C222C] text-white rounded-xl rotate-45 p-[12px]">
            <p className="rotate-[-45deg]">OR</p>
          </div>
        </div>

        <div className=" w-[45%] h-[100%] flex items-center ">
          <div className="w-[90%] h-[60%]  flex flex-col items-center justify-around">
            <div>
              <p className="font-[700] text-[20px]">Sign Up</p>
            </div>
            <div className="w-[100%] flex flex-col items-center gap-[10px]">
              <div className="w-[80%] flex items-center border p-[10px]">
                <input
                  type="text"
                  placeholder="Email Address*"
                  className="w-[95%] h-[100%] border-none;
                  outline-0"
                />
                <Image src={mailIcon} />
              </div>
              <div className="w-[80%] flex items-center border p-[10px]">
                <input
                  type="text"
                  placeholder="Password*"
                  className="w-[95%] h-[100%] border-none;
                  outline-0"
                />
                <Image src={mailIcon} />
              </div>
              <div className="w-[80%] flex items-center border p-[10px]">
                <input
                  type="text"
                  placeholder="Password*"
                  className="w-[95%] h-[100%] border-none;
                  outline-0"
                />
                <Image src={mailIcon} />
              </div>
            </div>
            <div>
              <button className="bg-[#0C222C] w-[20rem] text-white  p-[15px]  rounded rounded-[100px]">
                Create Account
              </button>
            </div>
            <a href="#">Already have an account ? Log In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
