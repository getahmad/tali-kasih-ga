import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";

const App = () => {
  return ( 
    <>
     <Router>
        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
    </>
   );
}
 
export default App;