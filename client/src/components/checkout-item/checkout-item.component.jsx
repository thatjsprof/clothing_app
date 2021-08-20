import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {
    addItemToCart,
  clearCartItem,
  removeFromCart,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearCartItem, addItemToCart, removeFromCart }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCartItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCartItem: (id) => dispatch(clearCartItem(id)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeFromCart: (item) => dispatch(removeFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
