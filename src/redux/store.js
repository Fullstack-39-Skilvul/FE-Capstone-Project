import { configureStore } from "@reduxjs/toolkit";
import { dataKonselorReducer } from "./reducer/dataKonselorReducer";
import { pasienReducer } from "./reducer/pasienReducer";
import { konselorReducer } from "./reducer/konselorReducer";
import { spesialisasiReducer } from "./reducer/spesialisasiReducer";

export const store = configureStore({
  reducer: {
    dataKonselor: dataKonselorReducer,
    pasien: pasienReducer,
    konselor: konselorReducer,
    spesialis: spesialisasiReducer,
  },
});
