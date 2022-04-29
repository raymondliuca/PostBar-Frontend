import React, { Component } from 'react'
import PostList from './post/PostList'
import Signup from './user/Signup'
import Signin from './user/Signin'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Alert } from "react-bootstrap"

export default class App extends Component {

  state = {
    isAuth: false,
    user: null,
    message: null,
    successMessage: null
  }

  componentDidMount() { 
    let token = localStorage.getItem("token")

    if (token != null) {
      let user = jwt_decode(token);

      if (user) {
        this.setState({
          isAuth: true,
          user: user
        })
      }
      else {
        localStorage.removeItem("token");
        this.setState({
          isAuth: false
        })
      }
    }
  }

  registerHandler = (user) => {
    Axios
    .post("auth/signup", user)
    .then(response =>{
        console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
    .then(response => {
      console.log(response.data.token)

      if(response.data.token != null) {
        localStorage.setItem("token", response.data.token)
        let user = jwt_decode(response.data.token)

        this.setState({
          isAuth: true,
          user: user,
          message: "User logged in successfully!!!"
        })
      }
    })
    .catch(error => {
      console.log(error)
      this.setState({
        isAuth: false,
      })
    })
  }

  logoutHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem("token");
    this.setState({
      isAuth: false,
      user: null,
      message: "User logged out successfully!!!"
    })
  }

  render() {
    const {isAuth} = this.state
    return (
      <div>
        <Router>
        <nav>
            <div>
            {isAuth ? (
              <div>
                {this.state.user ? "Welcome " + this.state.user.user.name : null} {" "}
                <Link to="/">Home</Link> {" "}
                <Link to="/logout" onClick={this.logoutHandler}>Logout</Link>
              </div>
            ) : (
              <div>
                  <Link to="/">Home</Link> {" "}
                  <Link to="/signup">Signup</Link> &nbsp;
                  <Link to="/signin">Signin</Link> &nbsp;
              </div>
            )
            }
            </div>
          </nav>

          <div>
            <Routes>
              <Route path="/" element={<PostList user={this.state.user}/>}></Route>
              <Route path="/signup" element={<Signup register = {this.registerHandler}/>}></Route>
              <Route path="/signin" element={<Signin login={this.loginHandler}/>}></Route>
            </Routes>
          </div>

          </Router>

      </div>
    )
  }
}


