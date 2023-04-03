import React from 'react'
import './About.css';
import background from '../photos/background2.jpg';

function About() {
  return (
    <div>
        <div className='about-us'>
            <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:"repeat",marginBottom:"20px", borderRadius:"10px" }}>
            <h2 className='about-us-h2-p'>About Us</h2>
            <p className='about-us-h2-p'>Mazuka Nigeria Limited is a Catering and Housekeeping company registered in Nigeria. </p>
        </div>
        <div>
            <img className='about-img' src ="/images/catering/catering5.jpg" alt="" style= {{width:"300px"}} />
        </div>
        </div>

        {/* vission and mission*/}
        <div className='about-description'>
          <h2>Our Vision</h2>
          <p>To transform the state of continental to a global servicing company in the oil and gas industry.</p>

          <h2> Our Mission </h2>
          <p>To attain the prime position of a global giant in the catering industry, to provide both innovative and commercial proven solutions for our customers.</p>

          <h2>The Company Mazuka</h2>
          <p>Mazuka Nigeria Limited is a company registered in Nigeria to provide support services to corporations associated with Offshore and Onshore Oilfield industries. In addition to our world-class catering and housekeeping services, Mazuka is a leading marine support service company offering a broad range of services particularly Marine logistics, Chandelling, Material sourcing and Procurement on request as well as supply of AGO and other marine equipment and consumables.</p>
          <p>Our network centers, which are managed by well trained personnel are strategically located to make accessibility easy for our numerous clients from any point of their operations to minimize loss of man-hour in the course of the day.</p>

          <h2>Our Method</h2>
          <p>In Mazuka, we approach every new project with enthusiasm to work with every party involved.</p>
          <p>We provide a friendly working environment for our team and we go extra mile to make sure that every task is accomplished and on time too. Strategically, we are positioned to render services at any project site of our clients and always making sure that our performances are enhanced at every statge to maximize the individual man-hour.</p>
          <p>In Mazuka, we place premium interest in customers' satisfaction, hence we vigorously work with this in view while we de-emphasize the craze for huge profit.</p>
          <p>Above all, we keep abreast with our clients to be sure that we are in tune with the trend in respect of the client's need.</p>
          <p className='about-contact'>Feel free to always get in touch with us using the contact details below:</p>
        </div>

  
    </div>
  )
}

export default About