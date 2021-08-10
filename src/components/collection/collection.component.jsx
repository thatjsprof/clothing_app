import React from "react";
import { connect } from "react-redux";
import { getCollectionData } from "../../redux/shop/shop.selectors";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection.styles.scss";

const Collection = ({ collectionData }) => {
  const collection = collectionData
    ? collectionData
    : {
        title: "",
        items: [],
      };
  return (
    <div className="collection">
      <h1 className="title">{collection.title}</h1>
      <div className="items">
        {collection.items.map((item) => {
          return <CollectionItem key={item.id} item={item}></CollectionItem>;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collectionData: getCollectionData(ownProps.match.params.collectionID)(state),
});

export default connect(mapStateToProps)(Collection);
