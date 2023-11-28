import axios from "axios";

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

export const getDataKonselor = () => {
  return async (dispatch) => {
    dispatch(fetchKonselorRequest());
    try {
      const response = await axios.get(
        "https://nice-gold-indri-sari.cyclic.app/konselors/data-konselor"
      );
      dispatch(fetchKonselorSuccess(response.data));
    } catch (error) {
      dispatch(fetchKonselorFailure(error.message));
    }
  };
};
