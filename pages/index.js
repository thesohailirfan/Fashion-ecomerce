import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImg from "../assets/landingPage/hero.png";
import MenImg from "../assets/landingPage/menImage.png";
import womenImg from "../assets/landingPage/womenImg.png";
import MenCloth from "../assets/landingPage/menCloth.png";
import newArrivals from "../assets/landingPage/newArrivals.png";
import menSale from "../assets/landingPage/menSale.png";
import womanSale from "../assets/landingPage/womanSale.png";
import saleBanner from "../assets/landingPage/saleBanner.png";

// const handleDragStart = (e) => e.preventDefault();
const items = [
  <Image key={1} src={HeroImg} role="presentation" />,
  <Image key={2} src={HeroImg} role="presentation" />,
  <Image key={3} src={HeroImg} role="presentation" />,
];

export default function Home() {
  return (
    <div className="w-[100%]  overflow-x-hidden		flex flex-col items-center">
      <Header />

      {/* carousel Section */}
      <div className="w-[100%]">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay={true}
          infinite={true}
          autoPlayInterval={2000}
        />
      </div>

      {/* men section */}

      <div className="w-[90%] h-[95vh] flex justify-between mt-[50px]">
        <div className=" w-[30%] h-[90%] flex flex-col text-[30px] text-center justify-between relative">
          <p className="underline font-bold">Men</p>
          <Image src={MenImg} />
          <a
            className="absolute bottom-[8%] text-[12px] font-bold bg-white py-[1rem] left-[20%] px-[4rem]"
            href="#"
          >
            SHOP NOW
          </a>
        </div>
        <div className="w-[60%] h-[100%] bg-white flex flex-col justify-between">
          <div className="w-[100%] flex justify-between  w-[59%] flex gap-[2rem]">
            <a href="#" className="text-[14px] font-[700] ">
              All
            </a>
            <a href="#" className="text-[14px] font-[700] text-[#535353]">
              BLAZERS
            </a>
            <a href="#" className="text-[14px] font-[700] text-[#535353]">
              JACKETS
            </a>
            <a href="#" className="text-[14px] font-[700] text-[#535353]">
              DRESSES
            </a>
            <a href="#" className="text-[14px] font-[700] text-[#535353]">
              TROUSERS
            </a>
            <a href="#" className="text-[14px] font-[700] text-[#535353]">
              ACCESSORIES
            </a>
          </div>
          <div className="w-[100%] h-[90%] grid grid-cols-3">
            <div className="text-center flex flex-col">
              <div className="w-[100%] ">
                <Image src={MenCloth} width={200} height={200} />
              </div>

              <br />
              <a href="#" className="text-[15px]">
                Funnel Collor Puffer Jacket
              </a>

              <a href="#" className="font-bold text-[13px]">
                $59.00
              </a>
            </div>
            <div className="text-center flex flex-col">
              <div>
                <Image src={MenCloth} width={200} height={200} />
              </div>

              <br />
              <a href="#" className="text-[15px]">
                Funnel Collor Puffer Jacket
              </a>

              <a href="#" className="font-bold text-[13px]">
                $59.00
              </a>
            </div>
            <div className="text-center flex flex-col">
              <div>
                <Image src={MenCloth} width={200} height={200} />
              </div>

              <br />
              <a href="#" className="text-[15px]">
                Funnel Collor Puffer Jacket
              </a>

              <a href="#" className="font-bold text-[13px]">
                $59.00
              </a>
            </div>
            <div className="text-center flex flex-col">
              <div>
                <Image src={MenCloth} width={200} height={200} />
              </div>

              <br />
              <a href="#" className="text-[15px]">
                Funnel Collor Puffer Jacket
              </a>

              <a href="#" className="font-bold text-[13px]">
                $59.00
              </a>
            </div>
            <div className="text-center flex flex-col">
              <div>
                <Image src={MenCloth} width={200} height={200} />
              </div>

              <br />
              <a href="#" className="text-[15px]">
                Funnel Collor Puffer Jacket
              </a>

              <a href="#" className="font-bold text-[13px]">
                $59.00
              </a>
            </div>
            <div className="text-center flex flex-col">
              <div>
                <Image src={MenCloth} width={200} height={200} />
              </div>

              <br />
              <a href="#" className="text-[15px]">
                Funnel Collor Puffer Jacket
              </a>

              <a href="#" className="font-bold text-[13px]">
                $59.00
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* new arrivals */}

      <div className="w-[90%] h-[45vh]  mt-[100px] relative">
        <Image src={newArrivals} />
        <div className="text-center w-[150px] absolute bottom-[40%] left-[20%] ">
          <p className="border w-[150px] text-[22px] bg-[#333333] text-white font-bold">
            #newarrivals
          </p>
          <a className="underline text-black font-bold">show now</a>
        </div>
      </div>

      {/* women section */}

      <div className="w-[90%] h-[95vh] flex justify-between mt-[100px]">
        <div className="w-[60%] h-[100%] bg-white flex flex-col justify-between">
          <div className="w-[100%] flex justify-between  w-[59%] flex gap-[2rem]">
            <a href="#" className="text-[14px] font-[700] ">
              All
            </a>
            <a href="#" className="text-[14px] font-[700] text-[#535353]">
              BLAZERS
            </a>
            <a href="#" className="text-[14px] font-[700] text-[#535353]">
              JACKETS
            </a>
            <a href="#" className="text-[14px] font-[700] text-[#535353]">
              DRESSES
            </a>
            <a href="#" className="text-[14px] font-[700] text-[#535353]">
              TROUSERS
            </a>
            <a href="#" className="text-[14px] font-[700] text-[#535353]">
              ACCESSORIES
            </a>
          </div>
          <div className="w-[100%] h-[90%] grid grid-cols-3">
            <div className="text-center flex flex-col">
              <div>
                <Image src={MenCloth} width={200} height={200} />
              </div>

              <br />
              <a href="#" className="text-[15px]">
                Funnel Collor Puffer Jacket
              </a>

              <a href="#" className="font-bold text-[13px]">
                $59.00
              </a>
            </div>
            <div className="text-center flex flex-col">
              <div>
                <Image src={MenCloth} width={200} height={200} />
              </div>

              <br />
              <a href="#" className="text-[15px]">
                Funnel Collor Puffer Jacket
              </a>

              <a href="#" className="font-bold text-[13px]">
                $59.00
              </a>
            </div>
            <div className="text-center flex flex-col">
              <div>
                <Image src={MenCloth} width={200} height={200} />
              </div>

              <br />
              <a href="#" className="text-[15px]">
                Funnel Collor Puffer Jacket
              </a>

              <a href="#" className="font-bold text-[13px]">
                $59.00
              </a>
            </div>
            <div className="text-center flex flex-col">
              <div>
                <Image src={MenCloth} width={200} height={200} />
              </div>

              <br />
              <a href="#" className="text-[15px]">
                Funnel Collor Puffer Jacket
              </a>

              <a href="#" className="font-bold text-[13px]">
                $59.00
              </a>
            </div>
            <div className="text-center flex flex-col">
              <div>
                <Image src={MenCloth} width={200} height={200} />
              </div>

              <br />
              <a href="#" className="text-[15px]">
                Funnel Collor Puffer Jacket
              </a>

              <a href="#" className="font-bold text-[13px]">
                $59.00
              </a>
            </div>
            <div className="text-center flex flex-col">
              <div>
                <Image src={MenCloth} width={200} height={200} />
              </div>

              <br />
              <a href="#" className="text-[15px]">
                Funnel Collor Puffer Jacket
              </a>

              <a href="#" className="font-bold text-[13px]">
                $59.00
              </a>
            </div>
          </div>
        </div>
        <div className=" w-[30%] h-[90%] flex flex-col text-[30px] text-center justify-between relative">
          <p className="underline font-bold">Women</p>
          <Image src={womenImg} />
          <a
            href="#"
            className="absolute bottom-[8%] text-[12px] font-bold bg-white py-[1rem] left-[20%] px-[4rem]"
          >
            SHOP NOW
          </a>
        </div>
      </div>

      {/* sale */}

      <div className="w-[90%] h-[48vh]  mt-[100px] relative flex ">
        <a href="#" className="w-[100%] h-[45vh] relative">
          <Image src={womanSale} />
        </a>
        <a href="#" className="w-[100%] h-[45vh] relative">
          <Image src={menSale} />
        </a>
        <div className="absolute left-[35%] top-[20%]">
          <Image src={saleBanner} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
