import React, { useContext } from "react";
import CustomButton from "./custom-button";
import { CartContext } from "../contexts/cartContext";

import "../styles/productCard.styles.scss";

function ProductCard({ item }) {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = item;

  const addProductToCart = () => {
    addItemToCart(item);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </CustomButton>
    </div>
  );
}

export default ProductCard;
