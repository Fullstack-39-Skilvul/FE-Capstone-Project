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
          role: action.payload.role, // Menyimpan peran di dalam state
        },
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        user: {
          role: null, // Reset peran jika login gagal
        },
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: {
          role: null, // Reset peran saat logout
        },
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
