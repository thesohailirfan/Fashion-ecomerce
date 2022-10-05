import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroImg from "../assets/landingPage/Hero.png";
import MenImg from "../assets/landingPage/MenImage.png";
import MenCloth from "../assets/landingPage/menCloth.png";

export default function Home() {
  return (
    <div className="w-[100vw] overflow-x-hidden		flex flex-col items-center">
      <Header />

      {/* carousel Section */}
      <div>
        <Carousel className="w-[99vw] ">
          <div className="">
            <Image src={HeroImg} />
          </div>
          <div>
            <Image src={HeroImg} />
          </div>
          <div>
            <Image src={HeroImg} />
          </div>
        </Carousel>
      </div>

      {/* men section */}

      <div className="w-[90%] h-[95vh] flex justify-between">
        <div className=" w-[30%] h-[90%] flex flex-col text-[30px] text-center justify-between relative">
          <p className="underline font-bold">#Men</p>
          <Image src={MenImg} />
          <button className="absolute bottom-[8%] text-[12px] font-bold bg-white py-[1rem] left-[20%] px-[4rem]">
            SHOP NOW
          </button>
        </div>
        <div className="w-[60%] h-[100%] bg-white flex flex-col justify-between">
          <div className="w-[100%] flex justify-between  w-[59%] flex gap-[2rem]">
            <button className="text-[14px] font-[700] ">All</button>
            <button className="text-[14px] font-[700] text-[#535353]">
              BLAZERS
            </button>
            <button className="text-[14px] font-[700] text-[#535353]">
              JACKETS
            </button>
            <button className="text-[14px] font-[700] text-[#535353]">
              DRESSES
            </button>
            <button className="text-[14px] font-[700] text-[#535353]">
              TROUSERS
            </button>
            <button className="text-[14px] font-[700] text-[#535353]">
              ACCESSORIES
            </button>
          </div>
          <div className="w-[100%] h-[90%] grid grid-cols-3">
            <div className="text-center">
              <Image src={MenCloth} width={230} height={230} />
              <br />
              <p className="text-[14px]">Funnel Collor Puffer Jacket</p>

              <p className="font-bold text-[12px]">$59.00</p>
            </div>
            <div className="text-center">
              <Image src={MenCloth} width={230} height={230} />
              <br />
              <p className="text-[14px]">Funnel Collor Puffer Jacket</p>

              <p className="font-bold text-[12px]">$59.00</p>
            </div>
            <div className="text-center">
              <Image src={MenCloth} width={230} height={230} />
              <br />
              <p className="text-[14px]">Funnel Collor Puffer Jacket</p>

              <p className="font-bold text-[12px]">$59.00</p>
            </div>
            <div className="text-center">
              <Image src={MenCloth} width={230} height={230} />
              <br />
              <p className="text-[14px]">Funnel Collor Puffer Jacket</p>

              <p className="font-bold text-[12px]">$59.00</p>
            </div>
            <div className="text-center">
              <Image src={MenCloth} width={230} height={230} />
              <br />
              <p className="text-[14px]">Funnel Collor Puffer Jacket</p>

              <p className="font-bold text-[12px]">$59.00</p>
            </div>
            <div className="text-center">
              <Image src={MenCloth} width={230} height={230} />
              <br />
              <p className="text-[14px]">Funnel Collor Puffer Jacket</p>

              <p className="font-bold text-[12px]">$59.00</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
