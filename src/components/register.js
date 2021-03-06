import React, { Component } from 'react';
import './login.css';
import 'axios';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import { Link, BrowserRouter as Router, Redirect } from "react-router-dom";

class Register extends Component {
    state = {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        response: ""
    }
    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({[name]: value});
      }

      handleSubmit = event => {
        let bodyFormData = new FormData();
        Object.entries(this.state).forEach(
            ([key, value]) => bodyFormData.set(key, value)
        )
        Axios.post(
            "https://login-service-golang.herokuapp.com/register",
            bodyFormData,
            { headers: {'Content-Type': 'multipart/form-data' }}
        )
        .then(response => {
            console.log(response);
            if (response.data.hasOwnProperty("access")){
                document.cookie = "access="+response.data["access"];
                this.props.history.push('/')
            }
            else {
                this.setState({
                    response: "Something went wrong"
                })
            }
        })
      }

  render() {
    const cookies = new Cookies();
    if (cookies.get("access") == "granted"){
      return (<Redirect to="/"></Redirect>)
    }
    return (
        <div className="login-page">
            <h2>Register</h2>
            <div className="login-form">
                <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                <input name="password" type="text" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                <input name="firstname" type="text" placeholder="Firstname" value={this.state.firstname} onChange={this.handleChange} />
                <input name="lastname" type="text" placeholder="Lastname" value={this.state.lastname} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Register</button>
                <div>
                    {this.state.response}
                </div>
            </div>
        </div>
    );
  }
}

export default Register;
