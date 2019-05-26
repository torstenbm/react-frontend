import React, { Component } from 'react';
import './App.css';
import Index from "./components/index";
import Register from "./components/register";
import Login from "./components/login";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ContentGaps from './components/contentgaps';
import Biases from './components/biases';

class App extends Component {
  render() {
    return (
        <Router>
          <Route path="/" exact component={Index} />
          <Route path="/register/" exact component={Register} />
          <Route path="/login/" exact component={Login} />
          <Route path="/content-gaps/" exact component={ContentGaps} />
          <Route path="/biases/" exact component={Biases} />
        </Router>
    );
  }
}

export default App;
