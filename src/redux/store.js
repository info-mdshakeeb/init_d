import { configureStore } from "@reduxjs/toolkit";
import utilsSlice from "./features/utils/utilsSlice";

import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./api/apiSlice";
import authSlice from "./features/auth/authSlice";
export const store = configureStore({
  reducer: {
    utils: utilsSlice,
    auth: authSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);
