import {
  ALL_PROJECT_FAIL,
  ALL_PROJECT_REQUEST,
  ALL_PROJECT_SUCCESS,
  CLEAR_ERRORS,
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_RESET,
  NEW_REVIEW_FAIL,
  ADMIN_PROJECT_REQUEST,
  ADMIN_PROJECT_SUCCESS,
  ADMIN_PROJECT_FAIL,
  NEW_PROJECT_REQUEST,
  NEW_PROJECT_SUCCESS,
  NEW_PROJECT_FAIL,
  NEW_PROJECT_RESET,
  DELETE_PROJECT_REQUEST,
  UPDATE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  UPDATE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  UPDATE_PROJECT_FAIL,
  DELETE_PROJECT_RESET,
  UPDATE_PROJECT_RESET,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_RESET,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
} from "../constans/ProjectConstans";

export const projectsReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case ALL_PROJECT_REQUEST:
    case ADMIN_PROJECT_REQUEST:
      return {
        loading: true,
        projects: [],
      };
    case ALL_PROJECT_SUCCESS:
      return {
        loading: false,
        projects: action.payload.projects,
        projectsCount: action.payload.projectsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProjectsCount: action.payload.filteredProjectsCount,
      };

    case ADMIN_PROJECT_SUCCESS:
      return {
        loading: false,
        projects: action.payload,
      };

    case ALL_PROJECT_FAIL:
    case ADMIN_PROJECT_FAIL:
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

export const projectDetailsReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case PROJECT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PROJECT_DETAILS_SUCCESS:
      return {
        loading: false,
        project: action.payload,
      };
    case PROJECT_DETAILS_FAIL:
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

// Project review
export const newReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_REVIEW_RESET:
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

// New Project ----Admin
export const newProjectReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case NEW_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_PROJECT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        project: action.payload.project,
      };
    case NEW_PROJECT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_PROJECT_RESET:
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

// Delete Project
export const deleteProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PROJECT_REQUEST:
    case UPDATE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_PROJECT_FAIL:
    case UPDATE_PROJECT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PROJECT_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_PROJECT_RESET:
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

// All reviews --- Admin
export const projectReviewsReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case ALL_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_REVIEW_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case ALL_REVIEW_FAIL:
      return {
        ...state,
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

// Delete Review ----- Admin
export const deleteReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_REVIEW_RESET:
      return {
        ...state,
        isDeleted: false,
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