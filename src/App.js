import React, { Component } from 'react'
import './App.css'
import StartPage from './components/startPage/startPage'


import { matchPath, Route } from 'react-router'




export default class App extends Component {
  async componentDidMount() {
    const match = matchPath(this.props.history.location.pathname, {
      path: '/:secret',
      exact: true,
      strict: false
    })
    if(!match) {
      console.log('main page');
      return;
    }
    const secretId = match.params.secret;
    console.log(secretId);
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const pokemon = await response.json();
    console.log(pokemon)
    console.log('redirect to secret');
  }
state = {
  newSecret: "",
  phrase: "",
  arrPhrase: [],
  arrSecret: []
};

textAreaSecret = (e) => {
  this.setState({ newSecret: e.target.value });
};

textAreaAdd = () => {
  const arrSecret = this.state.arrSecret
    arrSecret.push(this.state.newSecret);
    
};



  render() 
 {
    return (
   


 <StartPage></StartPage>
 

    )
  }
}

