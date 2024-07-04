import React from "react";
import CartoonList from "../components/products/CartoonList";
import "./CartoonPage.modal.css";
import Parallax from "../components/products/Parallax";

const CartoonPage = () => {
  return (
    <div className="cartoon-page">
      <div className="banner-cartoon-page">
        <Parallax />
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
