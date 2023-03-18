import React from "react";
import "./adminbutton.css";

export const AdminButton = ({ children, onClick, type, sending, disabled }) => {
  return (
    <button
      disabled={sending ? sending : false}
      type={type ? type : "button"}
      className={sending ? "load" : "panel_btn"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
