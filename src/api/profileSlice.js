import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { currentAPI } from "../config";

const profileAPI = `${currentAPI}/profile`;

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: profileAPI,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAdminProfile: builder.query({
      query: () => {
        return {
          url: "/admin",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAdminProfileQuery } = profileApi;
