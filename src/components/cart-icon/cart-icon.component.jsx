import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping.svg";
import { toggleHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.length || 0,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
