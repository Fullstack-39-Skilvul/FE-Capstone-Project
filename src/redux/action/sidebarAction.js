import axios from "axios";
import toast from "react-hot-toast";

const fetchKonselorRequest = () => ({
  type: "GET_DATA_SIDEBAR",
});

const fetchKonselorSuccess = (data) => ({
  type: "SUCCESS_GET_DATA_SIDEBAR",
  payload: data,
});

const fetchKonselorFailure = (error) => ({
  type: "FETCH_SIDEBAR_FAILURE",
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

export const getDataSidebarById = () => {
  return async (dispatch) => {
    dispatch(fetchKonselorRequest());
    const id = localStorage.getItem("userId");
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token is missing in localStorage");
        dispatch(fetchSpesialisasiFailure("Token is missing"));
        return;
      }
      const response = await axios.get(
        `https://be-capstone-project.vercel.app/konselors/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(fetchKonselorSuccess(response.data));
    } catch (error) {
      dispatch(fetchKonselorFailure(error.message));
    }
  };
};
