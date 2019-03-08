import React, {Component} from 'react';
import unlock from'./hole.png';
import './DoYouHaveIt.css'
import { Link } from 'react-router-dom'




export default class DoYouHaveIt extends Component {
    constructor(){
        super();
        this.state = {
            mockSecrets: [],
            phrase: []
        }
    }
    
     onChange = (e) => {
            this.setState({ phrase: e.target.value });
          };
    
//   componentDidMount() {
//     fetch(`http://localhost:8080/secret/${this.state.phrase}`)
// .then(res => res.json())
// .then(mockSecrets => this.setState({mockSecrets},()=> console.log( 'secret:', mockSecrets)) );

//    }
    render() {
        return (

            <div className="container">
        
                <div className="h1">Lock it up</div>
                <hr className="line" align="center" width="800" size="1" color="#000000" />
                <div className='faq'><Link to='/HowItWork'> How it works?</Link> <Link to='/FAQ' className="FAQ">F.A.Q</Link> </div>  
         
                <img className="unlock" src={unlock}  alt="fireSpot"/> 
                <p className="h2">You’ve got a secret! But for open it you need passphrase. Do you have it? Also, once you open it, it will be permanenlty deleted.</p>
                <input className="inp1" onChange={this.onChange} placeholder="Enter the phrase"/>
                <div><Link to='/HereIsSecretFor'> <button className="creBtn">Open Secret</button> </Link></div>
        
            </div>
        
        )
    }
}   
