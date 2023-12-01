import { configureStore } from "@reduxjs/toolkit";
import { dataKonselorReducer } from "./reducer/dataKonselorReducer";
import { pasienReducer } from "./reducer/pasienReducer";
import { konselorReducer } from "./reducer/konselorReducer";
import { spesialisasiReducer } from "./reducer/spesialisasiReducer";
import { bookingReducer } from "./reducer/bookingAdminReducer";
import { paymentReducer } from "./reducer/paymetAdminReducer";

export const store = configureStore({
  reducer: {
    dataKonselor: dataKonselorReducer,
    pasien: pasienReducer,
    konselor: konselorReducer,
    spesialis: spesialisasiReducer,
    bookingAdmin: bookingReducer,
    paymentAdmin: paymentReducer,
  },
});
