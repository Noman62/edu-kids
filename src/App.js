import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/">
        <Home></Home>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
