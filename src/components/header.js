import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crownLogo.svg";
import { UserContext } from "../contexts/userContext";
import { signOutUser } from "../firebase/firebase.utils";

import "../styles/header.styles.scss";

function Header() {
  const { currentUser } = useContext(UserContext);

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
      </div>
    </div>
  );
}

export default Header;
