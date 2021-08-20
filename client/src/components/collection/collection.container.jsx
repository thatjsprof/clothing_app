import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsIsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import Collections from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionsIsLoaded(state),
});

const CollectionsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collections);

export default CollectionsContainer;
