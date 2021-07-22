import { createSelector } from 'reselect'

const shopSelect = (state) => state.shop

export const getShopData = createSelector(
    [shopSelect],
    (shop) => shop.ShopData
)