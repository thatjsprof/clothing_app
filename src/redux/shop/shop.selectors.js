import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const shopSelect = (state) => state.shop

export const getShopData = createSelector(
    [shopSelect],
    (shop) => shop.ShopData
)

export const getCollectionData = (collectionID) => createSelector(
    [getShopData],
    (shopData) => {
        return shopData.find((item) => item.id === COLLECTION_ID_MAP[collectionID])
    }
)