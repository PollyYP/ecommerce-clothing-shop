import React from "react";
import SHOP_DATA from "../data/shopData";
import CollectionPreview from "../components/collectionPreview";

function ShopPage() {
  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default ShopPage;
