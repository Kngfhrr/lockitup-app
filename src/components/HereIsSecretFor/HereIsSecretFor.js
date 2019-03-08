import React, {Component} from 'react';
import unlock from'./unlock.png';
import './HereIsSecretFor.css'
import { Link } from 'react-router-dom'
// import DoYouHaveIt from '../DoYouHaveIt/DoYouHaveIt'

export default class HereIsSecretFor extends Component {

// componentDidMount() {
// fetch(`http://localhost:8080/secret/${this.state.phrase}`)
// .then(res => res.json())
// .then(mockSecrets => this.setState({mockSecrets},()=> console.log( 'secret:', mockSecrets)) );

//    }
render(){
    return (
    
    <container class="container">

        <div class="h1">Lock it up</div>
        <hr class="line" align="center" width="800" size="1" color="#000000" />
        <div className='faq'><Link to='/HowItWork'> How it works?</Link> <Link to='/FAQ' class="FAQ">F.A.Q</Link> </div>  
 
        <img class="unlock" src={unlock}  alt="fireSpot"/> 
        <p class="h2"> Here is secret for you</p>
       <p class="inp">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <div><Link to='/CreaSecretFor'><button class="creBtn">Create my own Secret</button></Link></div>

    </container>
)
}

}


