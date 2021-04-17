import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import MeetTeacher from "./components/MeetTeacher/MeetTeacher";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddService from "./components/AddService/AddService";
import Review from "./components/Home/Review/Review";
import AddReview from "./components/AddReview/AddReview";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment/:name">
            <MeetTeacher></MeetTeacher>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/review">
            <AddReview></AddReview>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
