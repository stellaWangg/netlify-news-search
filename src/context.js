import React, { useEffect, useState, useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";
const API_ENDPOINT = `http://hn.algolia.com/api/v1/search?`;
const initialState = {
  query: "react",
  page: 0,
  nbPages: 0,
  hits: [],
  loading: true,
};
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchNews = async (url) => {
    dispatch({ type: "LOADING" });
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      dispatch({
        type: "SEARCH_CHANGE",
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const searchFunc = (query) => {
    dispatch({ type: "HANDLE_SEARCH", payload: query });
  };
  const removeFunc = (id) => {
    dispatch({ type: "REMOVE_NEWS", payload: id });
  };

  const handleBtns = (value) => {
    dispatch({ type: "HANDLE_PAGES", payload: value });
  };

  useEffect(() => {
    fetchNews(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);
  return (
    <AppContext.Provider
      value={{ ...state, searchFunc, removeFunc, handleBtns }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
