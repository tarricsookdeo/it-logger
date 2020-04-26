import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// trys to get logs from server. If logs are fetched successfully, payload equals
// the logs, and loading is set to fasle.
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// sets loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
