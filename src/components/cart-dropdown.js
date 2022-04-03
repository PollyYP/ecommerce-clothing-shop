import React from "react";

import CustomButton from "./custom-button";

import "../styles/cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown-container">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
