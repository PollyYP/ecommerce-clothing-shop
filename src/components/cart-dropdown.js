import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/cartContext";

import CustomButton from "./custom-button";
import CartItem from "./cart-item";

import "../styles/cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <CustomButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
