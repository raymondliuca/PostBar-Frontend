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
        post.author = this.props.user.user
        this.setState({
            newPost: post,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.props.user)
        this.props.addPost(this.state.newPost, this.props.user)
    }

    render() {
        console.log(this.state.newPost)
        return (
        <div>
          <h1>Create Post</h1>

          <form onSubmit={this.handleSubmit}>

              <div>
                <label>Topic</label>
                <select type="text" name="topic" onChange={this.handleChange}>
                    <option value="GeneralTalk">General Talk</option>
                    <option value="TechnicalCommunication">Technical Communication</option>
                    <option value="CareersWorld">Careers World</option>
                </select>
              </div>

              <div>
                  <lable>Title</lable>
                  <input name="title" type="text" onChange={this.handleChange}></input>
              </div>

              <div>
                  <lable>Content</lable>
                  <textarea name="content" onChange={this.handleChange}></textarea>
              </div>

              <div>
                  <input type="submit" value="Post"></input>
              </div>

          </form>
        </div>
    )
  }
}