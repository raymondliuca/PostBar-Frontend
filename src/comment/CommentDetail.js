import React, { Component } from 'react'

export default class CommentDetail extends Component {
  render() {
    return (
      <div>
          
          <p className='detailName'>{this.props.firstName} {this.props.lastName}</p>
          <p className='content'>{this.props.comment.content}</p>
          <br></br>
          <hr></hr>
      </div>
    )
  }
}
