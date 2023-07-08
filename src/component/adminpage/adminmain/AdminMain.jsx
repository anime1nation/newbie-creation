import React, { useState } from "react";
import './adminmain.css'
import AddImage from '../addimage/AddImage'
import ImageDetail from '../details/ImgDetail'
import ContactDetail from "../contactdetail/ContactDetail";
import JoinDetail from "../contactdetail/JoinDetail";
import AddVideo from "../addVideo/AddVideo";
import line from '../../../assets/3line.svg';

import { useAuth } from "../../../app-manager/login/AuthProvider";
import Logout from "../../../admin/Logout";

export function SideMenu({setPage}) {
  const auth = useAuth();
  const { userName } = auth;
  
  const handleDiv = (value) => {
    setPage(value);
  }
  return (
    <>
        <div className="sidebar">
          <div className="menu">
          <div onClick={() => handleDiv('dashboard')} className="btn" ><span className="spa">Dashboard</span></div>
          <div onClick={() => handleDiv('image')} className="btn" ><span className="spa">Add Image</span></div>
          <div onClick={() => handleDiv('video')} className="btn" ><span className="spa">Add video</span></div>
          <div onClick={() => handleDiv('imageDetail')} className="btn" ><span className="spa">Manage Image</span></div>
          <div onClick={() => handleDiv('contactDetail')} className="btn" ><span className="spa">Contact List</span></div>
          <div onClick={() => handleDiv('joinDetail')} className="btn" ><span className="spa">Join List</span></div>
          </div>
          <div className="user">
            <span>Hello {userName}</span>
            <Logout />
          </div>
        </div>
    </>
  )
}

export function Main({page}) {
  return (
    <div className="main">
      {page === 'dashboard' && <div>Dashboard</div>}
      {page === 'image' && <div><AddImage /></div>}
      {page === 'video' && <div><AddVideo /></div>}
      {page === 'imageDetail' && <div><ImageDetail /></div>}
      {page === 'contactDetail' && <div><ContactDetail /></div>}
      {page === 'joinDetail' && <div><JoinDetail /></div>}
    </div>
  )
}

export default function AdminMain() {
  const [page, setPage] = useState('dashboard')
  const [menu, setMenu] = useState(false);

  return (
    <>
    <div id="adpage">
      <div className="mobSide" onClick={() => setMenu(!menu)}>
        <img src={line} alt='line' />
      {menu && <SideMenu setPage={setPage} />
      }
      </div>
      <div className="deskSide">
        <SideMenu setPage={setPage}/>
      </div>
      <Main page={page} />
      </div>
    </>

  );
}
