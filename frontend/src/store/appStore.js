import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./slice/productsApi";
import cartReducer, { getTotals } from "./slice/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

appStore.dispatch(getTotals());

export default appStore;
