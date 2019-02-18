import React from 'react';
import dead from'./dead.png';
import './Oops.css'

const Oops = ()=> (

    
    <container class="container">

        <div class="h1">Lock it up</div>
        <hr class="line" align="center" width="800" size="1" color="#000000" />
         <p class="faq">How it works?  F.A.Q</p> 
        <p class="oops">Oops! Looks like there is nothing here!</p>
        <img class="dead" src={dead}  alt="fireSpot"/> 
        <p class="maybye">Maybe you wanna to create your own secret?</p>
       
        <div><button class="OpenBtn">Create new Secret</button></div>

    </container>

)

export default Oops