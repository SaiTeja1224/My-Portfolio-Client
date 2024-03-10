import { configureStore } from "@reduxjs/toolkit";
import emailSlice from "./actions/emailSlice";

const store = configureStore({
  reducer: {
    email: emailSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
