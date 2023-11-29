import axios from "axios";

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

const config = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQxMjUwNzI3YjE0MWQ0M2NlNWM4MyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxMTUwOTczfQ.6TTkIUZe5uWBelfnS-l2ESf3X9oLRLxhKTPYQDImERE`,
  },
};

export const getDataPasien = () => {
  return async (dispatch) => {
    dispatch(fetchPasienRequest());
    try {
      const response = await axios.get(
        "https://be-capstone-project.vercel.app/pasiens",
        config
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
        config
      );
      dispatch(updatePasienSuccess(response.data));
    } catch (error) {
      dispatch(updatePasienFailure(error.message));
    }
  };
};

export const deleteDataPasien = (id) => {
  return async (dispatch) => {
    dispatch(deletePasienRequest());
    try {
      await axios.delete(
        `https://be-capstone-project.vercel.app/pasiens/${id}`,
        config
      );
      dispatch(deletePasienSuccess(id));
    } catch (error) {
      dispatch(deletePasienFailure(error.message));
    }
  };
};
