// // функция для получения данных из хранилища под ключем cart
// export const getLocalStorage = () => {
//   const cart = JSON.parse(localStorage.getItem("cart"));
//   return cart;
// };
// // функуция для подсчета стоимости за одну позицию
// export const calcSubPrice = (elem) => {
//   return elem.count * elem.item.price;
// };

// export const calcTotalPrice = (products) => {
//   const totalPrice = products.reduce((acc, curr) => {
//     if (curr.subPrice === 0) {
//       return acc + curr.item.price;
//     } else {
//       return acc + curr.subPrice;
//     }
//   }, 0);
//   return totalPrice;
// };
// //функция для вывода кол-ва товаров в корзине
// export const getProductsCountInCart = () => {
//   let cart = getLocalStorage();
//   return cart ? cart.products.lenght : 0;
// };
//!
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
