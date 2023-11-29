const initialValue = {
  konselors: [],
  isLoading: false,
  error: "",
};

export const konselorReducer = (state = initialValue, action) => {
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
    case "FETCH_KONSELOR_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "UPDATE_DATA_KONSELOR":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_UPDATE_DATA_KONSELOR":
      return {
        ...state,
        isLoading: false,
        konselors: state.konselors.map((konselor) =>
          konselor._id === action.payload._id ? action.payload : konselor
        ),
      };
    case "FAILURE_UPDATE_DATA_KONSELOR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "DELETE_DATA_KONSELOR":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_DELETE_DATA_KONSELOR":
      return {
        ...state,
        isLoading: false,
        konselors: state.konselors.filter(
          (konselor) => konselor._id !== action.payload
        ),
      };
    case "FAILURE_DELETE_DATA_KONSELOR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
