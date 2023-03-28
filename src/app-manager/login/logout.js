import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const logout = async (token, sessionId, userName) => {
  const data = axios({
    method: "GET",
    url: "https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/auth/logout",
    headers: {
      Authorization: "Bearer " + token,
    },
    params: {
      suid: sessionId,
      cid: userName,
    },
  });
  return data;
};

export const useLogout = (token, sessionId, userName, dispatch) =>
  useQuery({
    queryKey: ["Logout"],
    queryFn: () => logout(token, sessionId, userName),
    retry: 0,
    onSuccess: () => dispatch({ type: "LOGOUT" }),
    enabled: false,
  });
