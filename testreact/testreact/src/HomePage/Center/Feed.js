import React, {useEffect, useState, Component} from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post.js'
import Poster from './Poster.js'

export default class Feed extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        } 
        this.addPost=this.addPost.bind(this)
    }
    addPost(message){
        var tmpPost = this.state.posts
        tmpPost.push(message)
        this.setState({posts : tmpPost})
    }
    render() {
        return (
                <div className="feed">
                    <MessageSender doAddPost={this.addPost}/> 
                    
                    {this.state.posts.map((post) =>(
                        <Poster message={post} />
                    ))} 
                </div> 
        )
    }
}
