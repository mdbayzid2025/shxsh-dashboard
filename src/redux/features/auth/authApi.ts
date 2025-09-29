import { baseApi } from "../../base/baseAPI";
import Cookies from "js-cookie";

export type UserType = {
  _id: string;
  name: string;
  role: string;
  email: string;
  password: string;
  image: string;
  status: string;
  verified: boolean;
  contact?: string;
};

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    adminLogin: build.mutation({
      query: (data) => ({
        url: "/auth/admin-login",
        method: "POST",
        body: data,
      }),
      transformResponse: (res: {data:any})=> res?.data,
    }),
    getProfile: build.query({
      query: () => ({
        url: "/user/profile",
      }),
      transformResponse: (res: { data: UserType }) => res?.data,
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),

    forgetPassword: build.mutation({
      query: (data) => {
        return {
          // url: "/auth/forgot-password",          
          url: "/auth/forget-password",          
          method: "POST",
          body: data,
        };
      },
    }),
    verifyOTP: build.mutation({
      query: (data) => {
        return {
          url: "/auth/verify-otp",
          method: "POST",
          body: data,
        };
      },
    }),
    // reset password
    resetPassword: build.mutation({      
      query: ({resetToken, ...data}) => {

       return {
        url: "/auth/reset-password",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",          
          Authorization: `${Cookies.get("resetToken")}`, 
        },                    
        }      
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterUserMutation,
  useChangePasswordMutation,

  useAdminLoginMutation,
  useResetPasswordMutation,
  useVerifyOTPMutation,
  useForgetPasswordMutation,
  useGetProfileQuery,
} = authApi;
