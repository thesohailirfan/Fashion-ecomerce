import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import ProductImage from "../public/assets/productPage/imageBanner.png";
import igIcon from "../public/assets/productPage/igIcon.png";
import fbIcon from "../public/assets/productPage/fbIcon.png";
import wpIcon from "../public/assets/productPage/wpIcon.png";
import twiterIcon from "../public/assets/productPage/twtIcon.png";
import dropDown from "../public/assets/productPage/dropDown.png";

const ProductPage = () => {
  const [openDetails, setOpenDetails] = useState(true);
  function closeDetails() {
    alert(openDetails);
  }

  return (
    <div className="flex flex-col items-center ">
      <Header bgColor="#FFFFFF" />
      <div className="w-[80%] h-[80vh]  mt-[2rem] flex justify-between">
        <div className="w-[47%] h-[100%] flex flex-col justify-around">
          <div className="w-[100%] h-[75%] ">
            <a href="#" className="h-[75%]">
              <Image src={ProductImage} />
            </a>
            <div className="flex w-[100%] h-[25%] items-center justify-around">
              <a href="#">
                <Image src={ProductImage} width={50} height={50} />
              </a>

              <a href="#">
                <Image src={ProductImage} width={50} height={50} />
              </a>
              <a href="#">
                <Image src={ProductImage} width={50} height={50} />
              </a>
              <a href="#">
                <Image src={ProductImage} width={50} height={50} />
              </a>
              <a href="#">
                <Image src={ProductImage} width={50} height={50} />
              </a>
              <a href="#">
                <Image src={ProductImage} width={50} height={50} />
              </a>
              <a href="#">
                <Image src={ProductImage} width={50} height={50} />
              </a>
            </div>
          </div>
          <div className="w-[100%] h-[25%]  flex flex-col justify-around ">
            <p>Others Things You Might Like :</p>
            <div className="flex w-[100%]  items-center justify-around">
              <a href="#">
                <Image src={ProductImage} width={80} height={80} />
              </a>
              <a href="#">
                <Image src={ProductImage} width={80} height={80} />
              </a>
              <a href="#">
                <Image src={ProductImage} width={80} height={80} />
              </a>
              <a href="#">
                <Image src={ProductImage} width={80} height={80} />
              </a>
              <a href="#">
                <Image src={ProductImage} width={80} height={80} />
              </a>
              <a href="#">
                <Image src={ProductImage} width={80} height={80} />
              </a>
            </div>
          </div>
        </div>
        <div className="w-[47%] h-[100%] flex flex-col gap-[15px] justify-around ">
          <div>
            <p className="text-[24px] font-bold"> Product Name</p>
            <p className="text-[14px] font-[600] text-[#818181]">By Adidas</p>
          </div>
          <div>
            <p className="text-[20px] font-bold"> $ 450</p>
            <p className="text-[14px] font-[400] text-[#000000]">
              Price inclusive of all taxes.
            </p>
          </div>
          <hr className="bg-[#818181] h-1" />
          <div className="flex flex-col gap-[1rem]">
            <div className="flex items-center gap-[30px]">
              <p className="text-[20px] font-bold">Please select a size.</p>
              <span>
                <a href="#" className="underline text-[#4260f5]">
                  SIZE CHART
                </a>
              </span>
            </div>
            <div className="w-[100%] flex gap-[20px]">
              <button className="border border-1 rounded-[5px] p-[5px] w-[50px] border-[#B6B6B6]">
                XXS
              </button>
              <button className="border border-1 rounded-[5px] p-[5px] w-[50px] border-[#B6B6B6]">
                XS
              </button>
              <button className="border border-1 rounded-[5px] p-[5px] w-[50px] border-[#B6B6B6]">
                S
              </button>
              <button className="border border-1 rounded-[5px] p-[5px] w-[50px] border-[#B6B6B6]">
                M
              </button>
              <button className="border border-1 rounded-[5px] p-[5px] w-[50px] border-[#B6B6B6]">
                L
              </button>
              <button className="border border-1 rounded-[5px] p-[5px] w-[50px] border-[#B6B6B6]">
                XL
              </button>
              <button className="border border-1 rounded-[5px] p-[5px] w-[50px] border-[#B6B6B6]">
                XXL
              </button>
            </div>
            <div className="flex gap-[20px] mt-[5px]">
              <p className="font-[500]">Quantity</p>
              <input
                type="text"
                placeholder="01"
                className="border w-[30px] px-[4px] rounded-sm"
              />
            </div>
          </div>
          <div className="flex gap-[2rem] mt-[15px]">
            <button className="w-[200px] border p-[5px] bg-[#333333] text-white font-bold rounded-lg">
              ADD TO CART
            </button>
            <button className="w-[200px] border border-2 border-[#333333] p-[5px] bg-[#FFFFF] text-[#333333] font-bold rounded-lg">
              ADD TO WISHLIST
            </button>
          </div>
          <div className="flex gap-[20px]">
            <p>Share</p>
            <div className="w-[150px] flex items-center gap-[15px]">
              <Image src={igIcon} />
              <Image src={wpIcon} />
              <Image src={fbIcon} />
              <Image src={twiterIcon} />
            </div>
          </div>
          <div className="mt-[10px] w-[80%]">
            <button
              onClick={() => setOpenDetails(false)}
              className="border w-[100%] p-[7px] border-[1px] border-[#ADADAD] flex items-center justify-between px-[20px] rounded-lg"
            >
              {openDetails == true ? (
                <div className="w-[100%] flex items-center justify-between">
                  <p className="justify-self-satrt">Product Details</p>
                  <Image src={dropDown} />
                </div>
              ) : (
                <div className="min-h-[30px]">
                  <button
                    onClick={() => setOpenDetails(true)}
                    className="border"
                  >
                    close
                  </button>
                </div>
              )}
            </button>
            <button className="border w-[100%] p-[7px] border-[1px] border-[#ADADAD] flex items-center justify-between px-[20px] rounded-lg">
              <p className="justify-self-satrt">Product Description</p>
              <Image src={dropDown} />
            </button>
            <button className="border w-[100%] p-[7px] border-[1px] border-[#ADADAD] flex items-center justify-between px-[20px] rounded-lg">
              <p className="justify-self-satrt">Reviews</p>
              <Image src={dropDown} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
