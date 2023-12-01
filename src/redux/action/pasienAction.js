import axios from "axios";
import toast from "react-hot-toast";

const fetchPasienRequest = () => ({
  type: "GET_DATA_PASIEN",
});

const fetchPasienSuccess = (data) => ({
  type: "SUCCESS_GET_DATA_PASIEN",
  payload: data,
});

const fetchPasienFailure = (error) => ({
  type: "FETCH_PASIEN_FAILURE",
  payload: error,
});

const updatePasienRequest = () => ({
  type: "UPDATE_DATA_PASIEN",
});

const updatePasienSuccess = (data) => ({
  type: "SUCCESS_UPDATE_DATA_PASIEN",
  payload: data,
});

const updatePasienFailure = (error) => ({
  type: "FAILURE_UPDATE_DATA_PASIEN",
  payload: error,
});

const deletePasienRequest = () => ({
  type: "DELETE_DATA_PASIEN",
});

const deletePasienSuccess = (id) => ({
  type: "SUCCESS_DELETE_DATA_PASIEN",
  payload: id,
});

const deletePasienFailure = (error) => ({
  type: "FAILURE_DELETE_DATA_PASIEN",
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

export const createDataPasien = (newValue) => {
  return async (dispatch) => {
    try {
      await axios.post(
        "https://be-capstone-project.vercel.app/pasiens",
        newValue
      );
      dispatch(getDataKonselor());
      toast.success("Data berhasil ditambahkan !");
    } catch (error) {
      console.error("Error creating Pasien:", error.message);
      toast.success("Data gagal ditambahkan !");
    }
  };
};

export const getDataPasien = () => {
  return async (dispatch) => {
    dispatch(fetchPasienRequest());
    try {
      const response = await axios.get(
        "https://be-capstone-project.vercel.app/pasiens",
        axiosConfig
      );
      dispatch(fetchPasienSuccess(response.data));
    } catch (error) {
      dispatch(fetchPasienFailure(error.message));
    }
  };
};

export const updateDataPasien = (_id, newValues) => {
  return async (dispatch) => {
    dispatch(updatePasienRequest());
    try {
      const response = await axios.put(
        `https://be-capstone-project.vercel.app/pasiens/${_id}`,
        newValues,
        axiosConfig
      );
      dispatch(updatePasienSuccess(response.data));
      toast.success("Data berhasil diperbarui !");
    } catch (error) {
      dispatch(updatePasienFailure(error.message));
      toast.error("Data gagal di perbarui!");
    }
  };
};

export const deleteDataPasien = (id) => {
  return async (dispatch) => {
    dispatch(deletePasienRequest());
    try {
      await axios.delete(
        `https://be-capstone-project.vercel.app/pasiens/${id}`,
        axiosConfig
      );
      dispatch(deletePasienSuccess(id));
      toast.success("Data berhasil dihapus !");
    } catch (error) {
      dispatch(deletePasienFailure(error.message));
      toast.success("Data gagal dihapus !");
    }
  };
};
