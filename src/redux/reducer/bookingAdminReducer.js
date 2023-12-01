const initialValue = {
  bookings: [],
  isLoading: false,
  error: "",
};

export const bookingReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_DATA_BOOKING":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_GET_DATA_BOOKING":
      return {
        ...state,
        isLoading: false,
        bookings: action.payload,
      };
    case "FETCH_BOOKING_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "UPDATE_DATA_BOOKING":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_UPDATE_DATA_BOOKING":
      return {
        ...state,
        isLoading: false,
        bookings: state.bookings.data?.map((booking) =>
          booking._id === action.payload._id ? action.payload : booking
        ),
      };
    case "FAILURE_UPDATE_DATA_BOOKING":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "DELETE_DATA_BOOKING":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_DELETE_DATA_BOOKING":
      return {
        ...state,
        isLoading: false,
        bookings: state.bookings.data?.filter(
          (booking) => booking._id !== action.payload
        ),
      };
    case "FAILURE_DELETE_DATA_BOOKING":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
