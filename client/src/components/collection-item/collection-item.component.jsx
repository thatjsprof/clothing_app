import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import Button from "../button/button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={() => addItemToCart(item)} custom="custom-button" inverted>
          Add To Cart
        </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => {
    return dispatch(addItemToCart(item));
  },
});

export default connect(null, mapDispatchToProps)(CollectionItem);
