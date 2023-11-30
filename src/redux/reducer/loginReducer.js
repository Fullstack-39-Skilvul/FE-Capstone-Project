import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../action/loginAction";

const initialState = {
    loading: false,
    userData: null,
    error: null,
  };

  export const LOGIN_REQUEST = 'LOGIN_REQUEST';
  export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  export const LOGIN_FAILURE = 'LOGIN_FAILURE';

  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          userData: action.payload, 
          error: null,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          userData: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  