// authReducer.js
const initialState = {
  isAuthenticated: false,
  user: {
    role: null, // Menambahkan field role di dalam user state
  },
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: {
          ...action.payload,
          role: action.payload.role,
        },
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        user: {
          role: null,
        },
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: {
          role: null,
        },
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
