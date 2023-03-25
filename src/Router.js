import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./admin/Login";
// import ProtectedRoute from "./app-manager/login/ProtectedRoute";
import Contact from "./component/Contact";
import Landing from "./component/Landing";
import AddImage from "./component/AddImage";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/join" element={<Contact />} />
      <Route path="/admin" element={<Login />} />
      <Route path="/addimage" element={<AddImage />} />
    </Routes>
  );
}
