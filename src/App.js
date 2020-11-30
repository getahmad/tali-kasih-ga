import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import DiscoverCategory from "./pages/DiscoverCategory";
import "./App.css";
import LoginProses from "./components/LoginProses";

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
          <Route exact path="/login-proses">
            <LoginProses/>
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
