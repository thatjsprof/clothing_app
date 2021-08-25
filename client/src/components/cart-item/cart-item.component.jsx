import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { name, quantity, price, imageUrl } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name}></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">${quantity * price}</span>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
