/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../env/env";

export const apiSlice: any = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["GetAllNotesTag"],
  endpoints: function (build: any) {
    return {
      getAllNotes: build.query({
        query: (id: any) => {
          return `/note/all/${id}`;
        },
        providesTags: ["GetAllNotesTag"],
        transformResponse: (response: any) => {
          const sortedData = response.data.sort((a: any, b: any) => {
            const dateA: any = new Date(a.createdAt);
            const dateB: any = new Date(b.createdAt);
            return dateB - dateA;
          });
          return sortedData || [];
        },
      }),
      addNote: build.mutation({
        query: ({ userId, body }: any) => {
          return {
            url: `/note/create/${userId}`,
            method: "POST",
            body,
          };
        },
        invalidatesTags: ["GetAllNotesTag"],
      }),
      updateNote: build.mutation({
        query: ({ userId, body }: any) => {
          return {
            url: `/note/update/${userId}`,
            method: "PATCH",
            body,
          };
        },
        invalidatesTags: ["GetAllNotesTag"],
      }),
      deleteNote: build.mutation({
        query: (id: any) => {
          return {
            url: `/note/delete/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["GetAllNotesTag"],
      }),
    };
  },
});

export const {
  useGetAllNotesQuery,
  useDeleteNoteMutation,
  useAddNoteMutation,
  useUpdateNoteMutation,
} = apiSlice;
