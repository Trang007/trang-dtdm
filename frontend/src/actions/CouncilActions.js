import axios from "axios";
import {
  ALL_COUNCIL_FAIL,
  ALL_COUNCIL_REQUEST,
  ALL_COUNCIL_SUCCESS,
  CLEAR_ERRORS,
  COUNCIL_DETAILS_FAIL,
  COUNCIL_DETAILS_REQUEST,
  COUNCIL_DETAILS_SUCCESS,
  NEW_COUNCIL_REQUEST,
  NEW_COUNCIL_SUCCESS,
  NEW_COUNCIL_FAIL,
  DELETE_COUNCIL_REQUEST,
  UPDATE_COUNCIL_REQUEST,
  DELETE_COUNCIL_SUCCESS,
  UPDATE_COUNCIL_SUCCESS,
  DELETE_COUNCIL_FAIL,
  UPDATE_COUNCIL_FAIL,

} from "../constans/CouncilConstans";

// Get All Councils Details
export const getCouncilDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: COUNCIL_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/council/${id}`);

    dispatch({
      type: COUNCIL_DETAILS_SUCCESS,
      payload: data.council,
    });
  } catch (error) {
    dispatch({
      type: COUNCIL_DETAILS_FAIL,
      payload: error.response.message,
    });
  }
};


// THÊM ĐỀ TÀI --------Admin
export const createCouncil = (councilData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_COUNCIL_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/council/new`,
      councilData,
      config
    );

    dispatch({
      type: NEW_COUNCIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_COUNCIL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get ALl Councils 
export const getCouncil = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_COUNCIL_REQUEST });

    const { data } = await axios.get("/api/v2/council");

    dispatch({
      type: ALL_COUNCIL_SUCCESS,
      payload: data.councils,
    });
  } catch (error) {
    dispatch({
      type: ALL_COUNCIL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Council ------Admin
export const deleteCouncil = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_COUNCIL_REQUEST });

    const { data } = await axios.delete(`/api/v2/council/${id}`);

    dispatch({
      type: DELETE_COUNCIL_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COUNCIL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Council
export const updateCouncil = (id, councilData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_COUNCIL_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/council/${id}`,
      councilData,
      config
    );

    dispatch({
      type: UPDATE_COUNCIL_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_COUNCIL_FAIL,
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