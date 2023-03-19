import {
  ALL_NOTIFY_FAIL,
  ALL_NOTIFY_REQUEST,
  ALL_NOTIFY_SUCCESS,
  CLEAR_ERRORS,
  NOTIFY_DETAILS_FAIL,
  NOTIFY_DETAILS_REQUEST,
  NOTIFY_DETAILS_SUCCESS,
  NEW_NOTIFY_REQUEST,
  NEW_NOTIFY_SUCCESS,
  NEW_NOTIFY_FAIL,
  NEW_NOTIFY_RESET,
  DELETE_NOTIFY_REQUEST,
  UPDATE_NOTIFY_REQUEST,
  DELETE_NOTIFY_SUCCESS,
  UPDATE_NOTIFY_SUCCESS,
  DELETE_NOTIFY_FAIL,
  UPDATE_NOTIFY_FAIL,
  DELETE_NOTIFY_RESET,
  UPDATE_NOTIFY_RESET,
} from "../constans/NotifyConstans";

export const notifysReducer = (state = { notifys: [] }, action) => {
  switch (action.type) {
    case ALL_NOTIFY_REQUEST:
      return {
        loading: true,
        notifys: [],
      };

    case ALL_NOTIFY_SUCCESS:
      return {
        loading: false,
        notifys: action.payload,
      };
    case ALL_NOTIFY_FAIL:
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

export const notifyDetailsReducer = (state = { notify: {} }, action) => {
  switch (action.type) {
    case NOTIFY_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case NOTIFY_DETAILS_SUCCESS:
      return {
        loading: false,
        notify: action.payload,
      };
    case NOTIFY_DETAILS_FAIL:
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


// New Notify ----Admin
export const newNotifyReducer = (state = { notify: {} }, action) => {
  switch (action.type) {
    case NEW_NOTIFY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_NOTIFY_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        notify: action.payload.notify,
      };
    case NEW_NOTIFY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_NOTIFY_RESET:
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

// Delete Notify
export const deleteNotifyReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_NOTIFY_REQUEST:
    case UPDATE_NOTIFY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_NOTIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_NOTIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_NOTIFY_FAIL:
    case UPDATE_NOTIFY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_NOTIFY_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_NOTIFY_RESET:
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
