
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import DiscoverCategory from "./pages/DiscoverCategory";
import SearchResult from "./pages/SearchResult";
import LoginProses from "./components/LoginProses";
import CreateCampaign from "./pages/CreateCampaign";
import Logout from "./components/Logout";
import { checkLogin, checkAdmin } from "./Helper";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import NotFound from "./pages/NotFound";
// import Admin from "./pages/Admin";
import CampaignDetail from "./pages/CampaignDetail";
import CampaignDetailFundraiser from "./pages/CampaignDetailFundraiser";
import CampaignDonate from "./pages/Donate";
import NotFoundMustLogin from "./pages/NotFoundMustLogin";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
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
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/admin">
            {!checkAdmin() && <NotFound />}
            {/* {checkAdmin() && <Admin />} */}
          </Route>
          <Route exact path="/campaign/create">
            {!checkLogin() && <NotFoundMustLogin />}
            {checkLogin() && <CreateCampaign />}
          </Route>
          <Route exact path="/profile/edit">
            {checkLogin() && <ProfileEdit />}
            {!checkLogin() && <NotFound />}
          </Route>
          <Route exact path="/profile">
            {checkLogin() && <Profile />}
            {!checkLogin() && <NotFoundMustLogin />}
          </Route>
          <Route exact path="/campaign/campaign-detail/:campaignId">
            <CampaignDetail />
          </Route>
          <Route exact path="/campaign/campaign-detail/fundraiser/:campaignId">
            {checkLogin() && <CampaignDetailFundraiser />}
            {!checkLogin() && <NotFoundMustLogin />}
          </Route>
          <Route exact path="/campaign/campaign-detail/donate/:campaignId">
            {checkLogin() && <CampaignDonate />}
            {!checkLogin() && <NotFoundMustLogin />}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
