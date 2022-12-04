import React,{useState,useEffect} from "react";
import Image from "next/image";
import profileImg from "../public/assets/profile/profile.png";
import axios from "axios";
import {toast} from "react-toastify"

const Admin = () => {

  const [name,setName]=useState("")
  const [price,setPrice]=useState(0)
  const [men,setMen]=useState(true)
  const [type,setType]=useState("tshirt")
  const [imageURL,setImageURL]=useState("")
 

  const [file,setFile]=useState(null)
  const [image,setImage]=useState(null)

  const selectImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
      setImage(URL.createObjectURL(event.target.files[0])) 
    }
  }

  const uploadImage=()=>{

    var headers = new Headers();
headers.append("Cookie", "PHPSESSID=v0tcglvtjsvtca0k7i4ks8mdjh");
headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

    var formdata=new FormData()

formdata.append("source", file,image);

var requestOptions = {
  method: 'POST',
  headers: headers,
  body: formdata,
  redirect: 'follow'
};

fetch("https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }


  const uploadProduct=()=>{

var data = JSON.stringify({
  "name": name,
  "price": price,
  "men": (men=="true"||men==true),
  "image": imageURL,
  "type": type
});

var config = {
  method: 'post',
  url: 'http://localhost:5000/api/product',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
  toast.success("Product Successfully Uploaded")
  setName("")
  setPrice(0)
  setImageURL("")
  setMen(true)
  setType("tshirt")
})
.catch(function (error) {
  toast.error("Product Upload Failed. Error:"+error.message)
  console.log(error);
});

  }



  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center gap-[40px] bg-[#F2F2F2]">
      <div className="w-[95%] min-h-[500px] h-[80vh]  flex p-[20px]">
        <div className="w-[30%] h-[100%] border border-l-[0px] border-t-[0px] border-b-[0px] flex flex-col items-center justify-around gap-[15px] ">
          <div className=" w-[100%] flex flex-col items-center gap-[10px]">
            <p className="text-[#AAAAAA] text-[18px]">Product Image</p>
            <div className="w-[120px]">
              {image?<Image src={image} alt="profile image" width={300} height={300} style={{borderRadius:125}} />:<Image src={profileImg} alt="profile image" />} 
            </div>
            <div className="text-center">
              <input
              onChange={selectImage}
              type={"file"}
                className="text-[#C0C0C0] shadow-lg border-[#C0C0C0] text-[13px]"
              />
            </div>
          </div>
          <hr className="w-[90%]"/>
          <div className="flex flex-col h-[50%] justify-around max-h-[200px]">
            <p className="text-[13px] font-bold">
              Add Product
            </p>
            <p className="text-[13px] font-bold">
              Edit Product
            </p>
            <p className="text-[13px] font-bold">
              All Users
            </p>
          </div>
        </div>
        <div className=" h-[100%] w-[70%] text-left ">
          <div>
            <p className="text-[#AAAAAA] text-[18px] ml-10">Product Details</p>
          </div>
          <div className="flex flex-col gap-[30px] mt-[20px] px-[3rem]">
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Name</p>
              <input
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Price</p>
              <input
               value={price}
               onChange={(e)=>{setPrice(e.target.value)}}
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Image URL {"("}Optional{")"}</p>
              <input
               value={imageURL}
               onChange={(e)=>{setImageURL(e.target.value)}}
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Men/Women</p>
             <select value={men} onChange={(e)=>{setMen(e.target.value)}}>
              <option value={true}>Men</option>
              <option value={false}>Women</option>
             </select>
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Type</p>
              <select value={type} onChange={(e)=>{setType(e.target.value)}}>
              <option value={"tshirt"}>T-Shirt</option>
              <option value={"shirt"}>Shirt</option>
              <option value={"jeans"}>Jeans</option>
              {men=="true"?null:<option value={"onepiece"}>One Piece</option>}
             </select>
            </div>
            <p
          className="border p-[3px] border-[#D9D9D9] text-[12px] w-[70px] text-center"
          onClick={uploadProduct}
        >
          Add Product
        </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
