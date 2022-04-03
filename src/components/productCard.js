import React from "react";
import CustomButton from "./custom-button";

import "../styles/productCard.styles.scss";

function ProductCard({ id, name, price, imageUrl }) {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton buttonType="inverted">Add to card</CustomButton>
    </div>
  );
}

export default ProductCard;
