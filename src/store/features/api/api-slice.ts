import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

// const DOGS_API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311';
const AUTH_TOKEN = Cookies.get('token') ?? '';

const { VITE_APP_ENDPOINT } = import.meta.env;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_ENDPOINT}/`,
    prepareHeaders(headers) {
      headers.set('authorization', AUTH_TOKEN);

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
        transformResponse: (response: { data: { items: any[] } }) =>
          response.data,
        providesTags: [],
      }),
    };
  },
});

export const { useFetchDevicesQuery } = apiSlice;
