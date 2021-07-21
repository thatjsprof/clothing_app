import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { getCurrentUser } from "../../redux/user/user.selectors";
import { hidden } from "../../redux/cart/cart.selectors";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";

const Header = ({ currentUser, hiddenState }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={async () => await auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon></CartIcon>
      </div>
      {hiddenState ? "" : <CartDropdown></CartDropdown>}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
  hiddenState: hidden,
});

export default connect(mapStateToProps)(Header);
