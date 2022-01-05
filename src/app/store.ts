import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
