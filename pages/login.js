import React,{useState,useEffect} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";
import heroImg from "../public/assets/signupLogin/loginImg.png";
import gIcon from "../public/assets/signupLogin/googleIcon.png";
import mailIcon from "../public/assets/signupLogin/mailIcon.png";
import lockIcon from "../public/assets/signupLogin/lockIcon.png";

import { useRouter } from "next/router";

import Constant from "../constants/api";
import axios from "axios"
import {toast} from "react-toastify"

const Signup = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const router=useRouter()

  const login=()=>{

    if(!email||!password)
    return toast.error("Enter All Fields")

    var data = JSON.stringify({
      "email": email,
      "password": password
    });
    
    var config = {
      method: 'post',
      url: Constant.LOGIN,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data);
      if(response.data.msg=="Logged In Successfully")
      {
        sessionStorage.setItem("token",response.data.token)
        router.push("/")
        return toast.success("Logged In Successfully")
      }
      else{
        return toast.info(response.data.msg)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center ">
      <div className="w-[80%] h-[80%]  relative flex border rounded-lg justify-between">
        <div className="relative w-[55%] h-[100%]">
          <Image
            alt="Mountains"
            src={heroImg}
            layout="fill"
            objectFit="contain"
          />
          <button className="bg-[#0C222C] w-[15rem] absolute	left-[30%] top-[20%] flex p-[15px] justify-around items-center rounded-[100px]">
            <p className="text-[#FFFFFF] ">Login With Google</p>{" "}
            <Image alt="image" src={gIcon} />
          </button>
        </div>
        <div className="absolute right-[45%] top-[40%] w-[50px] h-[50px] bg-[#0C222C] text-white rounded-xl rotate-45 p-[12px]">
          <p className="rotate-[-45deg]">OR</p>
        </div>
        <div className=" w-[45%] h-[100%] flex items-center ">
          <div className="w-[90%] h-[60%]  flex flex-col items-center justify-around">
            <div>
              <p className="font-[700] text-[20px]">Login</p>
            </div>
            <div className="w-[100%] flex flex-col items-center gap-[10px]">
              <div className="w-[80%] flex items-center border p-[10px]">
                <input
                  type="text"
                  placeholder="Email Address*"
                  className="w-[95%] h-[100%] border-none;
                  outline-0"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
                <Image alt="image" src={mailIcon} />
              </div>
              <div className="w-[80%] flex items-center border p-[10px]">
                <input
                  type="password"
                  placeholder="Password*"
                  className="w-[95%] h-[100%] border-none;
                  outline-0"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <Image alt="image" src={lockIcon} />
              </div>
            </div>
            <div className="text-center">
              <a href="#">Forgot Password</a>
            </div>
            <div>
              <button onClick={login} className="bg-[#0C222C] w-[20rem] text-white  p-[15px] rounded-[100px]">
                Login
              </button>
            </div>
            <a href="./signup">Don’t have an account ? Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
