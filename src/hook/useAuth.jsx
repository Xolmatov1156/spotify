import { useEffect, useState } from "react";
import { useAxios } from "./useAxios";

export const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState("");
  
  useEffect(() => {
    if (code) {
      useAxios().post("/login", { code }).then((res) => {
        setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        window.location = "/";
      });
    }
  }, []);

  return accessToken;
};