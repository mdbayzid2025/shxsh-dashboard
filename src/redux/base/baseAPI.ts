// import { createApi } from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    
    baseUrl: "https://api.shxshofficial.com/api/v1",    
    // baseUrl: "http://10.10.7.48:5005/api/v1",    
    prepareHeaders: (headers) => {
      headers.set("ngrok-skip-browser-warning", "true");
      const token = Cookies.get("accessToken");
            
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),
  endpoints: () => ({}),
  tagTypes: ["user", "notifications"],
});

export const imageUrl = "https://api.shxshofficial.com";
// export const imageUrl = "http://10.10.7.48:5005";

