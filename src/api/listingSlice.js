import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { currentAPI } from "../config";

const listingAPI = `${currentAPI}/dashboard/admin`;

export const listingApi = createApi({
  reducerPath: "listingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: listingAPI,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["AllListings", "UserListings"],
  endpoints: (builder) => ({
    getAllListings: builder.query({
      query: (params) => {
        return {
          url: "/listings",
          method: "GET",
          params: { ...params },
        };
      },
      providesTags: ["AllListings"],
    }),
    getListing: builder.query({
      query: (id) => {
        return {
          url: `/listing/${id}`,
          method: "GET",
        };
      },
      providesTags: ["UserListings"],
    }),
    modifyListingStatus: builder.mutation({
      query: ({ payload, id }) => {
        return {
          url: `/verify-unverify/${id}`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["AllListings", "UserListings"],
    }),
  }),
});

export const {
  useGetAllListingsQuery,
  useGetListingQuery,
  useModifyListingStatusMutation,
} = listingApi;
