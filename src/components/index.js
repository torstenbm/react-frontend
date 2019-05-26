import React, { Component } from 'react';
import logo from '../marie.webp';
import './index.css';
import { Link, BrowserRouter as Router, Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';

class Index extends Component {
  render() {
    const cookies = new Cookies();
    if (cookies.get("access") != "granted"){
      return (<Redirect to="/login"></Redirect>)
    }
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="title">
              Welcome! What are you searching for?
            </div>
            <Router>
              <div className="buttons">
                <a className="button bias-button" href="/biases/">Biases</a>
                <a className="button cg-button" href="/content-gaps/">Content-gaps</a>
              </div>
            </Router>
          </div>
        </div>
    );
  }
}

export default Index;
