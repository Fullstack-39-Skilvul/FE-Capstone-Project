const initialValue = {
  konselors: [{}],
  isLoading: false,
  error: "",
};

export const dataKonselorReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_DATA_KONSELOR":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_GET_DATA_KONSELOR":
      return {
        ...state,
        isLoading: false,
        konselors: action.payload,
      };
    case "FETCH_KONSELOR_FAILURE": // Tambahkan case ini untuk menangani kesalahan fetch
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
