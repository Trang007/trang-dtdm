import axios from "axios";
import {
  ALL_BRANCH_FAIL,
  ALL_BRANCH_REQUEST,
  ALL_BRANCH_SUCCESS,
  CLEAR_ERRORS,
  BRANCH_DETAILS_FAIL,
  BRANCH_DETAILS_REQUEST,
  BRANCH_DETAILS_SUCCESS,
  NEW_BRANCH_REQUEST,
  NEW_BRANCH_SUCCESS,
  NEW_BRANCH_FAIL,
  DELETE_BRANCH_REQUEST,
  UPDATE_BRANCH_REQUEST,
  DELETE_BRANCH_SUCCESS,
  UPDATE_BRANCH_SUCCESS,
  DELETE_BRANCH_FAIL,
  UPDATE_BRANCH_FAIL,

} from "../constans/BranchConstans";

// Get All Branchs Details
export const getBranchDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BRANCH_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/branch/${id}`);

    dispatch({
      type: BRANCH_DETAILS_SUCCESS,
      payload: data.branch,
    });
  } catch (error) {
    dispatch({
      type: BRANCH_DETAILS_FAIL,
      payload: error.response.message,
    });
  }
};


// THÊM ĐỀ TÀI --------Admin
export const createBranch = (branchData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BRANCH_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/branch/new`,
      branchData,
      config
    );

    dispatch({
      type: NEW_BRANCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_BRANCH_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get ALl Branchs 
export const getBranch = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BRANCH_REQUEST });

    const { data } = await axios.get("/api/v2/branch");

    dispatch({
      type: ALL_BRANCH_SUCCESS,
      payload: data.branchs,
    });
  } catch (error) {
    dispatch({
      type: ALL_BRANCH_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Branch ------Admin
export const deleteBranch = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BRANCH_REQUEST });

    const { data } = await axios.delete(`/api/v2/branch/${id}`);

    dispatch({
      type: DELETE_BRANCH_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BRANCH_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Branch
export const updateBranch = (id, branchData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BRANCH_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/branch/${id}`,
      branchData,
      config
    );

    dispatch({
      type: UPDATE_BRANCH_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BRANCH_FAIL,
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