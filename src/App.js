import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import Navigation from "./pages/navigation";
import SignInAndSignUpPage from "./pages/sign-in-sign-up-page";
import Shop from "./pages/shop";
import Checkout from "./pages/checkout";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<SignInAndSignUpPage />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
