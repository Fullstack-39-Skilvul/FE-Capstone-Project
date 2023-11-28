import { configureStore } from "@reduxjs/toolkit";
import { dataKonselorReducer } from "./reducer/dataKonselorReducer";
import { pasienReducer } from "./reducer/pasienReducer";

export const store = configureStore({
  reducer: {
    dataKonselor: dataKonselorReducer,
    pasien: pasienReducer,
  },
});
