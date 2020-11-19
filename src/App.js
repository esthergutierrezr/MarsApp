
import HomePage from "./components/HomePage";
import "./App.css";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter> 
    <HomePage />
   </BrowserRouter>
      
     
    </div>
  );
}

export default App;
