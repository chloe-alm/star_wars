import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const starshipsApi = createApi({
  reducerPath: "starshipsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swapi.dev/api/",
  }),
  endpoints(builder) {
    return {
      fetchStarships: builder.query({
        query(limit = 10) {
          return `/starships?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchStarshipsQuery } = starshipsApi;
