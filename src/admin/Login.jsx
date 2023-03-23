import React from "react";
import { useAuth, useAuthDispatch } from "../app-manager/login/AuthProvider";
import { useLoginData } from "../app-manager/login/login";
import { AdminButton } from "../common/AdminButton";
import AddImage from "../component/AddImage"
import "./Login.css";


export default function Login() {
  const auth = useAuth();
  console.log(auth)
  const {userName,passKey} = auth;
  const dispatch = useAuthDispatch();

  const { refetch: login, isFetching: logging } = useLoginData(
    userName,
    passKey,
    dispatch
  );
  
  const setUserName=(e)=>{
    dispatch({type:"USERNAME", payload:e.target.value})
  };
  const setPassKey=(e)=>{
    dispatch({type:"PASSKEY", payload:e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  if(auth.token){
    return <AddImage/>
  }
  return (
    <div id="login_page">
      <div className="login_container">
        <form onSubmit={handleSubmit} className="login-card">
          <h2>Admin Login</h2>
          <label>
            Username
            <input
              required
              type="text"
              className="user"
              onChange={setUserName}
            />
          </label>
          <label>
            Password
            <input
              required
              type="password"
              className="user"
              onChange={setPassKey}
            />
          </label>
          <AdminButton sending={logging} className="login_button" type="submit">
            Login
          </AdminButton>
        </form>
      </div>
      
      {auth.wrongcred && (
        
        <label>Wrong Password</label>
      )}
    </div>
  );
}
