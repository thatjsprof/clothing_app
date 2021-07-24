import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JGqfWIu1t9GGBuzKy7EFqYN2XYMxQeG3BswarTbKBwkJLBmLy6EG3VBLY8cjnFHbMfBlVZGN7H0vccFNG6M1sht00jRfzhzSh";

  const onToken = (token) => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeButton;
