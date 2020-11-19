import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import Spaceship from "./components/Spaceship";
import Land from "./components/Land";
// import Weather from "./components/Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" />
            <Route path="/spaceship" />
            <Route path="/land" component={Land} />
            <Route path="/spaceship/land/weather" />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
