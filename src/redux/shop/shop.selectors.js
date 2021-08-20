import { createSelector } from "reselect";

const shopSelect = (state) => state.shop;

export const getShopData = createSelector(
  [shopSelect],
  (shop) => shop.ShopData
);

export const selectCollectionPreview = createSelector(
  [getShopData],
  (ShopData) => {
    return ShopData ? Object.keys(ShopData).map((key) => ShopData[key]) : [];
  }
);

export const getCollectionData = (collectionID) =>
  createSelector([getShopData], (shopData) => {
    return shopData ? shopData[collectionID] : null;
  });

export const getCollectionIsFetching = createSelector(
  [shopSelect],
  (shop) => {
    return shop.isFetching
  }
)
