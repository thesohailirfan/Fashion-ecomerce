import React from "react";
import Image from "next/image";
import heart from "../public/assets/landingPage/heart2.png";
import star from "../public/assets/searchpage/start.png";
import { useRouter } from "next/router";
import {toast} from "react-toastify"

const SearchPageProduct = ({type,name,price,image,typeFilter}) => {

  const typeJSON={"tshirt":"T-Shirt","shirt":"Shirt","jeans":"Jeans","onepiece":"One Piece"}

  const router=useRouter()

  const checkLogin=()=>{
    const token=sessionStorage.getItem("token")
    if(!token)
    {
      toast.error("Please Login!")
      router.push("/login")
    }
  }

  return (
    <div className=" border-[#F7F7F7] border-[2px] p-[5px] flex flex-col justify-around rounded-[7px]">
     <div className={"w-[250px] h-[250px]"}>
            <img alt="image" src={image} width={300} height={300} />
        </div>
    <div className="px-[10px]">
      <div>
        <p className="text-[12px] text-[#A8A8A8]">{typeJSON[type]}</p>
        <p className="text-[14px]">{name}</p>
      </div>
      <div className="flex justify-between w-[60%]">
        <div>
          <Image alt="image" src={star} />{" "}
          <Image alt="image" src={star} />{" "}
          <Image alt="image" src={star} />{" "}
          <Image alt="image" src={star} />{" "}
          <Image alt="image" src={star} />
        </div>
        <p>4.3k</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">{price}$</p>
        <div className="w-[12px]" onClick={checkLogin}>
          <Image alt="image" src={heart} width={20} />
        </div>
        <p
          className="border p-[3px] border-[#D9D9D9] text-[12px] w-[70px] text-center"
          onClick={checkLogin}
        >
          Buy Now
        </p>
      </div>
    </div>
  </div>
  )
}

export default SearchPageProduct