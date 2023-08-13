import Topbar from "./components/topbar/TopBar.js";
import Homepage from "./pages/home/Home.js";
import Login from "./pages/login/Login.js";
import Register from "./pages/register/Register.js";
import Settings from "./pages/settings/Settings.js";
import Single from "./pages/single/Single.js";
import Write from "./pages/write/Write.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Switch } from 'react-router-dom';
import React from 'react';

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;