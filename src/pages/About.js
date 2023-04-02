import React from 'react'
import './About.css';
import background from '../photos/background2.jpg';

function About() {
  return (
    <div>
        <div className='about-us'>
            <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:"repeat",marginBottom:"20px", borderRadius:"10px" }}>
            <h2>About Us</h2>
            <p>Mazuka Nigeria Limited is a Catering and Housekeeping company registered in Nigeria. </p>
        </div>
        <div>
            <img className='about-img' src ="/images/catering/catering5.jpg" alt="" style= {{width:"300px"}} />
        </div>
        </div>
    </div>
  )
}

export default About