import React, { Component } from 'react'

export default class CommentDetail extends Component {
  render() {
    return (
      <div>
          <p>{this.props.comment.content}</p>
          <p>{this.props.firstName} {this.props.lastName}</p>
          <br></br>
          <hr></hr>
      </div>
    )
  }
}
