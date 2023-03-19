import axios from "axios";
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
  DELETE_FAQ_REQUEST,
  UPDATE_FAQ_REQUEST,
  DELETE_FAQ_SUCCESS,
  UPDATE_FAQ_SUCCESS,
  DELETE_FAQ_FAIL,
  UPDATE_FAQ_FAIL,

} from "../constans/FaqConstans";

// Get All Faqs Details
export const getFaqDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: FAQ_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/faq/${id}`);

    dispatch({
      type: FAQ_DETAILS_SUCCESS,
      payload: data.faq,
    });
  } catch (error) {
    dispatch({
      type: FAQ_DETAILS_FAIL,
      payload: error.response.message,
    });
  }
};


// THÊM ĐỀ TÀI --------Admin
export const createFaq = (faqData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_FAQ_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/faq/new`,
      faqData,
      config
    );

    dispatch({
      type: NEW_FAQ_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_FAQ_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get ALl Faqs 
export const getFaq = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_FAQ_REQUEST });

    const { data } = await axios.get("/api/v2/faq");

    dispatch({
      type: ALL_FAQ_SUCCESS,
      payload: data.faqs,
    });
  } catch (error) {
    dispatch({
      type: ALL_FAQ_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Faq ------Admin
export const deleteFaq = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_FAQ_REQUEST });

    const { data } = await axios.delete(`/api/v2/faq/${id}`);

    dispatch({
      type: DELETE_FAQ_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_FAQ_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Faq
export const updateFaq = (id, faqData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_FAQ_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/faq/${id}`,
      faqData,
      config
    );

    dispatch({
      type: UPDATE_FAQ_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_FAQ_FAIL,
      payload: error.response.data.message,
    });
  }
};


//   Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
}