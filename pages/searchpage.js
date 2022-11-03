import React,{useState,useEffect} from "react";
import Header from "../components/Header";
import Image from "next/image";
import rightarrow from "../public/assets/searchpage/rightArror.png";
import MenCloth from "../public/assets/landingPage/menCloth.png";
import heart from "../public/assets/landingPage/heart2.png";
import star from "../public/assets/searchpage/start.png";
import { withRouter } from 'next/router'
const Searchpage = (props) => {


  const [menCheck,setMenCheck]=useState(false)
  const [womenCheck,setWomenCheck]=useState(false)

  const [menShirtCheck,setMenShirtCheck]=useState(false)
  const [menTshirtCheck,setMenTshirtCheck]=useState(false)
  const [menJeansCheck,setMenJeansCheck]=useState(false)

  const [womenJeansCheck,setWomenJeansCheck]=useState(false)
  const [womenOnePieceCheck,setWomenOnePieceCheck]=useState(false)
  const [womenShirtCheck,setWomenShirtCheck]=useState(false)
  const [womenTshirtCheck,setWomenTshirtCheck]=useState(false)

  useEffect(()=>{
    //console.log(props.router.query.type)
    if(props.router.query.type=="men")
    {
      setMenCheck(true)
      setWomenCheck(false)
    }
    else if(props.router.query.type=="women")
    {
      setWomenCheck(true)
      setMenCheck(false)
    }
  },[props.router.query])


  return (
    <div className="w-[100vw] flex flex-col items-center">
      <Header bgColor="#FFFFFF" />
      <div className="w-[85%]    flex justify-between mt-[30px] ">
        <div className="w-[25%] max-h-[550px] border shadow-xl rounded-[15px] flex flex-col items-center justify-around py-[10px]">
          <div className="border rounded-[15px] p-[20px] w-[80%] flex flex-col justify-between h-[25%] gap-[15px]">
            <div className="font-bold">Title</div>
            <div className="flex flex-col gap-[5px] text-[#7B7B7B]">
              <div className="flex justify-between">
                <div>
                  <input checked={menCheck} onChange={(e)=>{setMenCheck(e.target.checked)}} type="checkbox" /> Men
                </div>
                <div>
                  <Image alt="image" src={rightarrow} />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <input checked={womenCheck} onChange={(e)=>{setWomenCheck(e.target.checked)}} type="checkbox" /> Women
                </div>
                <div>
                  <Image alt="image" src={rightarrow} />
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-[15px] p-[20px] w-[80%] flex flex-col justify-between min-h-[25%] gap-[15px] ">
            <div className="font-bold">Men</div>
            <div className="flex flex-col gap-[5px] text-[#7B7B7B]">
              <div className="flex justify-between">
                <div>
                  <input checked={menTshirtCheck} onChange={(e)=>{setMenTshirtCheck(e.target.checked)}} type="checkbox" /> T-shirt
                </div>
                <div>
                  <Image alt="image" src={rightarrow} />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <input checked={menShirtCheck} onChange={(e)=>{setMenShirtCheck(e.target.checked)}} type="checkbox" /> Shirt
                </div>
                <div>
                  <Image alt="image" src={rightarrow} />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <input checked={menJeansCheck} onChange={(e)=>{setMenJeansCheck(e.target.checked)}} type="checkbox" /> Jeans
                </div>
                <div>
                  <Image alt="image" src={rightarrow} />
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-[15px] p-[20px] w-[80%] flex flex-col justify-between min-h-[25%] gap-[15px]">
            <div className="font-bold">Women</div>
            <div className="flex flex-col gap-[5px] text-[#7B7B7B]">
              <div className="flex justify-between">
                <div>
                  <input checked={womenJeansCheck} onChange={(e)=>{setWomenJeansCheck(e.target.checked)}} type="checkbox" /> Jeans
                </div>
                <div>
                  <Image alt="image" src={rightarrow} />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <input checked={womenOnePieceCheck} onChange={(e)=>{setWomenOnePieceCheck(e.target.checked)}} type="checkbox" /> One-piece
                </div>
                <div>
                  <Image alt="image" src={rightarrow} />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <input checked={womenShirtCheck} onChange={(e)=>{setWomenShirtCheck(e.target.checked)}} type="checkbox" /> Shirt
                </div>
                <div>
                  <Image alt="image" src={rightarrow} />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <input checked={womenTshirtCheck} onChange={(e)=>{setWomenTshirtCheck(e.target.checked)}} type="checkbox" /> T-shirt
                </div>
                <div>
                  <Image alt="image" src={rightarrow} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%]   flex flex-col justify-between gap-[20px]">
          <input
            type="text"
            name=""
            placeholder="Search..."
            id=""
            className="w-[100%] h-[50px] rounded-[100px] px-[20px] shadow-xl border"
          />
          <div className="w-[100%] mt-[20px] h-[100%] grid grid-cols-3 gap-[20px]">
            <div className=" border-[#F7F7F7] border-[2px] p-[5px] flex flex-col justify-around rounded-[7px]">
              <div className="">
                <Image alt="image" src={MenCloth} height={300} width={300} />
              </div>
              <div className="px-[10px]">
                <div>
                  <p className="text-[12px] text-[#A8A8A8]">Small Text</p>
                  <p className="text-[14px]">Small Text</p>
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
                  <p className="font-bold">79.99$</p>
                  <div className="w-[12px] ">
                    <Image alt="image" src={heart} width={20} />
                  </div>
                  <a
                    href="#"
                    className="border p-[3px] border-[#D9D9D9] text-[12px] w-[70px] text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className=" border-[#F7F7F7] border-[2px] p-[5px] flex flex-col justify-around rounded-[7px]">
              <div className="">
                <Image alt="image" src={MenCloth} height={300} width={300} />
              </div>
              <div className="px-[10px]">
                <div>
                  <p className="text-[12px] text-[#A8A8A8]">Small Text</p>
                  <p className="text-[14px]">Small Text</p>
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
                  <p className="font-bold">79.99$</p>
                  <div className="w-[12px] ">
                    <Image alt="image" src={heart} width={20} />
                  </div>
                  <a
                    href="#"
                    className="border p-[3px] border-[#D9D9D9] text-[12px] w-[70px] text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className=" border-[#F7F7F7] border-[2px] p-[5px] flex flex-col justify-around rounded-[7px]">
              <div className="">
                <Image alt="image" src={MenCloth} height={300} width={300} />
              </div>
              <div className="px-[10px]">
                <div>
                  <p className="text-[12px] text-[#A8A8A8]">Small Text</p>
                  <p className="text-[14px]">Small Text</p>
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
                  <p className="font-bold">79.99$</p>
                  <div className="w-[12px] ">
                    <Image alt="image" src={heart} width={20} />
                  </div>
                  <a
                    href="#"
                    className="border p-[3px] border-[#D9D9D9] text-[12px] w-[70px] text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className=" border-[#F7F7F7] border-[2px] p-[5px] flex flex-col justify-around rounded-[7px]">
              <div className="">
                <Image alt="image" src={MenCloth} height={300} width={300} />
              </div>
              <div className="px-[10px]">
                <div>
                  <p className="text-[12px] text-[#A8A8A8]">Small Text</p>
                  <p className="text-[14px]">Small Text</p>
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
                  <p className="font-bold">79.99$</p>
                  <div className="w-[12px] ">
                    <Image alt="image" src={heart} width={20} />
                  </div>
                  <a
                    href="#"
                    className="border p-[3px] border-[#D9D9D9] text-[12px] w-[70px] text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className=" border-[#F7F7F7] border-[2px] p-[5px] flex flex-col justify-around rounded-[7px]">
              <div className="">
                <Image alt="image" src={MenCloth} height={300} width={300} />
              </div>
              <div className="px-[10px]">
                <div>
                  <p className="text-[12px] text-[#A8A8A8]">Small Text</p>
                  <p className="text-[14px]">Small Text</p>
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
                  <p className="font-bold">79.99$</p>
                  <div className="w-[12px] ">
                    <Image alt="image" src={heart} width={20} />
                  </div>
                  <a
                    href="#"
                    className="border p-[3px] border-[#D9D9D9] text-[12px] w-[70px] text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className=" border-[#F7F7F7] border-[2px] p-[5px] flex flex-col justify-around rounded-[7px]">
              <div className="">
                <Image alt="image" src={MenCloth} height={300} width={300} />
              </div>
              <div className="px-[10px]">
                <div>
                  <p className="text-[12px] text-[#A8A8A8]">Small Text</p>
                  <p className="text-[14px]">Small Text</p>
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
                  <p className="font-bold">79.99$</p>
                  <div className="w-[12px] ">
                    <Image alt="image" src={heart} width={20} />
                  </div>
                  <a
                    href="#"
                    className="border p-[3px] border-[#D9D9D9] text-[12px] w-[70px] text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="border-[#F7F7F7] border-[2px] p-[5px] flex flex-col justify-around rounded-[7px]">
              <div className="">
                <Image alt="image" src={MenCloth} height={300} width={300} />
              </div>
              <div className="px-[10px]">
                <div>
                  <p className="text-[12px] text-[#A8A8A8]">Small Text</p>
                  <p className="text-[14px]">Small Text</p>
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
                  <p className="font-bold">79.99$</p>
                  <div className="w-[12px] ">
                    <Image alt="image" src={heart} width={20} />
                  </div>
                  <a
                    href="#"
                    className="border p-[3px] border-[#D9D9D9] text-[12px] w-[70px] text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className=" border-[#F7F7F7] border-[2px] p-[5px] flex flex-col justify-around rounded-[7px]">
              <div className="">
                <Image alt="image" src={MenCloth} height={300} width={300} />
              </div>
              <div className="px-[10px]">
                <div>
                  <p className="text-[12px] text-[#A8A8A8]">Small Text</p>
                  <p className="text-[14px]">Small Text</p>
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
                  <p className="font-bold">79.99$</p>
                  <div className="w-[12px] ">
                    <Image alt="image" src={heart} width={20} />
                  </div>
                  <a
                    href="#"
                    className="border p-[3px] border-[#D9D9D9] text-[12px] w-[70px] text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className=" border-[#F7F7F7] border-[2px] p-[5px] flex flex-col justify-around rounded-[7px]">
              <div className="">
                <Image alt="image" src={MenCloth} height={300} width={300} />
              </div>
              <div className="px-[10px]">
                <div>
                  <p className="text-[12px] text-[#A8A8A8]">Small Text</p>
                  <p className="text-[14px]">Small Text</p>
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
                  <p className="font-bold">79.99$</p>
                  <div className="w-[12px] ">
                    <Image alt="image" src={heart} width={20} />
                  </div>
                  <a
                    href="#"
                    className="border p-[3px] border-[#D9D9D9] text-[12px] w-[70px] text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Searchpage);
