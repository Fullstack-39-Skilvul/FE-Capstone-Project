// authActions.js
import axios from "axios";

export const loginSuccess = (userData) => {
  // Simpan token dan userId ke dalam localStorage
  localStorage.setItem("token", userData.token);
  localStorage.setItem("userId", userData.userId);

  return {
    type: "LOGIN_SUCCESS",
    payload: { ...userData, role: userData.role },
  };
};

export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {
    type: "LOGOUT",
  };
};

export const loginUser = (loginData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://be-capstone-project.vercel.app/auth/login",
      loginData
    );

    // Pastikan respons memiliki properti 'token'
    if (response.data && response.data.token) {
      const userData = response.data;
      dispatch(loginSuccess(userData));
    } else {
      // Tanggapi jika token tidak ditemukan dalam respons
      dispatch(loginFailure("Token not found in response"));
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
