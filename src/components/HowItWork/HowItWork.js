import React, {Component} from 'react';
import './HowItWorks.css'
import { Link } from 'react-router-dom'
import gear from'./gear.png';
export default class HowItwork extends Component {

render(){
    return (
          <container class="container">
    <div className='size'>
        <center><div class="h1">Lock it up</div></center>
        <hr class="line" align="center" width="800" size="1" color="#000000" />
        
        <div className='faq'><Link to='/StartPage'> Back</Link> <Link to='/FAQ' className="FAQ">F.A.Q</Link></div>
        {this.props.children} 
        <h1 className='HowH1'>How It Works?</h1>
        <img class="gear" src={gear}  alt="gear"/> 
      
        <p className="HowP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices vehicula odio vitae pellentesque. Suspendisse ut semper risus. Vestibulum in sem vitae erat tempus aliquam. Sed pharetra vehicula turpis. Curabitur tempor purus mi, in eleifend urna euismod quis. Sed suscipit, ligula ut tempor interdum, massa eros ultricies ipsum, vitae lacinia augue ipsum sed nisl. Integer facilisis, orci a imperdiet viverra, ante tortor rutrum nibh, ut interdum quam mauris id odio. Phasellus ut massa dignissim diam imperdiet sagittis. Quisque vulputate dolor felis, sed viverra sapien aliquam nec. Suspendisse massa mi, elementum in malesuada non, placerat vel ligula. Integer dui mi, suscipit scelerisque tellus eget, congue ultricies augue. In consectetur id nulla eget sollicitudin. Morbi in ornare lacus. Donec blandi t hendrerit rhoncus. Nam sed.</p>
       
     
</div>

    </container>
    )
}
}