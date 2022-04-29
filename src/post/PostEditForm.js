import React, { Component } from 'react'

export default class PostEditForm extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           newPost: props.post
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
          this.props.editPost(this.state.newPost)
      }
  
    render() {
        console.log(this.state.newPost)
      return (
        <div>
            <h1>Edit Post</h1>
  
            <form onSubmit={this.handleSubmit}>
  
               
            <div>
                <label>Topic</label>
                <select type="text" name="topic" onChange={this.handleChange}>
                <option value="">Select one Topic</option>
                    <option value="GeneralTalk">General Talk</option>
                    <option value="TechnicalCommunication">Technical Communication</option>
                    <option value="CareersWorld">Careers World</option>
                </select>
              </div>

              <div>
                  <lable>Title</lable>
                  <input name="title" type="text" onChange={this.handleChange}
                  value={this.state.newPost.title}></input>
              </div>

              <div>
                  <lable>Content</lable>
                  <textarea name="content" onChange={this.handleChange}
                  value={this.state.newPost.content}></textarea>
              </div>

              <div>
                  <input type="submit" value="Post"></input>
              </div>

            </form>
        </div>
      )
    }
  }