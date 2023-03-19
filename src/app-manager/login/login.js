import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import FeedbackPage from "../../common/FeedbackPage";

const login = async (userName,passKey) => {
    const data = await axios({
        method:"GET",
        url:"https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/auth/login",
        auth: {
            username: userName,
            password: passKey,
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
        dispatch({type:"Wrong Cred"});
    },
    enabled: false,
});