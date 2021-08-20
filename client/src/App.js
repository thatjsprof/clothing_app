import React, { useEffect } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { checkUserSession } from "./redux/user/user.actions";
import { getCurrentUser } from "./redux/user/user.selectors";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact></Route>
        <Route
          path="/signin"
          render={() =>
            !currentUser ? <SignInAndSignUpPage /> : <Redirect to="/" />
          }
          exact
        ></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/checkout" component={CheckoutPage} exact></Route>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
