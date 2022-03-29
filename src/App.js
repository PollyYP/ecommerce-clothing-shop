import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import SignInAndSignUpPage from "./pages/sign-in-sign-up-page";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
