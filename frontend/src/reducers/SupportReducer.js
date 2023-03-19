import {
  ALL_SUPPORT_FAIL,
  ALL_SUPPORT_REQUEST,
  ALL_SUPPORT_SUCCESS,
  CLEAR_ERRORS,
  SUPPORT_DETAILS_FAIL,
  SUPPORT_DETAILS_REQUEST,
  SUPPORT_DETAILS_SUCCESS,
  NEW_SUPPORT_REQUEST,
  NEW_SUPPORT_SUCCESS,
  NEW_SUPPORT_FAIL,
  NEW_SUPPORT_RESET,
  DELETE_SUPPORT_REQUEST,
  UPDATE_SUPPORT_REQUEST,
  DELETE_SUPPORT_SUCCESS,
  UPDATE_SUPPORT_SUCCESS,
  DELETE_SUPPORT_FAIL,
  UPDATE_SUPPORT_FAIL,
  DELETE_SUPPORT_RESET,
  UPDATE_SUPPORT_RESET,
} from "../constans/SupportConstans";

export const supportsReducer = (state = { supports: [] }, action) => {
  switch (action.type) {
    case ALL_SUPPORT_REQUEST:
      return {
        loading: true,
        supports: [],
      };

    case ALL_SUPPORT_SUCCESS:
      return {
        loading: false,
        supports: action.payload,
      };
    case ALL_SUPPORT_FAIL:
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

export const supportDetailsReducer = (state = { support: {} }, action) => {
  switch (action.type) {
    case SUPPORT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case SUPPORT_DETAILS_SUCCESS:
      return {
        loading: false,
        support: action.payload,
      };
    case SUPPORT_DETAILS_FAIL:
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


// New Support ----Admin
export const newSupportReducer = (state = { support: {} }, action) => {
  switch (action.type) {
    case NEW_SUPPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_SUPPORT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        support: action.payload.support,
      };
    case NEW_SUPPORT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_SUPPORT_RESET:
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

// Delete Support
export const deleteSupportReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SUPPORT_REQUEST:
    case UPDATE_SUPPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SUPPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_SUPPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_SUPPORT_FAIL:
    case UPDATE_SUPPORT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_SUPPORT_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_SUPPORT_RESET:
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
