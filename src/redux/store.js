import { configureStore } from "@reduxjs/toolkit";
import { dataKonselorReducer } from "./reducer/dataKonselorReducer";

export const store = configureStore({
  reducer: {
    dataKonselor: dataKonselorReducer,
  },
});
