import React from 'react';
import unlock from'./hole.png';
import './YouGotSecret.css'

const Page4 = ()=> (

    
    <container class="container">

        <div class="h1">Lock it up</div>
        <hr class="line" align="center" width="800" size="1" color="#000000" />
        <p class="faq">How it works F.A.Q</p>
 
        <img class="unlock" src={unlock}  alt="fireSpot"/> 
        <p class="h2">You got a secret! Once you open it, it will be permanenlty deleted. Open it?</p>

        <div><button class="creBtn">Open Secret</button></div>

    </container>

)

export default Page4