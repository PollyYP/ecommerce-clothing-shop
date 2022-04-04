import React, { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";

import ProductCard from "../components/productCard";

import "../styles/collectionPreview.styles.scss";

function SneakersPage() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="collection-preview">
      <h1 className="title">{products[1].title.toUpperCase()}</h1>
      <div className="products-container">
        {products[1].items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SneakersPage;
