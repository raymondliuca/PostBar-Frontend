import React, { Component } from 'react'

export default class CommentCreatForm extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           newComment: {}
        }
    }
    handleChange = (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;
        const comment = {...this.state.newComment}
        comment[attributeToChange] = newValue
        comment.author = this.props.user.user
        this.setState({
            newComment: comment,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.props.postId)
        this.state.newComment.post = this.props.postId
        this.props.addComment(this.state.newComment)
    }

    render() {
        return (
            <div>
    
              <form onSubmit={this.handleSubmit}>
    
                  <div>
                      <lable>Content</lable>
                      <textarea name="content" onChange={this.handleChange}></textarea>
                  </div>
    
                  <div>
                      <input type="submit" value="Post"></input>
                  </div>
    
              </form>
              <br></br>
           <hr></hr>
            </div>
        )
      }
    }