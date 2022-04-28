import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return (
        <>
        <td>{this.props.topic}</td> 
        <td>{this.props.title}</td>
        <td>{this.props.content}</td> 
        <td>{this.props.author.firstName} {this.props.author.lastName}</td> 
    </>
    )
  }
}
