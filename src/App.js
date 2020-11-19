import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import Spaceship from "./components/Spaceship";
import Land from "./components/Land";
import Weather from "./components/Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/spaceship" component={Spaceship} />
            <Route path="/spaceship/land" component={Land} />
            <Route path="/spaceship/land/weather" component={Weather} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
