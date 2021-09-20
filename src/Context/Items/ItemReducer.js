import { GET_ITEMS, GET_ITEM, GET_CATEGORIES, SET_MODAL_ERROR } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload,
      };
    case GET_ITEM:
      return {
        ...state,
        selectedItem: payload,
      };
    case GET_CATEGORIES:
        return {
          ...state,
          categories: payload,
        };
    case SET_MODAL_ERROR:
        return {
          ...state,
          modalError: payload,
        };
    default:
      return state;
  }
};