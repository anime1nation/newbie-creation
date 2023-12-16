import React from 'react'
import { useAuth, useAuthDispatch } from '../app-manager/login/AuthProvider';
import { useLogout } from '../app-manager/login/logout';
// import { useVerify } from '../app-manager/login/sessionverify';
import './logout.css'

export default function Logout(){
  
    const { token, sessionId, userName } = useAuth();
    const dispatch = useAuthDispatch();
    const { refetch: logout, isFetching } = useLogout(
        token,
        sessionId,
        userName,
        dispatch
      );
    // useVerify(sessionId, token, userName, dispatch);
  const logoutHandler = (e) => {
    e.preventDefault();
    logout();
  };
    return (
      <button id='button' sending={isFetching} onClick={logoutHandler}>Log Out</button>
    )
  }
