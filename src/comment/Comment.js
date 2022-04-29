import React, { Component } from 'react'
import Axios from 'axios';
import CommentDetail from './CommentDetail';

export default class Comment extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      comment: {},
      firstName: "",
      lastName: ""
    }
  }
  componentDidMount() {
    this.loadComment();
  }
  loadComment = () => {
    console.log(this.props)
    Axios.get("comment/detail/?id=" + this.props.comment)
        .then((response) => {
            console.log(response.data)
            this.setState({
                comment: response.data.comment,
                firstName: response.data.comment.author.firstName,
                lastName: response.data.comment.author.lastName,
            })
        })
        .catch((error) => {
            console.log("Error Fetching Posts!!!");
            console.log(error);
        })
  } 
  render() {
    console.log(this.state.comment)
    return (
      <div>
         <CommentDetail comment={this.state.comment} 
         firstName={this.state.firstName} lastName={this.state.lastName} / >
           
      </div>
    )
  }
}
