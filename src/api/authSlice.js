import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { currentAPI } from "../config";
import { setAuthToken } from "../redux/auth/slice";

const authenticationAPI = `${currentAPI}/auth`;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: authenticationAPI }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (payload) => {
        return {
          url: "/admin/signin",
          method: "POST",
          body: payload,
        };
      },
      onQueryStarted: async (payload, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuthToken(data.data.token));
        } catch (error) {
          //   toast.error("An error occurred, try again!");
          dispatch(setAuthToken(null));
        }
      },
    }),
    verifyEmail: builder.mutation({
      query: (payload) => {
        return {
          url: "/user/send-otp",
          method: "POST",
          body: payload,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (payload) => {
        return {
          url: "/admin/reset-password",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,
} = authApi;
