import { baseApi, baseApi2 } from "./index";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["products.list"],
    }),
  }),
});
const uploadsApi = baseApi2.injectEndpoints({
  endpoints: (builder) => ({
    postBulkUpload: builder.mutation<any, File>({
      query: (payload) => {
        const formData = new FormData();
        console.log('sdffdsf', payload);
        
        formData.append("csv_file", payload);
        return {
          url: "/sellease-ai/process-csv",
          method: "POST",
          body: formData,        
        };
      },
      invalidatesTags: ["products.list"],
    }),
  }),
});

export const { usePostBulkUploadMutation } = uploadsApi;

export const { useLazyGetProductsQuery, useGetProductsQuery } = productsApi;
