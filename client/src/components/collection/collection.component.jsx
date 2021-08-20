import React from "react";
import { connect } from "react-redux";
import { getCollectionData } from "../../redux/shop/shop.selectors";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection.styles.scss";

const Collection = ({ collectionData }) => {
  return (
    <div className="collection">
      <h1 className="title">{collectionData.title}</h1>
      <div className="items">
        {collectionData.items.map((item) => {
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
