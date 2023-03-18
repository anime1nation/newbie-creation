import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const logout = async (token, sessionId, username) => {
  const data = axios({
    method: "GET",
    url: "https://hm5m25z57j.execute-api.us-east-2.amazonaws.com/production/auth/logout",
    headers: {
      Authorization: "Bearer " + token,
    },
    params: {
      suid: sessionId,
      cid: username,
    },
  });
  return data;
};

export const useLogout = (token, sessionId, username, dispatch) =>
  useQuery({
    queryKey: ["Logout"],
    queryFn: () => logout(token, sessionId, username),
    retry: 0,
    onSuccess: () => dispatch({ type: "LOGOUT" }),
    enabled: false,
  });
