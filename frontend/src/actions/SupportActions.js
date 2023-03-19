import axios from "axios";
import {
  ALL_SUPPORT_FAIL,
  ALL_SUPPORT_REQUEST,
  ALL_SUPPORT_SUCCESS,
  CLEAR_ERRORS,
  SUPPORT_DETAILS_FAIL,
  SUPPORT_DETAILS_REQUEST,
  SUPPORT_DETAILS_SUCCESS,
  NEW_SUPPORT_REQUEST,
  NEW_SUPPORT_SUCCESS,
  NEW_SUPPORT_FAIL,
  DELETE_SUPPORT_REQUEST,
  UPDATE_SUPPORT_REQUEST,
  DELETE_SUPPORT_SUCCESS,
  UPDATE_SUPPORT_SUCCESS,
  DELETE_SUPPORT_FAIL,
  UPDATE_SUPPORT_FAIL,

} from "../constans/SupportConstans";

// Get All Supports Details
export const getSupportDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SUPPORT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/support/${id}`);

    dispatch({
      type: SUPPORT_DETAILS_SUCCESS,
      payload: data.support,
    });
  } catch (error) {
    dispatch({
      type: SUPPORT_DETAILS_FAIL,
      payload: error.response.message,
    });
  }
};


// THÊM ĐỀ TÀI --------Admin
export const createSupport = (supportData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_SUPPORT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/support/new`,
      supportData,
      config
    );

    dispatch({
      type: NEW_SUPPORT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_SUPPORT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get ALl Supports 
export const getSupport = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SUPPORT_REQUEST });

    const { data } = await axios.get("/api/v2/support");

    dispatch({
      type: ALL_SUPPORT_SUCCESS,
      payload: data.supports,
    });
  } catch (error) {
    dispatch({
      type: ALL_SUPPORT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Support ------Admin
export const deleteSupport = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SUPPORT_REQUEST });

    const { data } = await axios.delete(`/api/v2/support/${id}`);

    dispatch({
      type: DELETE_SUPPORT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SUPPORT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Support
export const updateSupport = (id, supportData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SUPPORT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/support/${id}`,
      supportData,
      config
    );

    dispatch({
      type: UPDATE_SUPPORT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SUPPORT_FAIL,
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