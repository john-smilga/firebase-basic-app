import React from "react";
import "./App.css";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/create" component={CreatePost}></Route>
      </Switch>
    </Router>
  );
}

export default App;
