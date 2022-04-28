import React, { Component } from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import Axios from 'axios'

export default class Signin extends Component {
    state= {}

    changeHandler = (e) => {
            let temp = {... this.state}
            temp[e.target.name] = e.target.value;
            this.setState(temp)
    }
    loginHandler = () => {
        this.props.login(this.state)
    }
    render() {
          console.log(this.state)
      return (
        <div>
            <h1>Sign Up</h1>
            <Container>
  
              <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control name="emailAddress" onChange={this.changeHandler}></Form.Control>
              </Form.Group>
  
              <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="pasword" onChange={this.changeHandler}></Form.Control>
              </Form.Group>
              
              <Button variant='primary' onClick={this.loginHandler} >
                Login
              </Button>
  
  
            </Container>
        </div>
      )
    }
  }