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
  NEW_COUNCIL_RESET,
  DELETE_COUNCIL_REQUEST,
  UPDATE_COUNCIL_REQUEST,
  DELETE_COUNCIL_SUCCESS,
  UPDATE_COUNCIL_SUCCESS,
  DELETE_COUNCIL_FAIL,
  UPDATE_COUNCIL_FAIL,
  DELETE_COUNCIL_RESET,
  UPDATE_COUNCIL_RESET,
} from "../constans/CouncilConstans";

export const councilsReducer = (state = { councils: [] }, action) => {
  switch (action.type) {
    case ALL_COUNCIL_REQUEST:
      return {
        loading: true,
        councils: [],
      };

    case ALL_COUNCIL_SUCCESS:
      return {
        loading: false,
        councils: action.payload,
      };
    case ALL_COUNCIL_FAIL:
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

export const councilDetailsReducer = (state = { council: {} }, action) => {
  switch (action.type) {
    case COUNCIL_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case COUNCIL_DETAILS_SUCCESS:
      return {
        loading: false,
        council: action.payload,
      };
    case COUNCIL_DETAILS_FAIL:
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


// New Council ----Admin
export const newCouncilReducer = (state = { council: {} }, action) => {
  switch (action.type) {
    case NEW_COUNCIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_COUNCIL_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        council: action.payload.council,
      };
    case NEW_COUNCIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_COUNCIL_RESET:
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

// Delete Council
export const deleteCouncilReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_COUNCIL_REQUEST:
    case UPDATE_COUNCIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COUNCIL_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_COUNCIL_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_COUNCIL_FAIL:
    case UPDATE_COUNCIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_COUNCIL_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_COUNCIL_RESET:
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
