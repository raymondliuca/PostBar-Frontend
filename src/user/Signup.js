import React, { Component } from 'react'
import {Container, Form, Button} from 'react-bootstrap'

export default class Signup extends Component {

  state= {}

  changeHandler = (e) => {
          let temp = {... this.state}
          temp[e.target.name] = e.target.value;
          this.setState(temp)
  }
  registerHandler = () => {
      this.props.register(this.state)
  }
  render() {
        console.log(this.state)
    return (
      <div>
          <h1>Sign Up</h1>
          <Container>

            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" onChange={this.changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" onChange={this.changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="emailAddress" onChange={this.changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="pasword" onChange={this.changeHandler}></Form.Control>
            </Form.Group>          


            <Button variant='primary' onClick={this.registerHandler} >
                Register
            </Button>


          </Container>
      </div>
    )
  }
}