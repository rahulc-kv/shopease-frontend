import { baseApi } from "./index";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["productlist"],
    }),
    translate: builder.mutation<any, any>({
      query: (payload) => ({
        url: "http://192.168.4.215:9000/sellease-ai/prod/translate",
        method: "POST",
        body: payload,
      }),
    }),
    descriptionEnhancement: builder.mutation<any, any>({
      query: (payload) => ({
        url: "http://192.168.4.215:9000/sellease-ai/prod/desc",
        method: "POST",
        body: payload,
      }),
    }),
    addPayload: builder.mutation<any, any>({
      query: (payload) => ({
        url: '/products',
        method: "POST",
        body:payload
      }),
    })
  }),
});
const uploadsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postBulkUpload: builder.mutation<any, File>({
      query: (payload) => {
        const formData = new FormData();
        console.log("sdffdsf", payload);

        formData.append("csv_file", payload);
        return {
          url: "http://192.168.4.215:9000/sellease-ai/process-csv",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["productlist"],
    }),
  }),
});

export const { usePostBulkUploadMutation } = uploadsApi;

export const {
  useLazyGetProductsQuery,
  useGetProductsQuery,
  useTranslateMutation,
  useDescriptionEnhancementMutation,
  useAddPayloadMutation,
} = productsApi;
