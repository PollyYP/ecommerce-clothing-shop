import React from "react";
import { useHistory } from "react-router-dom";

import ProductCard from "./productCard";

import "../styles/collectionPreview.styles.scss";

function CollectionPreview({ title, linkUrl, items }) {
  const { push } = useHistory();
  return (
    <div className="collection-preview">
      <div className="title-view" onClick={() => push(linkUrl)}>
        <h1 className="title">{title.toUpperCase()}</h1>
        <h4 className="view-all">view all</h4>
      </div>
      <div className="products-container">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
