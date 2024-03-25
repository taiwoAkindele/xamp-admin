import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { currentAPI } from "../config";

const userAPI = `${currentAPI}/dashboard/admin`;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: userAPI,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["AllUsers", "GetUser", "BlockUser"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (params) => {
        return {
          url: `/users`,
          method: "GET",
          params: { ...params },
        };
      },
      providesTags: ["AllUsers"],
    }),
    getUser: builder.query({
      query: (id) => {
        return {
          url: `/user/${id}`,
          method: "GET",
        };
      },
      providesTags: ["GetUser"],
    }),
    blockOrUnblockUser: builder.mutation({
      query: ({ payload, id }) => {
        return {
          url: `/block-unblock/${id}`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["AllUsers", "GetUser"],
      providesTags: ["BlockUser"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useBlockOrUnblockUserMutation,
  useGetUserQuery,
} = userApi;
