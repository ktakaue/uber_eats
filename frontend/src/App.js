import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { Restaurants } from "./containers/Restaurants"
import { Foods } from "./containers/Foods"
import { Orders } from "./containers/Orders"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Switch>
            <Route exact
            path="/restaurants">
              <Restaurants />
            </Route>
            <Route exact
            path="/foods">
              <Foods />
            </Route>
            <Route exact
            path="/orders">
              <Orders />
            </Route>
            <Route exact
              path="/restaurants/:restaurantsId/foods"
              render={({ match }) =>
          <Foods match={match}/>  }
            ></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
