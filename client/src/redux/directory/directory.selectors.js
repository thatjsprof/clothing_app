import { createSelector } from "reselect";

const directoryState = (state) => state.directory;

export const getShopData = createSelector(
  [directoryState],
  (directory) => directory.collections
);
