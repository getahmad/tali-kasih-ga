import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import "./App.css";
import DiscoverCategory from "./pages/DiscoverCategory";
import SearchResult from "./pages/SearchResult";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/discover/category">
            <DiscoverCategory />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Route exact path="/result">
            <SearchResult/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
