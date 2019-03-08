import React from 'react';                                       //
import { BrowserRouter as Router, Route} from 'react-router-dom' // Routers
import { render } from 'react-dom'                               //


import CreaSecPage from './components/CreaSecPage/CreaSecPage';
import FAQ from './components/FAQ/FAQ'
import App from './App';                                            // our importing components
import HowItwork from './components/HowItWork/HowItWork';
import CreateSecret from './components/createSecret/createSecret';
import DoYouHaveIt from './components/DoYouHaveIt/DoYouHaveIt';
import HereIsSecretFor from './components/HereIsSecretFor/HereIsSecretFor'


render (
    
    <Router>
        <div>
            <Route path='/' component={App}/>
            <Route path='/:secret' component={App}/>
            <Route path='/CreaSecretFor' component={CreaSecPage}/>
            <Route path='/HowItWork' component={HowItwork}/>
            <Route path='/StartPage' component={CreaSecPage}/>
            <Route path='/FAQ' component={FAQ}/>
            <Route path='/CreateSecret' component={CreateSecret}/>
            <Route path='/DoYouHaveIt' component={DoYouHaveIt}/>
            <Route path='/HereIsSecretFor' component={HereIsSecretFor}/>
        </div>
   </Router>,
   
     document.getElementById('root')    

)




