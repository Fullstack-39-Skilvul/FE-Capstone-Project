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
    case "FETCH_PASIEN_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "UPDATE_DATA_PASIEN":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_UPDATE_DATA_PASIEN":
      return {
        ...state,
        isLoading: false,
        pasiens: state.pasiens?.data.map((pasien) =>
          pasien._id === action.payload._id ? action.payload : pasien
        ),
      };
    case "FAILURE_UPDATE_DATA_PASIEN":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "DELETE_DATA_PASIEN":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_DELETE_DATA_PASIEN":
      return {
        ...state,
        isLoading: false,
        pasiens: state.pasiens?.data.filter(
          (pasien) => pasien._id !== action.payload
        ),
      };
    case "FAILURE_DELETE_DATA_PASIEN":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
