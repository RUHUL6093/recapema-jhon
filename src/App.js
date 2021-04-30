import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import NotFound from "./Components/NotFound/NotFound";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/shop">
            {" "}
            <Shop />
          </Route>
          <Route path="/review">
            {" "}
            <Review />
          </Route>
          <Route path="/manage">
            {" "}
            <Inventory />
          </Route>
          <Route exact path="/">
            {" "}
            <Shop />
          </Route>
          <Route path="*">
            {" "}
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
