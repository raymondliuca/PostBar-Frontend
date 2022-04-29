import React, { Component } from 'react'
import Axios from "axios"
import Post from './Post'
import PostCreateForm from './PostCreateForm'

export default class PostList extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           posts: [],
           currentUser: "",
           isEdit: false
        }
    }

    componentDidMount() {
        this.loadPostList();
    }
    loadPostList = () => {
        Axios.get("post/index")
        .then((response) => {
            this.setState({
                posts: response.data.posts
            })
        })
        .catch((error) => {
            console.log("Error Fetching Posts!!!");
            console.log(error);
        })
    }

    addPost = (post) => {
        Axios.post("post/add", post, 
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }
        )
        .then((response) => {
            console.log("Post Added successfully!!!")
            this.loadPostList();
        })
        .catch(error => {
            console.log("Error Adding Post");
            console.log(error);
        })
    }

    render() {
        const allPosts = this.state.posts.map((post, index) => {
            return <div key={index}>
                 <Post {...post} user={this.props.user} />
             </div>
        })
        return (
            <div>
                <h1>AllPosts</h1>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Topic</th>
                                <th>Title</th>
                                <th>Author</th>
                            </tr>
                            {allPosts}
                        </tbody>
                    </table>
                </div>
                <div>
                    <PostCreateForm addPost = {this.addPost} user={this.props.user} / >
                </div>
            </div>
        )
    }
}
