import React, { useContext } from "react";
import CollectionPreview from "../components/collectionPreview";
import { ProductsContext } from "../contexts/productsContext";

function ShopPage() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop-page">
      {products.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default ShopPage;
