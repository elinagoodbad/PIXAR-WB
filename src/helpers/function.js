export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};

export const getMovieCountInCart = () => {
  let cart = getLocalStorage();
  return cart ? cart.movies.length : 0;
};
