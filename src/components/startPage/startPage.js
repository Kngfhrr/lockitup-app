import React, {Component} from 'react';
import mainLogo from'./key.png'; 
import'./startPage.css'
import { Link } from 'react-router-dom'


export default class StartPage extends Component {
    render(){
        return (
    
    <div className="container">
  
        <div className="pic"><img  src={mainLogo}  alt="fireSpot"/> </div> 

        <div className="h1">Lock it up</div>

        <div className="h2">That service can help you to create hidden messages and only your complice will able see it</div>

        
        <div><Link to='/CreaSecretFor'><button className="startBtn">Create new Secret</button></Link></div>
        <div><Link to='/DoYouHaveIt'><button className="startBtn2">Open Secret</button></Link></div>
    </div>

)
        }}
