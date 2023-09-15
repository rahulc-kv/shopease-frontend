import baseApi from './index';

const getProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
        query: () => ({
          url: '/products',
          method: 'get'
        }),
        providesTags: ['products.list']
      }),
  })
});

export default getProductsApi;

export const { useGetProductsQuery } = getProductsApi;