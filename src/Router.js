import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Contact from './component/Contact'
import Landing from './component/Landing'

export default function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/join" element={<Contact/>}/>
    </Routes>
  )
}