import React,{useState,useEffect} from "react";
import Image from "next/image";
import Header from "../components/Header";
import bgImg from "../public/assets/profile/bgImg.png";
import cImg from "../public/assets/profile/circleImg.png";
import powerImg from "../public/assets/profile/powerImg.png";
import delImg from "../public/assets/profile/delImg.png";
import eImg from "../public/assets/profile/editImg.png";
import arrowImg from "../public/assets/profile/arrow.png";
import profileImg from "../public/assets/profile/profile.png";
import {toast} from "react-toastify"
import axios from "axios";

const Profile = () => {

  const [fName,setFName]=useState("")
  const [mName,setMName]=useState("")
  const [lName,setLName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [city,setCity]=useState("")
  const [state,setState]=useState("")

  const getUserData=()=>{
    const token=sessionStorage.getItem("token")
    var config = {
      method: 'get',
      url: 'http://localhost:5000/api/user',
      headers: { 
        'Authorization': 'Bearer '+token
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      let d=response.data.data
      setFName(d.firstName)
      setMName(d.middleName)
      setLName(d.lastName)
      setEmail(d.email)
      setPhone(d.phone)
      setState(d.state)
      setCity(d.city)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const updateUserData=()=>{
    var data = JSON.stringify({
      "firstName": fName,
      "middleName": mName,
      "lastName": lName,
      "phone": phone,
      "state": state,
      "city": city,
      "email": email
    });
    
    var config = {
      method: 'put',
      url: 'http://localhost:5000/api/users',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6IjYzN2ZiMmVkMDg2NzY5NDI5NGQyODA5ZiIsImlhdCI6MTY2OTMxMzI2Mn0.KkvBSvaiTC3KmZZ_KtdZSlxscWu75Zv2ytydLbuUDFs', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(async function (response) {
      console.log(JSON.stringify(response.data));
      toast.success("Profile Succesfully Updated")
      getUserData()
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  useEffect(()=>{
    getUserData()
  },[])

  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center gap-[40px] bg-[#F2F2F2]">
      <Header />
      <div className="w-[95%] min-h-[500px] h-[80vh]  border border-[#CECECE] rounded-[15px] flex p-[20px] bg-white">
        <div className="w-[30%] h-[100%] border border-l-[0px] border-t-[0px] border-b-[0px] flex flex-col items-center justify-around gap-[15px] ">
          <div className=" w-[100%] flex flex-col items-center gap-[10px]">
            <p className="text-[#AAAAAA] text-[18px]">Your Profile</p>
            <div className="w-[120px]">
              <Image src={profileImg} alt="profile image" />
            </div>
            <div className="text-center">
              <p className="font-[600] text-[20px] text-[#000000]">
                Anirban Roy
              </p>
              <a
                className="text-[#C0C0C0] shadow-lg border-[#C0C0C0] text-[13px]"
                href="#"
              >
                (Click to change your photo)
              </a>
            </div>
          </div>
          <hr className="w-[90%]" />
          <div className="flex flex-col h-[50%] justify-around max-h-[200px]">
            <a className="text-[13px] font-bold" href="#">
              Order History
            </a>
            <a className="text-[13px] font-bold" href="#">
              Help Centre
            </a>
            <a className="text-[13px] font-bold" href="#">
              Saved Cards
            </a>
            <a className="text-[13px] font-bold" href="#">
              Coupouns
            </a>
            <a className="text-[13px] font-bold" href="#">
              Manage your account
            </a>
          </div>
        </div>
        <div className=" h-[100%] w-[70%] text-center ">
          <div>
            <p className="text-[#AAAAAA] text-[18px]">Account Settings</p>
          </div>
          <div className="flex flex-col gap-[30px] mt-[20px] px-[3rem]">
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">First Name</p>
              <input
                value={fName}
                onChange={(e)=>{setFName(e.target.value)}}
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Middle Name</p>
              <input
               value={mName}
               onChange={(e)=>{setMName(e.target.value)}}
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Last Name</p>
              <input
               value={lName}
               onChange={(e)=>{setLName(e.target.value)}}
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Phone No</p>
              <input
               value={phone}
               onChange={(e)=>{setPhone(e.target.value)}}
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">Email Address</p>
              <input
               value={email}
               onChange={(e)=>{setEmail(e.target.value)}}
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">State</p>
              <input
               value={state}
               onChange={(e)=>{setState(e.target.value)}}
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <div className="flex justify-between w-[50%]">
              <p className="font-bold">City</p>
              <input
               value={city}
               onChange={(e)=>{setCity(e.target.value)}}
                type="text"
                className="border-[#CECECE] border-[2px] rounded-[5px] w-[65%]"
              />
            </div>
            <p
          className="border p-[3px] border-[#D9D9D9] text-[12px] w-[70px] text-center"
          onClick={updateUserData}
        >
          Save Changes
        </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
