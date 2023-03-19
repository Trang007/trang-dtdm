import axios from "axios";
import {
  ALL_TRAININGSYSTEM_FAIL,
  ALL_TRAININGSYSTEM_REQUEST,
  ALL_TRAININGSYSTEM_SUCCESS,
  CLEAR_ERRORS,
  TRAININGSYSTEM_DETAILS_FAIL,
  TRAININGSYSTEM_DETAILS_REQUEST,
  TRAININGSYSTEM_DETAILS_SUCCESS,
  NEW_TRAININGSYSTEM_REQUEST,
  NEW_TRAININGSYSTEM_SUCCESS,
  NEW_TRAININGSYSTEM_FAIL,
  DELETE_TRAININGSYSTEM_REQUEST,
  UPDATE_TRAININGSYSTEM_REQUEST,
  DELETE_TRAININGSYSTEM_SUCCESS,
  UPDATE_TRAININGSYSTEM_SUCCESS,
  DELETE_TRAININGSYSTEM_FAIL,
  UPDATE_TRAININGSYSTEM_FAIL,

} from "../constans/TrainingSystemConstans";

// Get All TrainingSystems Details
export const getTrainingSystemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TRAININGSYSTEM_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/trainingsystem/${id}`);

    dispatch({
      type: TRAININGSYSTEM_DETAILS_SUCCESS,
      payload: data.trainingsystem,
    });
  } catch (error) {
    dispatch({
      type: TRAININGSYSTEM_DETAILS_FAIL,
      payload: error.response.message,
    });
  }
};


// THÊM ĐỀ TÀI --------Admin
export const createTrainingSystem = (trainingsystemData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_TRAININGSYSTEM_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/trainingsystem/new`,
      trainingsystemData,
      config
    );

    dispatch({
      type: NEW_TRAININGSYSTEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_TRAININGSYSTEM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get ALl TrainingSystems 
export const getTrainingSystem = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_TRAININGSYSTEM_REQUEST });

    const { data } = await axios.get("/api/v2/trainingsystem");

    dispatch({
      type: ALL_TRAININGSYSTEM_SUCCESS,
      payload: data.trainingsystems,
    });
  } catch (error) {
    dispatch({
      type: ALL_TRAININGSYSTEM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete TrainingSystem ------Admin
export const deleteTrainingSystem = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TRAININGSYSTEM_REQUEST });

    const { data } = await axios.delete(`/api/v2/trainingsystem/${id}`);

    dispatch({
      type: DELETE_TRAININGSYSTEM_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TRAININGSYSTEM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update TrainingSystem
export const updateTrainingSystem = (id, trainingsystemData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TRAININGSYSTEM_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/trainingsystem/${id}`,
      trainingsystemData,
      config
    );

    dispatch({
      type: UPDATE_TRAININGSYSTEM_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TRAININGSYSTEM_FAIL,
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