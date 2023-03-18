import React, { useEffect,useState } from 'react'
import "./feed.css"

export default function Feedback({content,status}){
    const[active,setActive] =useState(true);
    useEffect(()=>{
        const tick = setTimeout(()=>{
            setActive(false);
        },);
        return()=>{
            clearTimeout(tick);
        };
    },[]);
    return (
      <div id={`Feedback`} className={active ? `active ${status}`:""}>
        <p>{content}</p>
      </div>
    )
  }
