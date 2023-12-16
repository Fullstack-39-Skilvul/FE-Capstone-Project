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

export const getDataKonselor = () => {
  return async (dispatch) => {
    dispatch(fetchKonselorRequest());
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token is missing in localStorage");
      dispatch(fetchKonselorFailure("Token is missing"));
      return;
    }

    try {
      const response = await axios.get(
        "https://be-capstone-project.vercel.app/konselors",
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

export const getDataKonselorById = () => {
  return async (dispatch) => {
    dispatch(fetchKonselorRequest());
    const id = localStorage.getItem("userId");
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token is missing in localStorage");
        dispatch(fetchKonselorFailure("Token is missing"));
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

export const getJadwalKonselor = () => {
  return async (dispatch) => {
    dispatch(fetchKonselorRequest());

    const id = localStorage.getItem("userId");

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token is missing in localStorage");
        dispatch(fetchKonselorFailure("Token is missing"));
        return;
      }

      const response = await axios.get(
        `https://be-capstone-project.vercel.app/konselors/${id}/jadwal`,
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

export const updateDataKonselor = (_id, newValues) => {
  return async (dispatch) => {
    dispatch(updateKonselorRequest());
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token is missing in localStorage");
        dispatch(fetchKonselorFailure("Token is missing"));
        return;
      }

      const response = await axios.put(
        `https://be-capstone-project.vercel.app/konselors/${_id}`,
        newValues,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token is missing in localStorage");
        dispatch(fetchKonselorFailure("Token is missing"));
        return;
      }

      await axios.delete(
        `https://be-capstone-project.vercel.app/konselors/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token is missing in localStorage");
        dispatch(fetchKonselorFailure("Token is missing"));
        return;
      }

      await axios.post(
        "https://be-capstone-project.vercel.app/konselors",
        newKonselor,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(getDataKonselor());
      toast.success("Data berhasil ditambahkan !");
    } catch (error) {
      console.error("Error creating Konselor:", error.message);
      toast.success("Data gagal ditambahkan !");
    }
  };
};
