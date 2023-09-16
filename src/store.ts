import { configureStore } from '@reduxjs/toolkit';
import {baseApi, baseApi2 } from 'services';

const store = configureStore({
  reducer: { [baseApi.reducerPath]: baseApi.reducer },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), baseApi.middleware, baseApi2.middleware]
});

export default store;