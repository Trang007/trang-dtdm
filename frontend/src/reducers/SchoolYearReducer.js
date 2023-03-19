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
  NEW_SCHOOLYEAR_RESET,
  DELETE_SCHOOLYEAR_REQUEST,
  UPDATE_SCHOOLYEAR_REQUEST,
  DELETE_SCHOOLYEAR_SUCCESS,
  UPDATE_SCHOOLYEAR_SUCCESS,
  DELETE_SCHOOLYEAR_FAIL,
  UPDATE_SCHOOLYEAR_FAIL,
  DELETE_SCHOOLYEAR_RESET,
  UPDATE_SCHOOLYEAR_RESET,
} from "../constans/SchoolYearConstans";

export const schoolyearsReducer = (state = { schoolyears: [] }, action) => {
  switch (action.type) {
    case ALL_SCHOOLYEAR_REQUEST:
      return {
        loading: true,
        schoolyears: [],
      };

    case ALL_SCHOOLYEAR_SUCCESS:
      return {
        loading: false,
        schoolyears: action.payload,
      };
    case ALL_SCHOOLYEAR_FAIL:
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

export const schoolyearDetailsReducer = (state = { schoolyear: {} }, action) => {
  switch (action.type) {
    case SCHOOLYEAR_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case SCHOOLYEAR_DETAILS_SUCCESS:
      return {
        loading: false,
        schoolyear: action.payload,
      };
    case SCHOOLYEAR_DETAILS_FAIL:
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


// New SchoolYear ----Admin
export const newSchoolYearReducer = (state = { schoolyear: {} }, action) => {
  switch (action.type) {
    case NEW_SCHOOLYEAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_SCHOOLYEAR_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        schoolyear: action.payload.schoolyear,
      };
    case NEW_SCHOOLYEAR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_SCHOOLYEAR_RESET:
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

// Delete SchoolYear
export const deleteSchoolYearReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SCHOOLYEAR_REQUEST:
    case UPDATE_SCHOOLYEAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SCHOOLYEAR_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_SCHOOLYEAR_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_SCHOOLYEAR_FAIL:
    case UPDATE_SCHOOLYEAR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_SCHOOLYEAR_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_SCHOOLYEAR_RESET:
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
