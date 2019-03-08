import React, { Component } from 'react'
import './App.css'
import StartPage from './components/startPage/startPage'


import { matchPath } from 'react-router'




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
    const pass = 'leet'

    const response = await fetch(`http://localhost:8080/secret/${secretId}?passphrase=${pass}`, { queryParams: { passphrase: 'test1' } });
    const secretres = await response.json();
    console.log(secretres)
    console.log('redirect to secret');
  }

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

