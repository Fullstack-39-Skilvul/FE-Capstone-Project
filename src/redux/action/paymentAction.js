import axios from 'axios';

// Action types
export const SEND_PAYMENT_DATA_REQUEST = 'SEND_PAYMENT_DATA_REQUEST';
export const SEND_PAYMENT_DATA_SUCCESS = 'SEND_PAYMENT_DATA_SUCCESS';
export const SEND_PAYMENT_DATA_FAILURE = 'SEND_PAYMENT_DATA_FAILURE';

// Action creators
export const sendPaymentDataRequest = () => ({
  type: SEND_PAYMENT_DATA_REQUEST,
});

export const sendPaymentDataSuccess = (response) => ({
  type: SEND_PAYMENT_DATA_SUCCESS,
  payload: response.data, // Sesuaikan payload dengan data yang ingin Anda gunakan
});

export const sendPaymentDataFailure = (error) => ({
  type: SEND_PAYMENT_DATA_FAILURE,
  payload: error,
});

// Fungsi untuk mengirim data pembayaran ke API
export const sendPaymentData = (paymentData) => {
  return async (dispatch) => {
    dispatch(sendPaymentDataRequest());

    try {
      const response = await axios.post('https://be-capstone-project.vercel.app/payments', paymentData);
      dispatch(sendPaymentDataSuccess(response));
      // Handle response data atau dispatch action lain jika diperlukan
    } catch (error) {
      dispatch(sendPaymentDataFailure(error.message));
      // Handle error atau dispatch action lain jika diperlukan
    }
  };
};
