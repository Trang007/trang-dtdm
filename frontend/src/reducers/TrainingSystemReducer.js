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
  NEW_TRAININGSYSTEM_RESET,
  DELETE_TRAININGSYSTEM_REQUEST,
  UPDATE_TRAININGSYSTEM_REQUEST,
  DELETE_TRAININGSYSTEM_SUCCESS,
  UPDATE_TRAININGSYSTEM_SUCCESS,
  DELETE_TRAININGSYSTEM_FAIL,
  UPDATE_TRAININGSYSTEM_FAIL,
  DELETE_TRAININGSYSTEM_RESET,
  UPDATE_TRAININGSYSTEM_RESET,
} from "../constans/TrainingSystemConstans";

export const trainingsystemsReducer = (state = { trainingsystems: [] }, action) => {
  switch (action.type) {
    case ALL_TRAININGSYSTEM_REQUEST:
      return {
        loading: true,
        trainingsystems: [],
      };

    case ALL_TRAININGSYSTEM_SUCCESS:
      return {
        loading: false,
        trainingsystems: action.payload,
      };
    case ALL_TRAININGSYSTEM_FAIL:
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

export const trainingsystemDetailsReducer = (state = { trainingsystem: {} }, action) => {
  switch (action.type) {
    case TRAININGSYSTEM_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case TRAININGSYSTEM_DETAILS_SUCCESS:
      return {
        loading: false,
        trainingsystem: action.payload,
      };
    case TRAININGSYSTEM_DETAILS_FAIL:
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


// New TrainingSystem ----Admin
export const newTrainingSystemReducer = (state = { trainingsystem: {} }, action) => {
  switch (action.type) {
    case NEW_TRAININGSYSTEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_TRAININGSYSTEM_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        trainingsystem: action.payload.trainingsystem,
      };
    case NEW_TRAININGSYSTEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_TRAININGSYSTEM_RESET:
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

// Delete TrainingSystem
export const deleteTrainingSystemReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TRAININGSYSTEM_REQUEST:
    case UPDATE_TRAININGSYSTEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TRAININGSYSTEM_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_TRAININGSYSTEM_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_TRAININGSYSTEM_FAIL:
    case UPDATE_TRAININGSYSTEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TRAININGSYSTEM_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_TRAININGSYSTEM_RESET:
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
