import React, { Component } from 'react'
import Axios from "axios"
import Post from './Post'
import PostCreateForm from './PostCreateForm'
import PostEditForm from './PostEditForm'

export default class PostList extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           posts: [],
           currenPost: {},
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

    editView = (id) => {
        Axios.get(`post/edit?id=${id}`, 
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            console.log("Loaded Post Information!!!")
            console.log(response.data.post);
            var post = response.data.post;
            this.setState({
                isEdit: true,
                currentPost: post
            }, ()=>{
                console.log(this.state.isEdit)
            })
            
        })
        .catch(error => {
            console.log("Error Loading Post Information");
            console.log(error)
        })
    }

    editPost= (post) => {
        Axios.put("post/update", post, 
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
              console.log("Post Updated!!!");
              console.log(response);
              this.setState({
                isEdit: false,
            }, ()=>{
                this.loadPostList();
                console.log(this.state.isEdit);
                this.render()
            })
        })
        .catch(error => {
              console.log("Error Updating Post!!!")
              console.log(error);
        })
      }

    deletePost = (id) => {
        Axios.delete(`post/delete?id=${id}`, 
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            console.log("Delete Post!!")
            this.loadPostList();
        })
        .catch(error => {
            console.log("Error Deleting Author!!!")
            console.log(error);
        })
      }

    render() {
        const isEdit = this.state.isEdit
        const allPosts = this.state.posts.map((post, index) => {
            return <div key={index}>
                 <Post {...post} user={this.props.user} isAuth={this.props.isAuth}
                 deletePost={this.deletePost} editView={this.editView}/>
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
                  {(isEdit) ? 
                  <PostEditForm key={this.state.currentPost._id} post={this.state.currentPost}
                  editPost={this.editPost}></PostEditForm> :
                  <PostCreateForm addPost = {this.addPost} user={this.props.user} / >
                  }
                </div>
            </div>
        )
    }
}
