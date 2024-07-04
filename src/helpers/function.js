export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart || { cartoons: [], movies: [], totalPrice: 0 };
};

// Функция для подсчета стоимости за одну позицию
export const calcSubPrice = (elem) => {
  return elem.count * elem.item.price;
};

// Функция для подсчета общей стоимости
export const calcTotalPrice = (products) => {
  return products.reduce((acc, curr) => acc + curr.subPrice, 0);
};

// Функция для подсчета количества товаров в корзине
export const getProductsCountInCart = () => {
  let cart = getLocalStorage();
  const totalProducts =
    (cart.cartoons || []).length + (cart.movies || []).length;
  return totalProducts;
};
