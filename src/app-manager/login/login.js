import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const login = async (userName,passKey) => {
    const data = await axios({
        method:"GET",
        url:"",
        auth:{
            username:userName,
            password:passKey,
        },
    });
    console.log(data)
    return data;
}

export const useLoginData = (userName,passKey,dispatch)=>
useQuery({
    queryKey:["Login_detail"],
    queryFn:()=>login(userName,passKey,dispatch),
    retry: 0,
    onSucess:(data)=>{
        dispatch({ type: "SET_TOKEN",payload: data.data.token});
        dispatch({ type: "SET_SESSION",payload: data.data.token});
    },
    onError:(err)=>{
        if(err.response.data === "session already running")
        dispatch({type:"SET_SESSION_RUNNING"});
    },
    enabled: false,
});