import React, {Component} from 'react';
import mainLogo from'./Castle.png';
import './createSecret.css';

import { Link } from 'react-router-dom'
export default class CreateSecret extends Component {
    
    render(){

return (
    
    <container class="container">

        <div class="h1">Lock it up</div>
        <hr class="line" align="center" width="800" size="1" color="#000000" />
        <div className='faq'><Link to='/HowItWork'> How it works?</Link> <Link to='/FAQ' class='FAQ'>F.A.Q</Link> </div>
        <p class="got">Got it!</p>
        <p class="your">your secret will be stored securely</p>
        <div class="castle"><img  src={mainLogo}  alt="fireSpot"/> </div> 
        <div class="h2">Share this link only with your complice! </div>
        <input class="inp1" placeholder="https://lockitup.io/e8f3s612dg4"/>
        <div><Link to='/CreaSecretFor'><button class="creBtn">Create new Secret</button></Link></div>

    </container>
)
    }
    }
