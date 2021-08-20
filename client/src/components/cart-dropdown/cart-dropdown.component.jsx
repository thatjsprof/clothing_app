import React from "react";
import CustomButton from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { toggleHidden } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
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
      <CustomButton
        type="button"
        onClick={() => {
          dispatch(toggleHidden());
          history.push(`/checkout`);
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};

export default CartDropdown
