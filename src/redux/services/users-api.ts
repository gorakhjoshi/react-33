import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ICredential {
  email: string;
  password: string;
}

interface IUser {
  email: string;
  id: number;
}

interface AuthResponse {
  accessToken: string;
  user: IUser;
}

export const authApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fsdb33.gorakhjoshi.com/api/v1',
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<AuthResponse, ICredential>({
      query: (credential) => ({
        url: 'register',
        method: 'POST',
        body: credential,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;
