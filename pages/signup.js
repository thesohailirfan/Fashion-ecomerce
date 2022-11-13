import React,{useState,useEffect} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";
import heroImg from "../public/assets/signupLogin/signupImg.png";
import gIcon from "../public/assets/signupLogin/googleIcon.png";
import mailIcon from "../public/assets/signupLogin/mailIcon.png";
import lockIcon from "../public/assets/signupLogin/lockIcon.png";
import axios from "axios";
import Constant from "../constants/api";

import {toast} from "react-toastify"
import { useRouter } from "next/router";

const Signup = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")

  const router=useRouter()

  const register=()=>{

    if(!email||!password||!confirmPassword)
    return toast.error("Enter All Fields")

    if(password!=confirmPassword)
       return toast.error("Confirm Password is Wrong")

    var data = JSON.stringify({
      "email": email,
      "password": password
    });
    
    var config = {
      method: 'post',
      url: Constant.REGISTER,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data);
      if(response.data.msg=="User Created")
      {
        sessionStorage.setItem("token",response.data.token)
        router.push("/")
        return toast.success("Registered Successfully")
      }
      else{
        return toast.info(response.data.msg)
      }
    })
    .catch(function (error) {
      console.log(error);
      toast.error(error.message)
    });
  }

  useEffect(()=>{
    const token=sessionStorage.getItem("token")
    if(token)
    router.push("/")
  },[])


  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center ">
      <div className="w-[80%] h-[80%]  relative flex border rounded-lg">
        <div className="relative w-[55%] h-[100%]">
          <Image alt="image" src={heroImg} layout="fill" objectFit="contain" />
          <button className="bg-[#0C222C] w-[15rem] absolute	left-[30%] top-[20%] flex p-[15px] justify-around items-center rounded rounded-[100px]">
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
              <p className="font-[700] text-[20px]">Sign Up</p>
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
              <div className="w-[80%] flex items-center border p-[10px]">
                <input
                  type="password"
                  placeholder="Confirm Password*"
                  className="w-[95%] h-[100%] border-none;
                  outline-0"
                  value={confirmPassword}
                  onChange={(e)=>{setConfirmPassword(e.target.value)}}
                />
                <Image alt="image" src={lockIcon} />
              </div>
            </div>
            <div>
              <button onClick={register} className="bg-[#0C222C] w-[20rem] text-white  p-[15px] rounded-[100px]">
                Create Account
              </button>
            </div>
            <a href="./login">Already have an account ? Log In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
