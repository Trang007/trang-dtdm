import axios from "axios";
import {
  ALL_SPECIALIZED_FAIL,
  ALL_SPECIALIZED_REQUEST,
  ALL_SPECIALIZED_SUCCESS,
  CLEAR_ERRORS,
  SPECIALIZED_DETAILS_FAIL,
  SPECIALIZED_DETAILS_REQUEST,
  SPECIALIZED_DETAILS_SUCCESS,
  NEW_SPECIALIZED_REQUEST,
  NEW_SPECIALIZED_SUCCESS,
  NEW_SPECIALIZED_FAIL,
  DELETE_SPECIALIZED_REQUEST,
  UPDATE_SPECIALIZED_REQUEST,
  DELETE_SPECIALIZED_SUCCESS,
  UPDATE_SPECIALIZED_SUCCESS,
  DELETE_SPECIALIZED_FAIL,
  UPDATE_SPECIALIZED_FAIL,

} from "../constans/SpecializedConstans";

// Get All Specializeds Details
export const getSpecializedDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SPECIALIZED_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/specialized/${id}`);

    dispatch({
      type: SPECIALIZED_DETAILS_SUCCESS,
      payload: data.specialized,
    });
  } catch (error) {
    dispatch({
      type: SPECIALIZED_DETAILS_FAIL,
      payload: error.response.message,
    });
  }
};


// THÊM ĐỀ TÀI --------Admin
export const createSpecialized = (specializedData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_SPECIALIZED_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/specialized/new`,
      specializedData,
      config
    );

    dispatch({
      type: NEW_SPECIALIZED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_SPECIALIZED_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get ALl Specializeds 
export const getSpecialized = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SPECIALIZED_REQUEST });

    const { data } = await axios.get("/api/v2/specialized");

    dispatch({
      type: ALL_SPECIALIZED_SUCCESS,
      payload: data.specializeds,
    });
  } catch (error) {
    dispatch({
      type: ALL_SPECIALIZED_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Specialized ------Admin
export const deleteSpecialized = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SPECIALIZED_REQUEST });

    const { data } = await axios.delete(`/api/v2/specialized/${id}`);

    dispatch({
      type: DELETE_SPECIALIZED_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SPECIALIZED_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Specialized
export const updateSpecialized = (id, specializedData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SPECIALIZED_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/specialized/${id}`,
      specializedData,
      config
    );

    dispatch({
      type: UPDATE_SPECIALIZED_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SPECIALIZED_FAIL,
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