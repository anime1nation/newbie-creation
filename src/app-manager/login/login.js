import {useQuery} from "@tanstack/react-query";
import axios from "axios";


const login = async (userName,passKey) => {
    const data = await axios({
        method:"GET",
        url:"https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/auth/login",
        auth: {
            username: userName,
            password: passKey,
          },
    });
    return data;
};

export const useLoginData = (userName,passKey,dispatch)=>
useQuery({
    queryKey:["Login_detail"],
    queryFn:()=>login(userName,passKey,dispatch),
    retry: 0,
    onSuccess: (data) => {
        dispatch({ type: "SET_TOKEN", payload: data.data.token });
        dispatch({ type: "SET_SESSION", payload: data.data.sessionId });
      },
    onError:(err)=>{
        if(err.response.data === "unauthorized")
        dispatch({type:"Wrong_Cred"});
    },
    enabled: false,
});