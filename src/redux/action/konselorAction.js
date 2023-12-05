import axios from "axios";
import toast from "react-hot-toast";

const fetchKonselorRequest = () => ({
  type: "GET_DATA_KONSELOR",
});

const fetchKonselorSuccess = (data) => ({
  type: "SUCCESS_GET_DATA_KONSELOR",
  payload: data,
});

const fetchKonselorFailure = (error) => ({
  type: "FETCH_KONSELOR_FAILURE",
  payload: error,
});

const updateKonselorRequest = () => ({
  type: "UPDATE_DATA_KONSELOR",
});

const updateKonselorSuccess = (data) => ({
  type: "SUCCESS_UPDATE_DATA_KONSELOR",
  payload: data,
});

const updateKonselorFailure = (error) => ({
  type: "FAILURE_UPDATE_DATA_KONSELOR",
  payload: error,
});

const deleteKonselorRequest = () => ({
  type: "DELETE_DATA_KONSELOR",
});

const deleteKonselorSuccess = (id) => ({
  type: "SUCCESS_DELETE_DATA_KONSELOR",
  payload: id,
});

const deleteKonselorFailure = (error) => ({
  type: "FAILURE_DELETE_DATA_KONSELOR",
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

export const getDataKonselor = () => {
  return async (dispatch) => {
    dispatch(fetchKonselorRequest());
    try {
      const response = await axios.get(
        "https://be-capstone-project.vercel.app/konselors",
        axiosConfig
      );
      dispatch(fetchKonselorSuccess(response.data));
    } catch (error) {
      dispatch(fetchKonselorFailure(error.message));
    }
  };
};

export const getDataKonselorById = () => {
  return async (dispatch) => {
    dispatch(fetchKonselorRequest());
    const id = localStorage.getItem("userId");
    try {
      const response = await axios.get(
        `https://be-capstone-project.vercel.app/konselors/${id}`,
        axiosConfig
      );
      dispatch(fetchKonselorSuccess(response.data));
    } catch (error) {
      dispatch(fetchKonselorFailure(error.message));
    }
  };
};

export const getJadwalKonselor = () => {
  return async (dispatch) => {
    dispatch(fetchKonselorRequest());

    const id = localStorage.getItem("userId");

    try {
      const response = await axios.get(
        `https://be-capstone-project.vercel.app/konselors/${id}/jadwal`,
        axiosConfig
      );
      dispatch(fetchKonselorSuccess(response.data));
    } catch (error) {
      dispatch(fetchKonselorFailure(error.message));
    }
  };
};

export const updateDataKonselor = (_id, newValues) => {
  return async (dispatch) => {
    dispatch(updateKonselorRequest());
    try {
      const response = await axios.put(
        `https://be-capstone-project.vercel.app/konselors/${_id}`,
        newValues,
        axiosConfig
      );
      dispatch(updateKonselorSuccess(response.data));
      toast.success("Data berhasil diperbarui !");
    } catch (error) {
      dispatch(updateKonselorFailure(error.message));
      toast.error("Data gagal diperbarui !");
      console.log(error);
    }
  };
};

export const deleteDataKonselor = (id) => {
  return async (dispatch) => {
    dispatch(deleteKonselorRequest());
    try {
      await axios.delete(
        `https://be-capstone-project.vercel.app/konselors/${id}`,
        axiosConfig
      );
      dispatch(deleteKonselorSuccess(id));
      toast.success("Data berhasil dihapus !");
    } catch (error) {
      dispatch(deleteKonselorFailure(error.message));
      toast.error("Data gagal dihapus !");
    }
  };
};

export const createDataKonselor = (newKonselor) => {
  return async (dispatch) => {
    try {
      await axios.post(
        "https://be-capstone-project.vercel.app/konselors",
        newKonselor,
        axiosConfig
      );
      dispatch(getDataKonselor());
      toast.success("Data berhasil ditambahkan !");
    } catch (error) {
      console.error("Error creating Konselor:", error.message);
      toast.success("Data gagal ditambahkan !");
    }
  };
};
