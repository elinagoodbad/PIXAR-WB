// import React from "react";
// import CartoonList from "../components/products/CartoonList";
// import "./CartoonPage.css"; // Импорт стилей для страницы CartoonPage

// const CartoonPage = () => {
//   return (
//     <div className="cartoon-page">
//       <div className="banner">
//         <img
//           src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1686849530151-BJL3AO4DHGRAZ6B7QX8T/d080_203e.pub16.272.jpg?format=2500w"
//           alt="Cartoons Banner"
//           className="banner-image"
//         />
//         <div className="banner-content">
//           <h1>Cartoons</h1>
//           <p>Explore our collection of amazing cartoons!</p>
//         </div>
//       </div>
//       <CartoonList />
//     </div>
//   );
// };

// export default CartoonPage;
import React from "react";
import CartoonList from "../components/products/CartoonList";
import "./CartoonPage.css";

const CartoonPage = () => {
  return (
    <div className="cartoon-page">
      <div className="banner">
        <img
          src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1686849530151-BJL3AO4DHGRAZ6B7QX8T/d080_203e.pub16.272.jpg?format=2500w"
          alt="Cartoons Banner"
          className="banner-image"
        />
        <div className="banner-content">
          <h1>Cartoons</h1>
          <p>Explore our collection of amazing cartoons!</p>
        </div>
      </div>
      <CartoonList />
      <div className="additional-banner">
        <img
          src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1418860154988-66PMBN9NRS6O58D1XHUN/luna14.jpg?format=2500w"
          alt="Additional Banner"
        />
      </div>
    </div>
  );
};

export default CartoonPage;
