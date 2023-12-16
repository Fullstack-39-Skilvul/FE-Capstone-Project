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

export const getDataBooking = () => {
  return async (dispatch) => {
    dispatch(fetchBookingRequest());
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token is missing in localStorage");
        dispatch(fetchBookingFailure("Token is missing"));
        return;
      }
      const response = await axios.get(
        "https://be-capstone-project.vercel.app/bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token is missing in localStorage");
        dispatch(fetchBookingFailure("Token is missing"));
        return;
      }
      const response = await axios.put(
        `https://be-capstone-project.vercel.app/bookings/${id}`,
        newValues,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(updateBookingSuccess(response.data));
      toast.success("Berhasil memperbarui data !");
    } catch (error) {
      dispatch(updateBookingFailure(error.message));
      toast.error("Gagal memperbarui data !");
      console.log(error);
    }
  };
};

export const deleteDataBooking = (id) => {
  return async (dispatch) => {
    dispatch(deleteBookingRequest());
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token is missing in localStorage");
        dispatch(fetchBookingFailure("Token is missing"));
        return;
      }
      await axios.delete(
        `https://be-capstone-project.vercel.app/bookings/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token is missing in localStorage");
        dispatch(fetchBookingFailure("Token is missing"));
        return;
      }
      await axios.post(
        "https://be-capstone-project.vercel.app/bookings",
        newBooking,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(getDataBooking());
    } catch (error) {
      console.error("Error creating Booking:", error.message);
    }
  };
};
