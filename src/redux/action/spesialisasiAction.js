import axios from "axios";
import toast from "react-hot-toast";

const fetchSpesialisasiRequest = () => ({
  type: "GET_DATA_SPESIALISASI",
});

const fetchSpesialisasiSuccess = (data) => ({
  type: "SUCCESS_GET_DATA_SPESIALISASI",
  payload: data,
});

const fetchSpesialisasiFailure = (error) => ({
  type: "FETCH_SPESIALISASI_FAILURE",
  payload: error,
});

const updateSpesialisasiRequest = () => ({
  type: "UPDATE_DATA_SPESIALISASI",
});

const updateSpesialisasiSuccess = (data) => ({
  type: "SUCCESS_UPDATE_DATA_SPESIALISASI",
  payload: data,
});

const updateSpesialisasiFailure = (error) => ({
  type: "FAILURE_UPDATE_DATA_SPESIALISASI",
  payload: error,
});

const deleteSpesialisasiRequest = () => ({
  type: "DELETE_DATA_SPESIALISASI",
});

const deleteSpesialisasiSuccess = (id) => ({
  type: "SUCCESS_DELETE_DATA_SPESIALISASI",
  payload: id,
});

const deleteSpesialisasiFailure = (error) => ({
  type: "FAILURE_DELETE_DATA_SPESIALISASI",
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
export const getDataSpesialisasi = () => {
  return async (dispatch) => {
    dispatch(fetchSpesialisasiRequest());
    try {
      const response = await axios.get(
        "https://be-capstone-project.vercel.app/spesialisasis",
        axiosConfig
      );
      dispatch(fetchSpesialisasiSuccess(response.data));
    } catch (error) {
      dispatch(fetchSpesialisasiFailure(error.message));
    }
  };
};

export const updateDataSpesialisasi = (id, newValues) => {
  return async (dispatch) => {
    dispatch(updateSpesialisasiRequest());
    try {
      const response = await axios.put(
        `https://be-capstone-project.vercel.app/spesialisasis/${id}`,
        newValues,
        axiosConfig
      );
      dispatch(updateSpesialisasiSuccess(response.data));
      toast.success("Berhasil memperbarui data!");
    } catch (error) {
      dispatch(updateSpesialisasiFailure(error.message));
      toast.error("Gagal memperbarui data!");
    }
  };
};

export const deleteDataSpesialisasi = (id) => {
  return async (dispatch) => {
    dispatch(deleteSpesialisasiRequest());
    try {
      await axios.delete(
        `https://be-capstone-project.vercel.app/spesialisasis/${id}`,
        axiosConfig
      );
      dispatch(deleteSpesialisasiSuccess(id));
      toast.success("Berhasil menghapus data!");
    } catch (error) {
      dispatch(deleteSpesialisasiFailure(error.message));
      toast.error("Gagal menghapus data!");
    }
  };
};

export const createDataSpesialisasi = (newSpesialisasi) => {
  return async (dispatch) => {
    try {
      await axios.post(
        "https://be-capstone-project.vercel.app/spesialisasis",
        newSpesialisasi,
        axiosConfig
      );
      dispatch(getDataSpesialisasi());
      toast.success("Berhasil membuat data !");
    } catch (error) {
      console.error("Error creating Spesialisasi:", error.message);
      toast.error("Gagal membuat data !");
    }
  };
};
