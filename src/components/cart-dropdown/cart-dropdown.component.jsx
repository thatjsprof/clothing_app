import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem}></CartItem>;
          })
        ) : (
          <span className="empty-message">No Items in cart</span>
        )}
      </div>
      <CustomButton type="button" onClick={() => history.push(`/checkout`)}>
        Go To Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
