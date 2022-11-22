import React,{useState,useEffect} from "react";
import Header from "../components/Header";
import Image from "next/image";
import rightarrow from "../public/assets/searchpage/rightArror.png";
import { withRouter } from 'next/router'
import SearchPageProduct from "../components/SearchPageProduct";
import axios from "axios";

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

  const [search,setSearch]=useState("")

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

  const [products,setProducts]=useState([])
  const [productsToShow,setProductsToShow]=useState([])

  const getProducts=()=>{
    var config = {
      method: 'get',
      url: 'http://localhost:5000/api/product',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
     if((menCheck&&womenCheck)||(!menCheck&&!womenCheck))
     {
      setProducts(response.data.data)
      setProductsToShow(response.data.data)
     }
     else if(menCheck&&!womenCheck)
     {
      setProducts(response.data.data.filter(u=>u.men))
      setProductsToShow(response.data.data.filter(u=>u.men))
     }
     else
     {
      setProducts(response.data.data.filter(u=>!u.men))
      setProductsToShow(response.data.data.filter(u=>!u.men))
     }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(()=>{
    getProducts()
  },[menCheck,womenCheck])

  useEffect(()=>{
    if(search)
    {
      setProductsToShow(products.filter(u=>u.name.toLowerCase().includes(search.toLowerCase())))
    }
    else
    {
      setProductsToShow(products)
    }

  },[search])


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
            placeholder="Search..."
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}  
            className="w-[100%] h-[50px] rounded-[100px] px-[20px] shadow-xl border"
          />
          <div className="w-[100%] mt-[20px] h-[100%] grid grid-cols-3 gap-[20px]">
           {productsToShow.map((item,index)=>{return (<SearchPageProduct key={index} name={item.name} type={item.type} price={item.price} image={item.image}/>)})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Searchpage);
