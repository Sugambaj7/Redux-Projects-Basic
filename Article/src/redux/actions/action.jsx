import { ADD_ARTICLE } from "../actions/actionTypes.jsx";

export const addArticle = (text) => {
  return {
    type: ADD_ARTICLE,
    payload: { text },
  };
};
