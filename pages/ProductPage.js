import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import ProductImage from "../assets/productPage/imageBanner.png";
import igIcon from "../assets/productPage/igIcon.png";
import fbIcon from "../assets/productPage/fbIcon.png";
import wpIcon from "../assets/productPage/wpIcon.png";
import twiterIcon from "../assets/productPage/twtIcon.png";
import dropDown from "../assets/productPage/dropDown.png";

const ProductPage = () => {
  return (
    <div className="flex flex-col items-center ">
      <Header bgColor="#FFFFFF" />
      <div className="w-[90%] h-[80vh]  mt-[2rem] flex justify-between">
        <div className="w-[47%] h-[100%] ">
          <div className="w-[100%] h-[75%] ">
            <div className="h-[75%]">
              <Image src={ProductImage} />
            </div>
            <div className="flex w-[100%] h-[25%] items-center justify-around">
              <Image src={ProductImage} width={70} height={70} />
              <Image src={ProductImage} width={70} height={70} />
              <Image src={ProductImage} width={70} height={70} />
              <Image src={ProductImage} width={70} height={70} />
              <Image src={ProductImage} width={70} height={70} />
              <Image src={ProductImage} width={70} height={70} />
            </div>
          </div>
          <div className="w-[100%] h-[25%]  flex flex-col justify-around ">
            <p>Others Things You Might Like :</p>
            <div className="flex w-[100%]  items-center justify-around">
              <Image src={ProductImage} width={70} height={70} />
              <Image src={ProductImage} width={70} height={70} />
              <Image src={ProductImage} width={70} height={70} />
              <Image src={ProductImage} width={70} height={70} />
              <Image src={ProductImage} width={70} height={70} />
              <Image src={ProductImage} width={70} height={70} />
            </div>
          </div>
        </div>
        <div className="w-[47%] h-[100%] flex flex-col gap-[20px]">
          <div>
            <p className="text-[28px] font-bold"> Product Name</p>
            <p className="text-[14px] font-[600] text-[#818181]">By Adidas</p>
          </div>
          <div>
            <p className="text-[28px] font-bold"> $ 450</p>
            <p className="text-[14px] font-[600] text-[#818181]">
              Price inclusive of all taxes.
            </p>
          </div>
          <hr className="bg-[#818181] h-1" />
          <div>
            <div className="flex items-center gap-[30px]">
              <p className="text-[20px] font-bold">Please select a size.</p>
              <span>
                <a href="#" className="underline text-[#4260f5]">
                  SIZE CHART
                </a>
              </span>
            </div>
            <div className="w-[100%] flex gap-[20px] mt-[10px]">
              <button className="border border-2 rounded-[5px] p-[5px] w-[50px]">
                XXS
              </button>
              <button className="border border-2 rounded-[5px] p-[5px] w-[50px]">
                XS
              </button>
              <button className="border border-2 rounded-[5px] p-[5px] w-[50px]">
                S
              </button>
              <button className="border border-2 rounded-[5px] p-[5px] w-[50px]">
                M
              </button>
              <button className="border border-2 rounded-[5px] p-[5px] w-[50px]">
                L
              </button>
              <button className="border border-2 rounded-[5px] p-[5px] w-[50px]">
                XL
              </button>
              <button className="border border-2 rounded-[5px] p-[5px] w-[50px]">
                XXL
              </button>
            </div>
            <div className="flex gap-[20px] mt-[5px]">
              <p>Quantity</p>
              <input
                type="text"
                placeholder="01"
                className="border w-[30px] px-[4px] rounded-sm"
              />
            </div>
          </div>
          <div className="flex gap-[2rem]">
            <button className="w-[200px] border p-[5px] bg-[#333333] text-white font-bold rounded-lg">
              ADD TO CART
            </button>
            <button className="w-[200px] border border-2 p-[5px] bg-[#FFFFF] text-[#333333] font-bold rounded-lg">
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
          <div>
            <button className="border w-[100%] p-[7px] border-[1px] flex items-center justify-between px-[20px] rounded-lg">
              <p className="justify-self-satrt">Product Details</p>
              <Image src={dropDown} />
            </button>
            <button className="border w-[100%] p-[7px] border-[1px] flex items-center justify-between px-[20px] rounded-lg">
              <p className="justify-self-satrt">Product Description</p>
              <Image src={dropDown} />
            </button>
            <button className="border w-[100%] p-[7px] border-[1px] flex items-center justify-between px-[20px] rounded-lg">
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
