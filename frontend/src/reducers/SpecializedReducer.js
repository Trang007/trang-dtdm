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
  NEW_SPECIALIZED_RESET,
  DELETE_SPECIALIZED_REQUEST,
  UPDATE_SPECIALIZED_REQUEST,
  DELETE_SPECIALIZED_SUCCESS,
  UPDATE_SPECIALIZED_SUCCESS,
  DELETE_SPECIALIZED_FAIL,
  UPDATE_SPECIALIZED_FAIL,
  DELETE_SPECIALIZED_RESET,
  UPDATE_SPECIALIZED_RESET,
} from "../constans/SpecializedConstans";

export const specializedsReducer = (state = { specializeds: [] }, action) => {
  switch (action.type) {
    case ALL_SPECIALIZED_REQUEST:
      return {
        loading: true,
        specializeds: [],
      };

    case ALL_SPECIALIZED_SUCCESS:
      return {
        loading: false,
        specializeds: action.payload,
      };
    case ALL_SPECIALIZED_FAIL:
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

export const specializedDetailsReducer = (state = { specialized: {} }, action) => {
  switch (action.type) {
    case SPECIALIZED_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case SPECIALIZED_DETAILS_SUCCESS:
      return {
        loading: false,
        specialized: action.payload,
      };
    case SPECIALIZED_DETAILS_FAIL:
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


// New Specialized ----Admin
export const newSpecializedReducer = (state = { specialized: {} }, action) => {
  switch (action.type) {
    case NEW_SPECIALIZED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_SPECIALIZED_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        specialized: action.payload.specialized,
      };
    case NEW_SPECIALIZED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_SPECIALIZED_RESET:
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

// Delete Specialized
export const deleteSpecializedReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SPECIALIZED_REQUEST:
    case UPDATE_SPECIALIZED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SPECIALIZED_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_SPECIALIZED_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_SPECIALIZED_FAIL:
    case UPDATE_SPECIALIZED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_SPECIALIZED_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_SPECIALIZED_RESET:
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
