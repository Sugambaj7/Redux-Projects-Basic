import { configureStore } from "@reduxjs/toolkit";
import { addArticleReducer } from "./reducers/reducers.jsx";

export const store = configureStore({
  reducer: {
    articles: addArticleReducer,
  }
});
