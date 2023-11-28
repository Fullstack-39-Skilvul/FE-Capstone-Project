const initialValue = {
  pasiens: [],
  isLoading: false,
  error: "",
};

export const pasienReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_DATA_PASIEN":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_GET_DATA_PASIEN":
      return {
        ...state,
        isLoading: false,
        pasiens: action.payload,
      };
    case "FETCH_PASIEN_FAILURE": // Tambahkan case ini untuk menangani kesalahan fetch
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
