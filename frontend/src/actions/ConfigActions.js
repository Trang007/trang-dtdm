import axios from "axios";
import {
  ALL_CONFIG_FAIL,
  ALL_CONFIG_REQUEST,
  ALL_CONFIG_SUCCESS,
  CLEAR_ERRORS,
  CONFIG_DETAILS_FAIL,
  CONFIG_DETAILS_REQUEST,
  CONFIG_DETAILS_SUCCESS,
  NEW_CONFIG_REQUEST,
  NEW_CONFIG_SUCCESS,
  NEW_CONFIG_FAIL,
  DELETE_CONFIG_REQUEST,
  UPDATE_CONFIG_REQUEST,
  DELETE_CONFIG_SUCCESS,
  UPDATE_CONFIG_SUCCESS,
  DELETE_CONFIG_FAIL,
  UPDATE_CONFIG_FAIL,

} from "../constans/ConfigConstans";

// Get All Configs Details
export const getConfigDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CONFIG_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/config/${id}`);

    dispatch({
      type: CONFIG_DETAILS_SUCCESS,
      payload: data.config,
    });
  } catch (error) {
    dispatch({
      type: CONFIG_DETAILS_FAIL,
      payload: error.response.message,
    });
  }
};


// THÊM ĐỀ TÀI --------Admin
export const createConfig = (configData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CONFIG_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/config/new`,
      configData,
      config
    );

    dispatch({
      type: NEW_CONFIG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CONFIG_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get ALl Configs 
export const getConfig = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CONFIG_REQUEST });

    const { data } = await axios.get("/api/v2/config");

    dispatch({
      type: ALL_CONFIG_SUCCESS,
      payload: data.configs,
    });
  } catch (error) {
    dispatch({
      type: ALL_CONFIG_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Config ------Admin
export const deleteConfig = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CONFIG_REQUEST });

    const { data } = await axios.delete(`/api/v2/config/${id}`);

    dispatch({
      type: DELETE_CONFIG_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CONFIG_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Config
export const updateConfig = (id, configData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CONFIG_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/config/${id}`,
      configData,
      config
    );

    dispatch({
      type: UPDATE_CONFIG_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CONFIG_FAIL,
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