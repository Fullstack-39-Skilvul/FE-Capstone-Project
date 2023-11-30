import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await axios.post('https://be-capstone-project.vercel.app/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        dispatch(loginSuccess(response.data));

        await saveUserDataToApi(response.data); 
      } else {
        dispatch(loginFailure('Login failed. Please check your credentials.'));
      }
    } catch (error) {
      dispatch(loginFailure('Login failed. Please try again later.'));
    }
  };
};

const saveUserDataToApi = async (userData) => {
  try {
    const saveResponse = await axios.post('https://be-capstone-project.vercel.app/auth/login', userData);

    if (saveResponse.status === 200) {
      console.log('User data saved to API successfully!');
    } else {
      throw new Error('Failed to save user data to API.');
    }
  } catch (error) {
    console.error('Error saving user data to API:', error);
  }
};

