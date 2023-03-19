import axios from "axios";
import {
  ALL_SCHOOLYEAR_FAIL,
  ALL_SCHOOLYEAR_REQUEST,
  ALL_SCHOOLYEAR_SUCCESS,
  CLEAR_ERRORS,
  SCHOOLYEAR_DETAILS_FAIL,
  SCHOOLYEAR_DETAILS_REQUEST,
  SCHOOLYEAR_DETAILS_SUCCESS,
  NEW_SCHOOLYEAR_REQUEST,
  NEW_SCHOOLYEAR_SUCCESS,
  NEW_SCHOOLYEAR_FAIL,
  DELETE_SCHOOLYEAR_REQUEST,
  UPDATE_SCHOOLYEAR_REQUEST,
  DELETE_SCHOOLYEAR_SUCCESS,
  UPDATE_SCHOOLYEAR_SUCCESS,
  DELETE_SCHOOLYEAR_FAIL,
  UPDATE_SCHOOLYEAR_FAIL,

} from "../constans/SchoolYearConstans";

// Get All SchoolYears Details
export const getSchoolYearDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SCHOOLYEAR_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/schoolyear/${id}`);

    dispatch({
      type: SCHOOLYEAR_DETAILS_SUCCESS,
      payload: data.schoolyear,
    });
  } catch (error) {
    dispatch({
      type: SCHOOLYEAR_DETAILS_FAIL,
      payload: error.response.message,
    });
  }
};


// THÊM ĐỀ TÀI --------Admin
export const createSchoolYear = (schoolyearData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_SCHOOLYEAR_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/schoolyear/new`,
      schoolyearData,
      config
    );

    dispatch({
      type: NEW_SCHOOLYEAR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_SCHOOLYEAR_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get ALl SchoolYears 
export const getSchoolYear = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SCHOOLYEAR_REQUEST });

    const { data } = await axios.get("/api/v2/schoolyear");

    dispatch({
      type: ALL_SCHOOLYEAR_SUCCESS,
      payload: data.schoolyears,
    });
  } catch (error) {
    dispatch({
      type: ALL_SCHOOLYEAR_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete SchoolYear ------Admin
export const deleteSchoolYear = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SCHOOLYEAR_REQUEST });

    const { data } = await axios.delete(`/api/v2/schoolyear/${id}`);

    dispatch({
      type: DELETE_SCHOOLYEAR_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SCHOOLYEAR_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update SchoolYear
export const updateSchoolYear = (id, schoolyearData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SCHOOLYEAR_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/schoolyear/${id}`,
      schoolyearData,
      config
    );

    dispatch({
      type: UPDATE_SCHOOLYEAR_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SCHOOLYEAR_FAIL,
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