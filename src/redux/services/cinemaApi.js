import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cinemaApi = createApi({
  reducerPath: "cinemaAPi",
  tagTypes: ["Cinema"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getCinemas: builder.query({
      query: () => ({ url: "cinemas" }),
      providesTags: (result) =>
        result
          .map(({ id }) => ({ id, type: "Cinema" }))
          .concat([{ type: "Cinema", id: "LIST" }]),
    }),
    updateCinemas: builder.mutation({
      query: () => ({ url: "", method: "PATCH" }),
      invalidatesTags: (result) => [{ type: "Cinema", id: result.id }],
    }),
    createCinemas: builder.mutation({
      query: () => ({ url: "", method: "POST" }),
      invalidatesTags: () => [{ type: "Cinema", id: "LIST" }],
    }),
  }),
});

export const { useGetCinemasQuery } = cinemaApi;
