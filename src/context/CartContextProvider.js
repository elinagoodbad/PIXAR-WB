import React, { createContext, useContext, useReducer } from "react";
import { getLocalStorage, getMovieCountInCart } from "../helpers/function";
export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
  const INIT_STATE = {
    cart: JSON.parse(localStorage.getItem("cart")),
    cartLength: getMovieCountInCart(),
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_CART":
        return { ...state, cart: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //   !CREATE
  const addMovieToCart = (movie) => {
    let cart = getLocalStorage();
    if (!cart) {
      cart = {
        movies: [],
      };
    }
    let newMovie = {
      item: movie,
      count: 1,
    };
    let movieToFind = cart.movies.filter((elem) => elem.item.id === movie.id);
    if (movieToFind.length === 0) {
      cart.movies.push(newMovie);
    } else {
      cart.movies = cart.movies.filter((elem) => elem.item.id !== movie.id);
    }
  };
  //   !GET
  const getCart = () => {
    let cart = getLocalStorage();
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify({ movies: [] }));
      cart = {
        movies: [],
      };
      dispatch({
        type: "GET_CART",
        payload: cart,
      });
    }
  };
  const checkMovieInCart = (id) => {
    let cart = getLocalStorage();
    if (cart) {
      let newMovie = cart.movies.filter((elem) => elem.item.id === id);
      return newMovie.length > 0 ? true : false;
    }
  };
  //   !DELETE
  const deleteMovieFromCart = (id) => {
    let cart = getLocalStorage();
    cart.movies = cart.movies.filter((elem) => elem.item.id !== id);
    dispatch({ type: "GET_CART", payload: cart });
  };
  const values = {
    cart: state.cart,
    addMovieToCart,
    checkMovieInCart,
    deleteMovieFromCart,
    getCart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
