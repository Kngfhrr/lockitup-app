import React, {Component} from 'react';
import mainLogo from'./key.png'; 
import'./startPage.css'
import { Link } from 'react-router-dom'


export default class StartPage extends Component {
    render(){
        return (
    
    <container class="container">
  
        <div class="pic"><img  src={mainLogo}  alt="fireSpot"/> </div> 

        <div class="h1">Lock it up</div>

        <div class="h2">That service can help you to create hidden messages and only your complice will able see it</div>

        
        <div><Link to='/CreaSecretFor'><button class="startBtn">Create new Secret</button></Link></div>
        <div><Link to='/DoYouHaveIt'><button class="startBtn2">Open Secret</button></Link></div>
    </container>

)
        }}
