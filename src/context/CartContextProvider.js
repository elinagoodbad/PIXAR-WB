// import React, { createContext, useContext, useReducer } from "react";
// import {
//   calcSubPrice,
//   calcTotalPrice,
//   calctotalPrice,
//   getLocalStorage,
//   getProductsCountInCart,
// } from "../helpers/function";
// export const cartContext = createContext();
// export const useCart = () => useContext(cartContext);
// const CartContextProvider = ({ children }) => {
//   const INIT_STATE = {
//     cart: JSON.parse(localStorage.getItem("cart")),
//     cartLength: getProductsCountInCart(),
//   };
//   const reducer = (state = INIT_STATE, action) => {
//     switch (action.type) {
//       case "GET_CART":
//         return { ...state, cart: action.payload };
//     }
//   };
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);
//   //!CREATE
//   //функция для длбавления товара в корзину
//   //?1 всегда стягивать актуальные данные с localStorage
//   //?2 после выполнения функционала обновлять localStorage
//   //?3 обновлять локальное состояние
//   const addProductToCart = (product) => {
//     //получаем содержимое из хранилища
//     let cart = getLocalStorage();
//     if (!cart) {
//       cart = {
//         cartoons: [],
//         totalPrice: 0,
//       };
//     }
//     // создаем обьект, который добавим в localStorage в массив car.products
//     let newProduct = {
//       item: product,
//       count: 1,
//       subPrice: 0,
//     };
//     // проверяем есть ли продукт который хотим добавить в корзину
//     let productToFind = cart.cartoons.filter(
//       (elem) => elem.item.id === product.id
//     );
//     // если товар уже добавлен в корзину, то удаляем его из массива cart. products через filter ,в противном случае добавляем его в cart.products
//     if (productToFind.length === 0) {
//       cart.cartoons.push(newProduct);
//     } else {
//       cart.products = cart.cartoons.filter(
//         (elem) => elem.item.id !== cartoons.id
//       );
//     }
//     //пересчитываем totalPrice
//     cart.totalPrice = calcTotalPrice(cart.cartoons);
//     // обновляем данные в localStorage
//     localStorage.setItem("cart", JSON.stringify(cart));
//     //обновляем состояние
//     dispatch({
//       type: "GET_CART",
//       payload: cart,
//     });
//   };
//   //! GET
//   //функция для получения продкетов добавленных в корзину из хранилища
//   const getCart = () => {
//     //получаем данные из localStorage
//     let cart = getLocalStorage();
//     if (!cart) {
//       localStorage.setItem(
//         "cart",
//         JSON.stringify({ cartoons: [], totalPrice: 0 })
//       );
//       cart = {
//         cartoons: [],
//         totalPrice: 0,
//       };
//       //обновляем состояние
//       dispatch({
//         type: "GET_CART",
//         payload: cart,
//       });
//     }
//   };

//   // функция для проверки на наличие товара в корзине
//   const checkProductInCart = (id) => {
//     let cart = getLocalStorage();
//     if (cart) {
//       let newCart = cart.cartoons.filter((elem) => elem.item.id === id);
//       return newCart.length > 0 ? true : false;
//     }
//   };
//   // функция для изменения стоимости за одну позицию
//   const changeProductCount = (id, value) => {
//     let cart = getLocalStorage();
//     cart.cartoons = cart.cartoons.map((elem) => {
//       if (elem.item.id == id) {
//         elem.count = value;
//         elem.subPrice = calcSubPrice(elem);
//       }
//       return elem;
//     });
//     //обновляем totalPrice
//     cart.totalPrice = calcTotalPrice(cart.cartoons);
//     //обновляем localStorage
//     localStorage.setItem("cart", JSON.stringify(cart));
//     //обновляем состояние
//     dispatch({
//       type: "GET_CART",
//       payload: cart,
//     });
//   };

//   // ! DELETE
//   const deleteProductFromCart = (id) => {
//     let cart = getLocalStorage();
//     cart.cartoons = cart.cartoons.filter((elem) => elem.item.id !== id);
//     // меняем totalPrice
//     cart.totalPrice = calcTotalPrice(cart.cartoons);
//     //обновляем localStorage
//     localStorage.setItem("cart", JSON.stringify(cart));
//     //обновляем состояние
//     dispatch({
//       type: "GET_CART",
//       payload: cart,
//     });
//   };

//   const values = {
//     addProductToCart,
//     cart: state.cart,
//     checkProductInCart,
//     changeProductCount,
//     deleteProductFromCart,
//     getCart,
//   };
//   return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
// };

// export default CartContextProvider;
//!
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
            (action.payload.cartoons ? action.payload.cartoons.length : 0) +
            (action.payload.movies ? action.payload.movies.length : 0),
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
    if (cart && cart[category] && Array.isArray(cart[category])) {
      return cart[category].some((elem) => elem.item.id === id);
    }
    return false;
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
