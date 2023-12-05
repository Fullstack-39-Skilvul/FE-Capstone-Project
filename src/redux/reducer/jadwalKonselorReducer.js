const initialValue = {
  jadwals: [],
  isLoading: false,
  error: "",
};

export const jadwalReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_DATA_JADWAL":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_GET_DATA_JADWAL":
      return {
        ...state,
        isLoading: false,
        jadwals: action.payload,
      };
    case "FETCH_JADWAL_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "UPDATE_DATA_JADWAL":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_UPDATE_DATA_JADWAL":
      return {
        ...state,
        isLoading: false,
        jadwals: state.jadwals.data?.map((jadwal) =>
          jadwal._id === action.payload._id ? action.payload : jadwal
        ),
      };
    case "FAILURE_UPDATE_DATA_JADWAL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "DELETE_DATA_JADWAL":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_DELETE_DATA_JADWAL":
      return {
        ...state,
        isLoading: false,
        jadwals: state.jadwals.data?.filter(
          (jadwal) => jadwal._id !== action.payload
        ),
      };
    case "FAILURE_DELETE_DATA_JADWAL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
