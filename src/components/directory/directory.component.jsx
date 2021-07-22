import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getShopData } from "../../redux/directory/directory.selectors";
import "./directory.styles.scss";

const Directory = ({ collections }) => {
  return (
    <div className="directory-menu">
      {collections.map(({ id, ...props }) => {
        return <MenuItem key={id} {...props}></MenuItem>;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: getShopData,
});

export default connect(mapStateToProps)(Directory);
