import {
  ALL_CONFIG_FAIL,
  ALL_CONFIG_REQUEST,
  ALL_CONFIG_SUCCESS,
  CLEAR_ERRORS,
  CONFIG_DETAILS_FAIL,
  CONFIG_DETAILS_REQUEST,
  CONFIG_DETAILS_SUCCESS,
  NEW_CONFIG_REQUEST,
  NEW_CONFIG_SUCCESS,
  NEW_CONFIG_FAIL,
  NEW_CONFIG_RESET,
  DELETE_CONFIG_REQUEST,
  UPDATE_CONFIG_REQUEST,
  DELETE_CONFIG_SUCCESS,
  UPDATE_CONFIG_SUCCESS,
  DELETE_CONFIG_FAIL,
  UPDATE_CONFIG_FAIL,
  DELETE_CONFIG_RESET,
  UPDATE_CONFIG_RESET,
} from "../constans/ConfigConstans";

export const configsReducer = (state = { configs: [] }, action) => {
  switch (action.type) {
    case ALL_CONFIG_REQUEST:
      return {
        loading: true,
        configs: [],
      };

    case ALL_CONFIG_SUCCESS:
      return {
        loading: false,
        configs: action.payload,
      };
    case ALL_CONFIG_FAIL:
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

export const configDetailsReducer = (state = { config: {} }, action) => {
  switch (action.type) {
    case CONFIG_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case CONFIG_DETAILS_SUCCESS:
      return {
        loading: false,
        config: action.payload,
      };
    case CONFIG_DETAILS_FAIL:
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


// New Config ----Admin
export const newConfigReducer = (state = { config: {} }, action) => {
  switch (action.type) {
    case NEW_CONFIG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CONFIG_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        config: action.payload.config,
      };
    case NEW_CONFIG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CONFIG_RESET:
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

// Delete Config
export const deleteConfigReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CONFIG_REQUEST:
    case UPDATE_CONFIG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CONFIG_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_CONFIG_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_CONFIG_FAIL:
    case UPDATE_CONFIG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CONFIG_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_CONFIG_RESET:
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
