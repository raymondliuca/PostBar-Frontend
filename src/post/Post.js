import React, { Component } from 'react'
import PostDetail from './PostDetail'
import Axios from 'axios'

export default class Post extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            onDetail: false
        }
    }

    handleDetailsClick = () => {
        console.log("on detail!")
        this.setState({
          onDetail: !this.state.onDetail
        })
    }

    render() {
        const onDetail = this.state.onDetail
        return (
            <> 
              <tr>
              <td>
                    <div onClick={this.handleDetailsClick}>
                        {this.props.topic}
                    </div>
                </td>
                <td>
                    <div onClick={this.handleDetailsClick}>
                        {this.props.title}
                    </div>
                </td>
                <td>{this.props.author.firstName} {this.props.author.lastName}</td>
                <td><button onClick={() => {this.props.deletePost(this.props._id)}}>Delete</button></td>
              </tr>
                <div>
                {(onDetail) ?  
                    <PostDetail post={this.props} user={this.props.user} editView={this.props.editView} / > :
                    <></>
                }
                </div>
            </>

    )   
    }
}
