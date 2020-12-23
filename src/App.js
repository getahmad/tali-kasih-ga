import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import "./App.css";
import DiscoverCategory from "./pages/DiscoverCategory";
import CampaignDetail from "./pages/CampaignDetail";
import CampaignDetailFundraiser from "./pages/CampaignDetailFundraiser";
import CampaignDonate from "./pages/Donate";

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
          <Route exact path="/campaign/campaign-detail/:campaignId">
            <CampaignDetail/>
          </Route>
          <Route exact path="/campaign/campaign-detail/fundraiser/:campaignId">
            <CampaignDetailFundraiser/>
          </Route>
          <Route exact path="/campaign/campaign-detail/donate">
            <CampaignDonate/>
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
