import React from "react";
import LoginPage from "./LandingPages/LoginPage";
import Videos from "./LandingPages/Videos";
import Landing from "./Components/landing";
import SignUp from "./LandingPages/SignUp";
import Recommendation from "./LandingPages/Recommendation";
import ChangePassword from "./LandingPages/ChangePassword";

import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-screen h-screen overflow-auto">
      <Router>
        <Routes>
          <Route path="/" element = {<Landing/>} / >
          <Route path="/log_in" element = {<LoginPage />} / >
          <Route path="/videos" element = {<Videos />} / >
          <Route path="/sign_up" element = {<SignUp />} / >
          <Route path="/recommendation" element = {<Recommendation />} / >
          <Route path="/change_password" element = {<ChangePassword />} / >
        </Routes>
      </Router>
      </div>
    );
  }
}

export default App;
