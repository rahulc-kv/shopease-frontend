import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.3.29:3000',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');

      if (token) headers.set('Authorization', `Bearer ${token}`);

      return headers;
    }
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: ['products.list']
});

const baseApi2 = createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://192.168.4.215:9000',
      prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
  
        if (token) headers.set('Authorization', `Bearer ${token}`);
  
        return headers;
      }
    }),
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    endpoints: () => ({}),
    tagTypes: ['products.list']
  });
export { baseApi, baseApi2}
