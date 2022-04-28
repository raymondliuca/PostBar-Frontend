import React, { Component } from 'react'

export default class PostCreateForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         newPost: {}
      }
    }

    handleChange = (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;

        const post = {...this.state.newPost}
        post[attributeToChange] = newValue

        this.setState({
            newPost: post
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPost(this.state.newPost)
    }

    render() {
        console.log(this.state.newPost)
        return (
        <div>
          <h1>Create Post</h1>

          <form onSubmit={this.handleSubmit}>

              <div>
                  <lable>Name</lable>
                  <input name="name" type="text" onChange={this.handleChange}></input>
              </div>

              <div>
                  <lable>Email Address</lable>
                  <input name="emailAddress" type="text" onChange={this.handleChange}></input>
              </div>

              <div>
                  <lable>Phone Number</lable>
                  <input name="phoneNumber" type="text" onChange={this.handleChange}></input>
              </div>

              <div>
                  <input type="submit" value="Post"></input>
              </div>

          </form>
        </div>
    )
  }
}