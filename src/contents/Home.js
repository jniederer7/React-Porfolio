import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile.jpg';



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Justin Niederer','I am a full stack web developer', 'Welcome to my portfolio']} speed={100} eraseDelay={700}/>
            </div>
            )
        }
    }
    
    export default Home