import React from "react";
import './adminmain.css'
import AddImage from '../addimage/AddImage'

import { useAuth } from "../../../app-manager/login/AuthProvider";
import Logout from "../../../admin/Logout";

export default function AdminMain() {
  const auth = useAuth();
  const {userName} = auth;

  return (
    <div id="adpage">
      <div className="sidebar">
      <div >
      <p >Hello {userName}</p>
        <Logout/>
      </div>
        <div><span >Dashboard</span></div>
        <div><span>Add Image</span></div>
        <div><span>Manage Image</span></div>
        <div><span>Contact List</span></div>
        <div><span>Join List</span></div>
      </div>
      <div className="main">
        <div><AddImage/></div>
      </div>
    </div>
  );
}
