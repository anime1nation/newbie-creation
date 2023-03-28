import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function verify(sessionId, token, username) {
  const data = await axios({
    method: "GET",
    url: "https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/auth/verify",
    headers: {
      Authorization: "Bearer " + token,
    },
    params: {
      cid: username,
      suid: sessionId,
    },
  });
  return data.data;
}
export const useVerify = (sessionId, token, username, dispatch) =>
  useQuery({
    queryKey: ["verify-session"],
    queryFn: () => verify(sessionId, token, username),
    retry: 0,
    // refetchIntervalInBackground: true,
    // refetchInterval: 2500,
    onError: () => {
      dispatch({ type: "LOGOUT" });
    },
  });
