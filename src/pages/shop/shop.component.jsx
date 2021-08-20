import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../../components/collection/collection.component";
import Spinner from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { getCollectionIsFetching } from "../../redux/shop/shop.selectors";

const CollectionOverviewWithSpinner = Spinner(CollectionOverview);
const CollectionPageWithSpinner = Spinner(Collection);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        ></Route>
        <Route
          path={`${match.path}/:collectionID`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isFetching} {...props} />
          )}
        ></Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  isFetching: getCollectionIsFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
