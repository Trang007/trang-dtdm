import axios from "axios";
import {
  ALL_NOTIFY_FAIL,
  ALL_NOTIFY_REQUEST,
  ALL_NOTIFY_SUCCESS,
  CLEAR_ERRORS,
  NOTIFY_DETAILS_FAIL,
  NOTIFY_DETAILS_REQUEST,
  NOTIFY_DETAILS_SUCCESS,
  NEW_NOTIFY_REQUEST,
  NEW_NOTIFY_SUCCESS,
  NEW_NOTIFY_FAIL,
  DELETE_NOTIFY_REQUEST,
  UPDATE_NOTIFY_REQUEST,
  DELETE_NOTIFY_SUCCESS,
  UPDATE_NOTIFY_SUCCESS,
  DELETE_NOTIFY_FAIL,
  UPDATE_NOTIFY_FAIL,

} from "../constans/NotifyConstans";

// Get All Notifys Details
export const getNotifyDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: NOTIFY_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/notify/${id}`);

    dispatch({
      type: NOTIFY_DETAILS_SUCCESS,
      payload: data.notify,
    });
  } catch (error) {
    dispatch({
      type: NOTIFY_DETAILS_FAIL,
      payload: error.response.message,
    });
  }
};


// THÊM ĐỀ TÀI --------Admin
export const createNotify = (notifyData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_NOTIFY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/notify/new`,
      notifyData,
      config
    );

    dispatch({
      type: NEW_NOTIFY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_NOTIFY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get ALl Notifys 
export const getNotify = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_NOTIFY_REQUEST });

    const { data } = await axios.get("/api/v2/notify");

    dispatch({
      type: ALL_NOTIFY_SUCCESS,
      payload: data.notifys,
    });
  } catch (error) {
    dispatch({
      type: ALL_NOTIFY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Notify ------Admin
export const deleteNotify = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_NOTIFY_REQUEST });

    const { data } = await axios.delete(`/api/v2/notify/${id}`);

    dispatch({
      type: DELETE_NOTIFY_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_NOTIFY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Notify
export const updateNotify = (id, notifyData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_NOTIFY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/notify/${id}`,
      notifyData,
      config
    );

    dispatch({
      type: UPDATE_NOTIFY_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_NOTIFY_FAIL,
      payload: error.response.data.message,
    });
  }
};


//   Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
}