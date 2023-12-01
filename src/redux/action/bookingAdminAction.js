import axios from "axios";
import toast from "react-hot-toast";

const fetchBookingRequest = () => ({
  type: "GET_DATA_BOOKING",
});

const fetchBookingSuccess = (data) => ({
  type: "SUCCESS_GET_DATA_BOOKING",
  payload: data,
});

const fetchBookingFailure = (error) => ({
  type: "FETCH_BOOKING_FAILURE",
  payload: error,
});

const updateBookingRequest = () => ({
  type: "UPDATE_DATA_BOOKING",
});

const updateBookingSuccess = (data) => ({
  type: "SUCCESS_UPDATE_DATA_BOOKING",
  payload: data,
});

const updateBookingFailure = (error) => ({
  type: "FAILURE_UPDATE_DATA_BOOKING",
  payload: error,
});

const deleteBookingRequest = () => ({
  type: "DELETE_DATA_BOOKING",
});

const deleteBookingSuccess = (id) => ({
  type: "SUCCESS_DELETE_DATA_BOOKING",
  payload: id,
});

const deleteBookingFailure = (error) => ({
  type: "FAILURE_DELETE_DATA_BOOKING",
  payload: error,
});

const config = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQxMjUwNzI3YjE0MWQ0M2NlNWM4MyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxMjI5NjA2fQ.rKE20Vx28yxyRbqaAFbtgpiX3nZojtreQfeq4yOEYxA`,
  },
};

export const getDataBooking = () => {
  return async (dispatch) => {
    dispatch(fetchBookingRequest());
    try {
      const response = await axios.get(
        "https://be-capstone-project.vercel.app/bookings",
        config
      );
      dispatch(fetchBookingSuccess(response.data));
    } catch (error) {
      dispatch(fetchBookingFailure(error.message));
    }
  };
};

export const updateDataBooking = (id, newValues) => {
  return async (dispatch) => {
    dispatch(updateBookingRequest());
    try {
      const response = await axios.put(
        `https://be-capstone-project.vercel.app/bookings/${id}`,
        newValues,
        config
      );
      dispatch(updateBookingSuccess(response.data));
      toast.success("Berhasil memperbarui data !");
    } catch (error) {
      dispatch(updateBookingFailure(error.message));
      toast.error("Gagal memperbarui data !");
    }
  };
};

export const deleteDataBooking = (id) => {
  return async (dispatch) => {
    dispatch(deleteBookingRequest());
    try {
      await axios.delete(
        `https://be-capstone-project.vercel.app/bookings/${id}`,
        config
      );
      dispatch(deleteBookingSuccess(id));
      toast.success("Berhasil menghapus data!");
    } catch (error) {
      dispatch(deleteBookingFailure(error.message));
      toast.error("Gagal menghapus data!");
    }
  };
};

export const createDataBooking = (newBooking) => {
  return async (dispatch) => {
    try {
      await axios.post(
        "https://be-capstone-project.vercel.app/bookings",
        newBooking,
        config
      );
      dispatch(getDataBooking());
    } catch (error) {
      console.error("Error creating Booking:", error.message);
    }
  };
};
