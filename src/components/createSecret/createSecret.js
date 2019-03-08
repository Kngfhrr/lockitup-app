import React, {Component} from 'react';
import mainLogo from'./Castle.png';
import './createSecret.css';

import { Link } from 'react-router-dom'
export default class CreateSecret extends Component {
    
    render(){

return (
    
    <div className="container">

        <div className="h1">Lock it up</div>
        <hr className="line" align="center" width="800" size="1" color="#000000" />
        <div className='faq'><Link to='/HowItWork'> How it works?</Link> <Link to='/FAQ' className='FAQ'>F.A.Q</Link> </div>
        <p className="got">Got it!</p>
        <p className="your">your secret will be stored securely</p>
        <div className="castle"><img  src={mainLogo}  alt="fireSpot"/> </div> 
        <div className="h2">Share this link only with your complice! </div>
        <input className="inp1" placeholder="https://lockitup.io/e8f3s612dg4"/>
        <div><Link to='/CreaSecretFor'><button className="creBtn">Create new Secret</button></Link></div>

    </div>
)
    }
    }
