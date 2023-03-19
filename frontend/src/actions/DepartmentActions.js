import axios from "axios";
import {
  ALL_DEPARTMENT_FAIL,
  ALL_DEPARTMENT_REQUEST,
  ALL_DEPARTMENT_SUCCESS,
  CLEAR_ERRORS,
  DEPARTMENT_DETAILS_FAIL,
  DEPARTMENT_DETAILS_REQUEST,
  DEPARTMENT_DETAILS_SUCCESS,
  NEW_DEPARTMENT_REQUEST,
  NEW_DEPARTMENT_SUCCESS,
  NEW_DEPARTMENT_FAIL,
  DELETE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_REQUEST,
  DELETE_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_FAIL,
  UPDATE_DEPARTMENT_FAIL,

} from "../constans/DepartmentConstans";

// Get All Departments Details
export const getDepartmentDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DEPARTMENT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/department/${id}`);

    dispatch({
      type: DEPARTMENT_DETAILS_SUCCESS,
      payload: data.department,
    });
  } catch (error) {
    dispatch({
      type: DEPARTMENT_DETAILS_FAIL,
      payload: error.response.message,
    });
  }
};


// THÊM ĐỀ TÀI --------Admin
export const createDepartment = (departmentData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_DEPARTMENT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/department/new`,
      departmentData,
      config
    );

    dispatch({
      type: NEW_DEPARTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_DEPARTMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get ALl Departments 
export const getDepartment = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_DEPARTMENT_REQUEST });

    const { data } = await axios.get("/api/v2/department");

    dispatch({
      type: ALL_DEPARTMENT_SUCCESS,
      payload: data.departments,
    });
  } catch (error) {
    dispatch({
      type: ALL_DEPARTMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Department ------Admin
export const deleteDepartment = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_DEPARTMENT_REQUEST });

    const { data } = await axios.delete(`/api/v2/department/${id}`);

    dispatch({
      type: DELETE_DEPARTMENT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_DEPARTMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Department
export const updateDepartment = (id, departmentData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_DEPARTMENT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/department/${id}`,
      departmentData,
      config
    );

    dispatch({
      type: UPDATE_DEPARTMENT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_DEPARTMENT_FAIL,
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