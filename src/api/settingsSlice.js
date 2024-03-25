import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { currentAPI } from "../config";

const settingsAPI = `${currentAPI}/dashboard/admin`;

export const settingsApi = createApi({
  reducerPath: "settingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: settingsAPI,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "GetAllAdmin",
    "GetTransactionsSettings",
    "GetListingsSettings",
    "GetAdvancedSettings",
  ],
  endpoints: (builder) => ({
    getAdminTeam: builder.query({
      query: () => {
        return {
          url: "/view-admins",
          method: "GET",
        };
      },
      providesTags: ["GetAllAdmin"],
    }),
    deleteAdmin: builder.mutation({
      query: (id) => {
        return {
          url: `/delete-admin/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["GetAllAdmin"],
    }),
    createAdmin: builder.mutation({
      query: (payload) => {
        return {
          url: "/create-admin",
          method: "POST",
          body: payload,
        };
      },
    }),
    getTransactionSettings: builder.query({
      query: () => {
        return {
          url: "/transaction-settings",
          method: "GET",
        };
      },
      providesTags: ["GetTransactionsSettings"],
    }),
    updateTransactionSettings: builder.mutation({
      query: (payload) => {
        return {
          url: "/transaction-settings",
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["GetTransactionsSettings"],
    }),
    getListingsSettings: builder.query({
      query: () => {
        return {
          url: "/listing-settings",
          method: "GET",
        };
      },
      providesTags: ["GetListingsSettings"],
    }),
    updateListingsSettings: builder.mutation({
      query: (payload) => {
        return {
          url: "/listing-settings",
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["GetListingsSettings"],
    }),
    getAdvancedSettings: builder.query({
      query: () => {
        return {
          url: "/advanced-settings",
          method: "GET",
        };
      },
      providesTags: ["GetAdvancedSettings"],
    }),
    updateAdvancedSettings: builder.mutation({
      query: (payload) => {
        return {
          url: "/advanced-settings",
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["GetAdvancedSettings"],
    }),
  }),
});

export const {
  useCreateAdminMutation,
  useDeleteAdminMutation,
  useGetAdminTeamQuery,
  useGetAdvancedSettingsQuery,
  useGetListingsSettingsQuery,
  useGetTransactionSettingsQuery,
  useUpdateAdvancedSettingsMutation,
  useUpdateListingsSettingsMutation,
  useUpdateTransactionSettingsMutation,
} = settingsApi;
