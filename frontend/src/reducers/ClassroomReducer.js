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
  NEW_CLASSROOM_RESET,
  DELETE_CLASSROOM_REQUEST,
  UPDATE_CLASSROOM_REQUEST,
  DELETE_CLASSROOM_SUCCESS,
  UPDATE_CLASSROOM_SUCCESS,
  DELETE_CLASSROOM_FAIL,
  UPDATE_CLASSROOM_FAIL,
  DELETE_CLASSROOM_RESET,
  UPDATE_CLASSROOM_RESET,
} from "../constans/ClassroomConstans";

export const classroomsReducer = (state = { classrooms: [] }, action) => {
  switch (action.type) {
    case ALL_CLASSROOM_REQUEST:
      return {
        loading: true,
        classrooms: [],
      };

    case ALL_CLASSROOM_SUCCESS:
      return {
        loading: false,
        classrooms: action.payload,
      };
    case ALL_CLASSROOM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const classroomDetailsReducer = (state = { classroom: {} }, action) => {
  switch (action.type) {
    case CLASSROOM_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case CLASSROOM_DETAILS_SUCCESS:
      return {
        loading: false,
        classroom: action.payload,
      };
    case CLASSROOM_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


// New Classroom ----Admin
export const newClassroomReducer = (state = { classroom: {} }, action) => {
  switch (action.type) {
    case NEW_CLASSROOM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CLASSROOM_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        classroom: action.payload.classroom,
      };
    case NEW_CLASSROOM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CLASSROOM_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Delete Classroom
export const deleteClassroomReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CLASSROOM_REQUEST:
    case UPDATE_CLASSROOM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CLASSROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_CLASSROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_CLASSROOM_FAIL:
    case UPDATE_CLASSROOM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CLASSROOM_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_CLASSROOM_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
