import React, { useState } from "react";
import './adminmain.css'
import AddImage from '../addimage/AddImage'
import ImageDetail from '../details/ImgDetail'
import ContactDetail from "../contactdetail/ContactDetail";


import { useAuth } from "../../../app-manager/login/AuthProvider";
import Logout from "../../../admin/Logout";

export default function AdminMain() {
  const auth = useAuth();
  const {userName} = auth;
const [page,setPage] = useState('dashboard')
  const handleDiv = (value)=>{
    setPage(value);
  }

  return (
    <div id="adpage">
      <div className="sidebar">
      <div >
      <p >Hello {userName}</p>
        <Logout/>
      </div>
        <div onClick={()=>handleDiv('dashboard')}><span >Dashboard</span></div>
        <div onClick={()=>handleDiv('image')}><span>Add Image</span></div>
        <div onClick={()=>handleDiv('imageDetail')}><span>Manage Image</span></div>
        <div onClick={()=>handleDiv('contactDetail')}><span>Contact List</span></div>
        <div><span>Join List</span></div>
      </div>
      <div className="main">
        {page === 'dashboard' && <div>Dashboard</div>}
        {page === 'image' && <div><AddImage/></div>}
        {page === 'imageDetail' && <div><ImageDetail/></div>}
        {page === 'contactDetail' && <div><ContactDetail/></div>}
        
      </div>
    </div>
  );
}
