import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import HatsPage from "./pages/hats";
import SneakersPage from "./pages/sneakers";
import JacketsPage from "./pages/jackets";
import WomensPage from "./pages/womens";
import MensPage from "./pages/mens";
import { ContactPage } from "./pages/contact";
import SignInAndSignUpPage from "./pages/sign-in-sign-up-page";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/shop/hats" component={HatsPage} />
          <Route path="/shop/sneakers" component={SneakersPage} />
          <Route path="/shop/jackets" component={JacketsPage} />
          <Route path="/shop/womens" component={WomensPage} />
          <Route path="/shop/mens" component={MensPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
