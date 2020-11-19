import React from "react";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import Spaceship from "./components/Spaceship";
import Land from "./components/Land";
<<<<<<< HEAD
import Weather from "./components/Weather";
||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
import Weather from "./components/Weather";
||||||||| merged common ancestors
import Weather from "./components/Weather";

=========
// import Weather from "./components/Weather";

>>>>>>>>> Temporary merge branch 2
=======
import Weather from "./components/Weather";
>>>>>>> 4177857a87efa925c808805e56c22d6aedc6e0d3
import "./App.css";

function App() {
  return (
    <div className="App">
      <Footer />
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/spaceship" component={Spaceship} />
            <Route path="/land" component={Land} />
            <Route path="/weather" component={Weather} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
