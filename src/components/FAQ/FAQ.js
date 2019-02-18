import React, {Component} from 'react';
import './FAQ.css'
import { Link } from 'react-router-dom'
import FAQi from './FAQi.png'
export default class FAQ extends Component {

render(){
    return (
          <container class="container">
    <div className='size'>
        <center><div class="h1">Lock it up</div></center>
        <hr class="line" align="center" width="800" size="1" color="#000000" />
        <div className='faq'><Link to='/StartPage'> Back</Link>  <Link to='/FAQ' class="FAQ">F.A.Q</Link></div>
       <h1 className="h2">Here FAQ</h1>
       <img class="FAQi" src={FAQi}  alt="gear"/> 
       <div>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices
        vehicula odio vitae pellentesque. Suspendisse ut semper risus. Vestibulum in sem 
        vitae erat tempus aliquam. Sed pharetra vehicula turpis. Curabitur tempor purus mi, in
         eleifend urna euismod quis. Sed suscipit, ligula ut tempor interdum,
        massa eros ultricies ipsum, vitae lacinia augue ipsum sed nisl. 
       Integer facilisis, orci a imperdiet viverra, ante tortor rutrum nibh, 
       ut interdum quam mauris id odio. Phasellus ut massa dignissim diam imperdiet sagittis.
        Quisque vulputate dolor felis, sed viverra sapien aliquam nec. Suspendisse massa mi, 
        elementum in malesuada non, placerat vel ligula. Integer dui mi, 
       suscipit scelerisque tellus eget, congue ultricies augue.

In consectetur id nulla eget sollicitudin. Morbi in ornare lacus. Donec blandi
t hendrerit rhoncus. Nam sed nunc quis turpis posuere tincidunt ac id metus. Integer arcu justo, 
volutpat ut massa in, suscipit commodo ligula. Curabitur facilisis accumsan dolor et tempor. 
Praesent id arcu eget sapien elementum lacinia. 
Maecenas tristique odio quis turpis efficitur consequat. Suspendisse et libero eros.


       </div>
     
</div>

    </container>
    )
}
}