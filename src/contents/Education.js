import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="IT - Web Development" where="Wake Tech Community College" from="August 2018" to="Present"/>
            <Widecard title="MERN Full Stack Development" where="UNC Chapel Hill" from="2017" to="2018"/>
            <Widecard title="Business Administration" where="East Carolina University" from="2012" to="2014"/>
            </div>
            )
        }
    }
    
export default Education