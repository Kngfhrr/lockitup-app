import React, {Component} from 'react';
import './CreaSecPage.css'
import { Link } from 'react-router-dom'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const techCompanies = [
  { label: "1 day", value: 1 },
  { label: "10 minuts", value: 2 },
  { label: "1 hour", value: 3 },
];

const onDateSelect = (e) => {
    console.log(e);
}
export default class CreaSecPage extends Component {


    async componentDidMount() {
        console.log(this.props);
        // const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        // const pokemon = await response.json();
        // console.log(pokemon)
    }
    
    render(){
        return (
            <container class="container">
            <div className='size'>
                <center><div class="h1">Lock it up</div></center>
                    <hr class="line" align="center" width="800" size="1" color="#000000" />
                <div className='faq'><Link to='/HowItWork'> How it works?</Link> <Link to='/FAQ' class="FAQ">F.A.Q</Link> </div>  
                <h2 className='createnewsecret'>Create a new Secret</h2>
                <p>
                    <textarea name="comment" className='newSecret' placeholder='Start type your secret'/>
                </p>
                <div className="row">
                    <l className='howlong'>How long needs to keep your secret?</l>
                    <Dropdown options={techCompanies} className="dropdown" onChange={onDateSelect} value={'test'} placeholder="Select an option" />
                </div>
                <div className='unlock'>Phrase to unlock your secret</div>
                    <input className='inputunlock' placeholder='Enter your Phrase'></input>
                <div>
                    <Link to='/CreateSecret'><button className='addSecret'>Lock massage</button></Link>
                </div>
            </div>

        </container>
        )
    }
}
  





