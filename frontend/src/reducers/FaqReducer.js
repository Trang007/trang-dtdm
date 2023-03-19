import {
  ALL_FAQ_FAIL,
  ALL_FAQ_REQUEST,
  ALL_FAQ_SUCCESS,
  CLEAR_ERRORS,
  FAQ_DETAILS_FAIL,
  FAQ_DETAILS_REQUEST,
  FAQ_DETAILS_SUCCESS,
  NEW_FAQ_REQUEST,
  NEW_FAQ_SUCCESS,
  NEW_FAQ_FAIL,
  NEW_FAQ_RESET,
  DELETE_FAQ_REQUEST,
  UPDATE_FAQ_REQUEST,
  DELETE_FAQ_SUCCESS,
  UPDATE_FAQ_SUCCESS,
  DELETE_FAQ_FAIL,
  UPDATE_FAQ_FAIL,
  DELETE_FAQ_RESET,
  UPDATE_FAQ_RESET,
} from "../constans/FaqConstans";

export const faqsReducer = (state = { faqs: [] }, action) => {
  switch (action.type) {
    case ALL_FAQ_REQUEST:
      return {
        loading: true,
        faqs: [],
      };

    case ALL_FAQ_SUCCESS:
      return {
        loading: false,
        faqs: action.payload,
      };
    case ALL_FAQ_FAIL:
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

export const faqDetailsReducer = (state = { faq: {} }, action) => {
  switch (action.type) {
    case FAQ_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case FAQ_DETAILS_SUCCESS:
      return {
        loading: false,
        faq: action.payload,
      };
    case FAQ_DETAILS_FAIL:
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


// New Faq ----Admin
export const newFaqReducer = (state = { faq: {} }, action) => {
  switch (action.type) {
    case NEW_FAQ_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_FAQ_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        faq: action.payload.faq,
      };
    case NEW_FAQ_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_FAQ_RESET:
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

// Delete Faq
export const deleteFaqReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FAQ_REQUEST:
    case UPDATE_FAQ_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_FAQ_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_FAQ_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_FAQ_FAIL:
    case UPDATE_FAQ_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_FAQ_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_FAQ_RESET:
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
