import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fsdb33.gorakhjoshi.com/api/v1',
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (credential) => ({
        url: 'register',
        method: 'POST',
        body: credential,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;
