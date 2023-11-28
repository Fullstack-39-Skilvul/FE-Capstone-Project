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

export const getDataPasien = () => {
  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQxMjUwNzI3YjE0MWQ0M2NlNWM4MyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxMTUwOTczfQ.6TTkIUZe5uWBelfnS-l2ESf3X9oLRLxhKTPYQDImERE`,
    },
  };

  return async (dispatch) => {
    dispatch(fetchPasienRequest());
    try {
      const response = await axios.get(
        "https://nice-gold-indri-sari.cyclic.app/pasiens",
        config
      );
      dispatch(fetchPasienSuccess(response.data));
    } catch (error) {
      dispatch(fetchPasienFailure(error.message));
    }
  };
};
