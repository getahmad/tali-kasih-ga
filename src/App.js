import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import DiscoverCategory from "./pages/DiscoverCategory";
import SearchResult from "./pages/SearchResult";
import LoginProses from "./components/LoginProses";
import CreateCampaign from "./pages/CreateCampaign";
// import { checkLogin, checkAdmin } from "./Helper";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/discover/:category">
            <DiscoverCategory />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Route exact path="/search/:result">
            <SearchResult />
          </Route>
          <Route exact path="/login-proses">
            <LoginProses />
          </Route>
          <Route exact path="/campaign/create">
            <CreateCampaign />
          </Route>
          {/* {checkLogin() && <></>}
          {checkAdmin() && <></>} */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
