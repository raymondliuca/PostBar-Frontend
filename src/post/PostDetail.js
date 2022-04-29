import React, { Component } from 'react'
import CommentCreatForm from '../comment/CommentCreatForm'
import Comment from '../comment/Comment'
import Axios from 'axios'

export default class PostDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: this.props.post
         }
    }
    addComment = (post) => {
        Axios.post("comment/add", post, 
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }
        )
        .then((response) => {
            console.log("Comment Added successfully!!!")
            this.reload()
        })
        .catch(error => {
            console.log("Error Adding Post");
            console.log(error);
        })
    }
    reload = () => {
        
        Axios.get("post/detail/?id=" + this.props.post._id)
        .then((response) => {
            console.log(response.data.post)
            this.setState({post: response.data.post})
            this.render()
        })
        .catch(error => {
            console.log("Error");
            console.log(error);
        })
    }
  render() {
    const allComments = this.state.post.comments.map((comment) => {
        console.log(comment)
        return <div >
             <Comment comment = {comment}/>
         </div>
    })
    return (
        
        <div>
          <hr></hr>
          <h3>{this.props.post.topic} {this.props.post.title}</h3>
          <h4>{this.props.post.author.firstName} {this.props.post.author.lastName}</h4>
          <h4>{this.props.post.content}</h4>

          <div>
            {allComments}
          </div>

          <div>
            <CommentCreatForm user={this.props.user} postId={this.props.post._id} 
            addComment={this.addComment}/>
          </div>
        </div>
    )
  }
}
