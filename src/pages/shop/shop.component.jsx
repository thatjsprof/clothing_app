import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../../components/collection/collection.component";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
      <Route path={`${match.path}/:collectionID`} component={Collection}></Route>
    </div>
  );
};

export default Shop;
