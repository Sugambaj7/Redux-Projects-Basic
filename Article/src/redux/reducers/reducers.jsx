const initialState = {
  listOfArticles: [],
};

export const addArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return {
        listOfArticles: [
          ...state.listOfArticles,
          { text: action.payload.text },
        ],
      };

    default:
      return state;
  }
};
