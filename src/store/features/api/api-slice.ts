import { IFormLogin } from '@/pages/auth/Login/Login';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

// const DOGS_API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311';
const AUTH_TOKEN = Cookies.get('token');

const { VITE_APP_ENDPOINT } = import.meta.env;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_ENDPOINT}/`,
    prepareHeaders(headers) {
      headers.set('Authorization', `Bearer ${AUTH_TOKEN}`);
      headers.set('Content-Type', 'application/json');

      return headers;
    },
  }),
  tagTypes: [],
  endpoints(builder) {
    return {
      // devices
      fetchDevices: builder.query({
        query() {
          return `/devices`;
        },
        providesTags: [],
      }),
      login: builder.mutation({
        query: ({ email, password }: IFormLogin) => ({
          url: `/login`,
          method: 'POST',
          body: {
            email,
            password,
          },
          responseHandler: 'text',
        }),
      }),
      notify: builder.mutation({
        query: ({ name, email, repoUrl, message }) => ({
          url: `/notify`,
          method: 'POST',
          body: {
            name,
            email,
            repoUrl,
            message,
          },
          responseHandler: 'text',
        }),
        // invalidatesTags: [''],
      }),
    };
  },
});

export const { useFetchDevicesQuery, useLoginMutation, useNotifyMutation } =
  apiSlice;
