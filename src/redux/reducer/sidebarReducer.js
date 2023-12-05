const initialValue = {
  dataSidebar: [],
  isLoading: false,
  error: "",
};

export const sidebarReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_DATA_SIDEBAR":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_GET_DATA_SIDEBAR":
      return {
        ...state,
        isLoading: false,
        dataSidebar: action.payload,
      };
    case "FETCH_SIDEBAR_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
