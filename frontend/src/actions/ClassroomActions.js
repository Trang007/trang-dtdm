import axios from "axios";
import {
  ALL_CLASSROOM_FAIL,
  ALL_CLASSROOM_REQUEST,
  ALL_CLASSROOM_SUCCESS,
  CLEAR_ERRORS,
  CLASSROOM_DETAILS_FAIL,
  CLASSROOM_DETAILS_REQUEST,
  CLASSROOM_DETAILS_SUCCESS,
  NEW_CLASSROOM_REQUEST,
  NEW_CLASSROOM_SUCCESS,
  NEW_CLASSROOM_FAIL,
  DELETE_CLASSROOM_REQUEST,
  UPDATE_CLASSROOM_REQUEST,
  DELETE_CLASSROOM_SUCCESS,
  UPDATE_CLASSROOM_SUCCESS,
  DELETE_CLASSROOM_FAIL,
  UPDATE_CLASSROOM_FAIL,

} from "../constans/ClassroomConstans";

// Get All Classrooms Details
export const getClassroomDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CLASSROOM_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/classroom/${id}`);

    dispatch({
      type: CLASSROOM_DETAILS_SUCCESS,
      payload: data.classroom,
    });
  } catch (error) {
    dispatch({
      type: CLASSROOM_DETAILS_FAIL,
      payload: error.response.message,
    });
  }
};


// THÊM ĐỀ TÀI --------Admin
export const createClassroom = (classroomData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CLASSROOM_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/classroom/new`,
      classroomData,
      config
    );

    dispatch({
      type: NEW_CLASSROOM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CLASSROOM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get ALl Classrooms 
export const getClassroom = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CLASSROOM_REQUEST });

    const { data } = await axios.get("/api/v2/classroom");

    dispatch({
      type: ALL_CLASSROOM_SUCCESS,
      payload: data.classrooms,
    });
  } catch (error) {
    dispatch({
      type: ALL_CLASSROOM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Classroom ------Admin
export const deleteClassroom = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CLASSROOM_REQUEST });

    const { data } = await axios.delete(`/api/v2/classroom/${id}`);

    dispatch({
      type: DELETE_CLASSROOM_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CLASSROOM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Classroom
export const updateClassroom = (id, classroomData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CLASSROOM_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/classroom/${id}`,
      classroomData,
      config
    );

    dispatch({
      type: UPDATE_CLASSROOM_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CLASSROOM_FAIL,
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