import { combineReducers } from 'redux';
import {
  SEND_PAYMENT_DATA_REQUEST,
  SEND_PAYMENT_DATA_SUCCESS,
  SEND_PAYMENT_DATA_FAILURE,
} from '..action/paymentAction'; // Sesuaikan path dengan lokasi file action Anda

// Initial state untuk data pembayaran
const initialState = {
  loading: false,
  success: false,
  error: null,
  paymentData: null,
};

// Payment reducer
const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_PAYMENT_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case SEND_PAYMENT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        paymentData: action.payload, // Simpan data pembayaran jika berhasil dikirim ke API
        error: null,
      };
    case SEND_PAYMENT_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload, // Simpan pesan error jika terjadi kesalahan saat pengiriman data
      };
    default:
      return state;
  }
};

// Gabungkan reducer menjadi satu root reducer
const rootReducer = combineReducers({
  payment: paymentReducer,
  // Tambahkan reducer lain jika ada
});

export default rootReducer;
