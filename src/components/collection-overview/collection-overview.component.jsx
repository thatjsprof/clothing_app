import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getShopData } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../preview-collection/preview-collection.component";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ shop }) => {
  return (
    <div className="collection-overview">
      {shop.map(({id, ...props }) => {
        return <CollectionPreview key={id} {...props}></CollectionPreview>;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shop: getShopData,
});

export default connect(mapStateToProps)(CollectionOverview);
