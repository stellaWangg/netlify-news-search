const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SEARCH_CHANGE":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        loading: false,
      };
    case "HANDLE_SEARCH":
      return { ...state, query: action.payload, page: 0 };
    case "HANDLE_PAGE":
      return { ...state };
    case "REMOVE_NEWS":
      return {
        ...state,
        hits: state.hits.filter((news) => news.objectID !== action.payload),
      };
    case "HANDLE_PAGES":
      if (action.payload === "prev") {
        let newPage = state.page - 1;
        if (newPage < 0) {
          newPage = state.nbPages - 1;
        }
        return { ...state, page: newPage };
      } else {
        let newPage = state.page + 1;
        if (newPage > state.nbPages - 1) {
          newPage = 0;
        }
        return { ...state, page: newPage };
      }
  }
};

export default reducer;
