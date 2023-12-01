const initialValue = {
  spesialisasis: [],
  isLoading: false,
  error: "",
};

export const spesialisasiReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_DATA_SPESIALISASI":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_GET_DATA_SPESIALISASI":
      return {
        ...state,
        isLoading: false,
        spesialisasis: action.payload,
      };
    case "FETCH_SPESIALISASI_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "UPDATE_DATA_SPESIALISASI":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_UPDATE_DATA_SPESIALISASI":
      return {
        ...state,
        isLoading: false,
        spesialisasis: state.spesialisasis.data?.map((spesialisasi) =>
          spesialisasi._id === action.payload._id
            ? action.payload
            : spesialisasi
        ),
      };
    case "FAILURE_UPDATE_DATA_SPESIALISASI":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "DELETE_DATA_SPESIALISASI":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_DELETE_DATA_SPESIALISASI":
      return {
        ...state,
        isLoading: false,
        spesialisasis: state.spesialisasis.data?.filter(
          (spesialisasi) => spesialisasi._id !== action.payload
        ),
      };
    case "FAILURE_DELETE_DATA_SPESIALISASI":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
