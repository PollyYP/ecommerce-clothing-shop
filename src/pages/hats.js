import React, { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";

import ProductCard from "../components/productCard";

import "../styles/collectionPreview.styles.scss";

function HatsPage() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="collection-preview">
      <h1 className="title">{products[0].title.toUpperCase()}</h1>
      <div className="products-container">
        {products[0].items.map(({ id, ...otherItemProps }) => (
          <ProductCard key={id} {...otherItemProps} />
        ))}
      </div>
    </div>
  );
}

export default HatsPage;
