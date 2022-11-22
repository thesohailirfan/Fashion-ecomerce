import React,{useEffect, useState} from "react";
import Image from "next/image";
import Logo from "../public/assets/landingPage/logo.png";
import Heart from "../public/assets/landingPage/heart2.png";
import Bag from "../public/assets/landingPage/Bag.png";
import {toast} from "react-toastify"

import { useRouter } from "next/router";

const Header = ({ bgColor }) => {

const router=useRouter()

const activeClass="font-bold cursor-pointer"
const inactiveClass="text-[#535353] cursor-pointer"

const [loggedIn,setLoggedIn]=useState(false)

useEffect(()=>{
  const token=sessionStorage.getItem("token")
  if(token)
  setLoggedIn(true)
  else
  setLoggedIn(false)

  console.log(router.pathname)
},[router.pathname])

return (
<div className="bg-[#F2F2F2] w-[100vw] h-[10vh] flex items-center justify-around " style={{ backgroundColor: bgColor }}>
  <div className="w-[80%] h-[100%] flex justify-between items-center ">
    <Image alt="image" className="cursor-pointer" src={Logo} height={80} width={200} onClick={()=>{router.push("/")}} />
      <div className="w-[78%] h-[100%]  flex items-center justify-around text-[14px] font-[600]">
        <p className={router.pathname=="/"?activeClass:inactiveClass} onClick={()=>{router.push("/")}}>
          HOME
        </p>
        <p className="text-[#535353] cursor-pointer" onClick={()=>{router.push({
          pathname: '/searchpage',
          query: { type:"men" }
          }, '/searchpage')}}>
          MEN
        </p>
        <p className="text-[#535353] cursor-pointer" onClick={()=>{router.push({
          pathname: '/searchpage',
          query: { type:"women" }
          }, '/searchpage')}}>
          WOMEN
        </p>
        <p className={router.pathname=="/searchpage"?activeClass:inactiveClass} onClick={()=>{router.push("/searchpage")}}>
          SHOP
        </p>
        <p className="text-[#535353] cursor-pointer" onClick={()=>{router.push({
          pathname: '/',
          query: { type:"contact" }
          }, '/')}}>
          CONTACT US
        </p>
        <input type="text" name="" placeholder="Search..." id=""
          className="w-[40%] h-[55%] rounded-[100pc] px-[20px] shadow-xl" />
      </div>
  </div>
  <div className="  w-[15%] flex justify-between items-center">
    <p onClick={()=>{if(!loggedIn){toast.error("Please Login!");router.push("/login")}}}>
      <Image alt="image" src={Heart} />
    </p>
    <p>
      <Image alt="image" src={Bag} />
    </p>

    <p onClick={()=>{if(loggedIn){sessionStorage.clear()} router.push("/signup")}} className="text-[#535353] text-[18px] font-bold cursor-pointer">
      {loggedIn?"Sign Out":"Sign Up"}
    </p>
  </div>
</div>
);
};

export default Header;