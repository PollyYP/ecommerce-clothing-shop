import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import { CategoriesProvider } from "./contexts/categoriesContext";
import { CartProvider } from "./contexts/cartContext";

import "./index.scss";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
