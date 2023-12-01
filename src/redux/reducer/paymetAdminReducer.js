const initialValue = {
  payments: [],
  isLoading: false,
  error: "",
};

export const paymentReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_DATA_PAYMENT":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_GET_DATA_PAYMENT":
      return {
        ...state,
        isLoading: false,
        payments: action.payload,
      };
    case "FETCH_PAYMENT_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "UPDATE_DATA_PAYMENT":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_UPDATE_DATA_PAYMENT":
      return {
        ...state,
        isLoading: false,
        payments: state.payments.data?.map((payment) =>
          payment._id === action.payload._id ? action.payload : payment
        ),
      };
    case "FAILURE_UPDATE_DATA_PAYMENT":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "DELETE_DATA_PAYMENT":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_DELETE_DATA_PAYMENT":
      return {
        ...state,
        isLoading: false,
        payments: state.payments.data?.filter(
          (payment) => payment._id !== action.payload
        ),
      };
    case "FAILURE_DELETE_DATA_PAYMENT":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
