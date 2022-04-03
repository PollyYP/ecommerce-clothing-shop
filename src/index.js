import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import { ProductsProvider } from "./contexts/productsContext";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
