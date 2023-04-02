import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Catering from './pages/Catering';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import About from './pages/About';


function App() {
  return (
    <BrowserRouter>
    <div className='grid-container'>
      <header>
        <div className='mazuka-header'>
        <div><img style={{width:"80px", height:"80px", borderRadius:"10px"}} src="/images/logo3.jpg" alt="" /></div>          
        <div style={{fontSize:"25px", fontWeight:1000, color:"#191970"}}>MAZUKA NIGERIA LIMITED</div>
        <div className='mazuka-header-links'>
          <HashLink smooth to="#contact">Contact-Us</HashLink>
          <Link to="/about">About</Link>
          <Link to="https://accounts.zoho.com/signin?servicename=VirtualOffice&signupurl=https://www.zoho.com/mail/zohomail-pricing.html&serviceurl=https://mail.zoho.com"><img style={{width:"20px", height:"20px"}} src="/images/mazuka-mail.jpg" alt="" /></Link>
        </div>
        </div>
      </header>
      <main>
         <Routes>
          <Route path="/about"  element={<About />}></Route>
          <Route path="/catering"  element={<Catering />}></Route>
            <Route path="/" index element={<Home />}></Route>
         </Routes>
      </main>
       <footer>
         <div className='mazuka-footer'>
           <div className='office'>
             <div >
               <h3 className='office-header'>Head Office</h3>
             <p>No. 8 Kingsley Otuaro Drive, Mosheshe Estate, Airport Road, Effurun, Warri, Delta State.</p>
             </div>
             <div>
             <h3 className='office-header'>Branch Office</h3>
               <p>No. 1 Crusaders Street Off Nwigwe Road, Woji-P.H. Rivers State.</p>
             </div>
           </div>
           <div className='contact'>
             <h3 className='office-header'>Contact</h3>
             <p><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>+234(0)8065710202</span></p>
             <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>contact@mazukaltd.com</span></p>
             <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>mazukaltd@hotmail.com</span></p>
           </div>
         </div>
       </footer>

    </div>
    </BrowserRouter>
  )
}

export default App






