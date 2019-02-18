import React, {Component} from 'react';
import unlock from'./hole.png';
import './DoYouHaveIt.css'
import { Link } from 'react-router-dom'



export default class DoYouHaveIt extends Component {
    componentDidMount() {
        console.log(this.props.match.params.key)
    }
    render() {
        return (

            <container class="container">
        
                <div class="h1">Lock it up</div>
                <hr class="line" align="center" width="800" size="1" color="#000000" />
                <div className='faq'><Link to='/HowItWork'> How it works?</Link> <Link to='/FAQ' class="FAQ">F.A.Q</Link> </div>  
         
                <img class="unlock" src={unlock}  alt="fireSpot"/> 
                <p class="h2">You’ve got a secret! But for open it you need passphrase. Do you have it? Also, once you open it, it will be permanenlty deleted.</p>
                <input class="inp1" placeholder="Enter the phrase"/>
                <div><Link to='/HereIsSecretFor'> <button  class="creBtn">Open Secret</button> </Link></div>
        
            </container>
        
        )
    }
}   