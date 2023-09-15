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
    translate: builder.mutation<
      any,
      any
    >({
      query: (payload) => ({
        url: 'http://192.168.4.215:9000/sellease-ai/prod/translate',
        method: 'POST',
        body: payload
      }),
    })
  })
})
export default getProductsApi;

export const { useGetProductsQuery, useTranslateMutation } = getProductsApi;