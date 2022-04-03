import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crownLogo.svg";
import { signOutUser } from "../firebase/firebase.utils";
import { UserContext } from "../contexts/userContext";
import { CartContext } from "../contexts/cartContext";

import CartIcon from "./cart-icon";
import CartDropdown from "./cart-dropdown";

import "../styles/header.styles.scss";

function Header() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {currentUser && (
          <span className="option">
            Hi{" "}
            {currentUser.displayName
              ? currentUser.displayName
              : currentUser.email}
          </span>
        )}
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <span className="option" onClick={signOutUser}>
            SIGN OUT
          </span>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
}

export default Header;
