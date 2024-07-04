import React, { createContext, useContext, useReducer } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getLocalStorage,
  getProductsCountInCart,
} from "../helpers/function";

export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
  const INIT_STATE = {
    cart: JSON.parse(localStorage.getItem("cart")) || {
      cartoons: [],
      movies: [],
      totalPrice: 0,
    },
    cartLength: getProductsCountInCart(),
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_CART":
        return {
          ...state,
          cart: action.payload,
          cartLength:
            action.payload.cartoons.length + action.payload.movies.length,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProductToCart = (product, category) => {
    let cart = getLocalStorage() || { cartoons: [], movies: [], totalPrice: 0 };
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };

    const existingProduct = cart[category].find(
      (elem) => elem.item.id === product.id
    );

    if (existingProduct) {
      cart[category] = cart[category].map((elem) => {
        if (elem.item.id === product.id) {
          elem.count += 1;
          elem.subPrice = calcSubPrice(elem);
        }
        return elem;
      });
    } else {
      cart[category].push(newProduct);
    }

    cart.totalPrice = calcTotalPrice(cart.cartoons.concat(cart.movies));
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({ type: "GET_CART", payload: cart });
  };

  const getCart = () => {
    let cart = getLocalStorage() || { cartoons: [], movies: [], totalPrice: 0 };
    dispatch({ type: "GET_CART", payload: cart });
  };

  const checkProductInCart = (id, category) => {
    const cart = getLocalStorage();
    return cart ? cart[category].some((elem) => elem.item.id === id) : false;
  };

  const changeProductCount = (id, count) => {
    let cart = getLocalStorage();
    cart.cartoons = cart.cartoons.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.movies = cart.movies.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.cartoons.concat(cart.movies));
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({ type: "GET_CART", payload: cart });
  };

  const deleteProductFromCart = (id) => {
    let cart = getLocalStorage();
    cart.cartoons = cart.cartoons.filter((elem) => elem.item.id !== id);
    cart.movies = cart.movies.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.cartoons.concat(cart.movies));
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({ type: "GET_CART", payload: cart });
  };

  const values = {
    addProductToCart,
    cart: state.cart,
    checkProductInCart,
    changeProductCount,
    deleteProductFromCart,
    getCart,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
