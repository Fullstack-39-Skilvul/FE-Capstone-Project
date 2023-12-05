import axios from "axios";
import toast from "react-hot-toast";

const fetchPaymentRequest = () => ({
  type: "GET_DATA_PAYMENT",
});

const fetchPaymentSuccess = (data) => ({
  type: "SUCCESS_GET_DATA_PAYMENT",
  payload: data,
});

const fetchPaymentFailure = (error) => ({
  type: "FETCH_PAYMENT_FAILURE",
  payload: error,
});

const updatePaymentRequest = () => ({
  type: "UPDATE_DATA_PAYMENT",
});

const updatePaymentSuccess = (data) => ({
  type: "SUCCESS_UPDATE_DATA_PAYMENT",
  payload: data,
});

const updatePaymentFailure = (error) => ({
  type: "FAILURE_UPDATE_DATA_PAYMENT",
  payload: error,
});

const deletePaymentRequest = () => ({
  type: "DELETE_DATA_PAYMENT",
});

const deletePaymentSuccess = (id) => ({
  type: "SUCCESS_DELETE_DATA_PAYMENT",
  payload: id,
});

const deletePaymentFailure = (error) => ({
  type: "FAILURE_DELETE_DATA_PAYMENT",
  payload: error,
});

const config = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Token is missing in localStorage");
    return {};
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const axiosConfig = config();

export const getDataPayment = () => {
  return async (dispatch) => {
    dispatch(fetchPaymentRequest());
    try {
      const response = await axios.get(
        "https://be-capstone-project.vercel.app/payments",
        axiosConfig
      );
      dispatch(fetchPaymentSuccess(response.data));
    } catch (error) {
      dispatch(fetchPaymentFailure(error.message));
    }
  };
};

export const updateDataPayment = (id, newValues) => {
  return async (dispatch) => {
    dispatch(updatePaymentRequest());
    try {
      const response = await axios.put(
        `https://be-capstone-project.vercel.app/payments/${id}`,
        newValues,
        axiosConfig
      );
      dispatch(updatePaymentSuccess(response.data));
      toast.success("Status berhasil di rubah!");
    } catch (error) {
      dispatch(updatePaymentFailure(error.message));
      toast.error("Gagal merubah status!");
    }
  };
};

export const deleteDataPayment = (id) => {
  return async (dispatch) => {
    dispatch(deletePaymentRequest());
    try {
      await axios.delete(
        `https://be-capstone-project.vercel.app/payments/${id}`,
        axiosConfig
      );
      dispatch(deletePaymentSuccess(id));
      toast.success("Data berhasil dihapus!");
    } catch (error) {
      dispatch(deletePaymentFailure(error.message));
      toast.error("Gagal menghapus data!");
    }
  };
};

export const createDataPayment = (newPayment) => {
  return async (dispatch) => {
    try {
      await axios.post(
        "https://be-capstone-project.vercel.app/payments",
        newPayment,
        axiosConfig
      );
      dispatch(getDataPayment());
      toast.success("Berhasil membuat data!");
    } catch (error) {
      console.error("Error creating Payment:", error.message);
      toast.error("Gagal membuat data");
    }
  };
};
