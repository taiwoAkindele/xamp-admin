import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { currentAPI } from "../config";

const transactionAPI = `${currentAPI}/dashboard/admin`;

export const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: transactionAPI,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTransactions: builder.query({
      query: (params) => {
        return {
          url: "/transactions",
          method: "GET",
          params: { ...params },
        };
      },
    }),
    getTransaction: builder.query({
      query: (id) => {
        return {
          url: `/transaction/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllTransactionsQuery, useGetTransactionQuery } =
  transactionApi;
