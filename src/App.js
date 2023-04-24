import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Catering from './pages/Catering';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import About from './pages/About';
//import Navbar from './Navbar';





function App() {
  return (
    <BrowserRouter>
    <div className='grid-container'>
      <header>
        <div className='mazuka-header'>
        <div><img style={{width:"80px", height:"80px", borderRadius:"10px"}} src="/images/logo3.jpg" alt="" /></div>          
        <div className='mazuka-header-name'>MAZUKA NIGERIA LIMITED</div>
        <div className='mazuka-header-links'>
          <HashLink smooth to="#contact">Contact-Us</HashLink>
          <Link to="/about" style={{marginRight:"5px"}}>About</Link>
          <Link to="https://accounts.zoho.com/signin?servicename=VirtualOffice&signupurl=https://www.zoho.com/mail/zohomail-pricing.html&serviceurl=https://mail.zoho.com" target="_blank"><img style={{width:"20px", height:"20px"}} src="/images/mazuka-mail.jpg" alt="" /></Link>
        </div>
        </div>
      </header>
      {/* <Navbar/> */}
      <main>
         <Routes>
          <Route path="/about"  element={<About />}></Route>
          <Route path="/catering"  element={<Catering />}></Route>
            <Route path="/" index element={<Home />}></Route>
         </Routes>
      </main>
       <footer>
        
         {/* <div className='mazuka-footer'>
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
         </div> */}

        <div className='mazuka-footer'>
          <div className='mazuka-footer-item'>
            <div>
            <h4>Head office</h4>
            <p className='office-p'>No. 8 Kingsley Otuaro Drive, Mosheshe Estate, Airport Road, Effurun, Warri, Delta State.</p>
            </div>
            <div>
              <h4>Branch office</h4>
              <p className='office-p'>No. 1 Crusaders Street Off Nwigwe Road, Woji-P.H. Rivers State.</p>
            </div>
            <div className='mazuka-footer-contact'>
              <h4>Contact/Customer Care</h4>
              <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>contact@mazukaltd.com</span></p>
             <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>mazukaltd@hotmail.com</span></p>
            </div>
          </div>
          <div className='mazuka-footer-item'>
            <div>
              <p className='personnel-name'>Mr. Moses Ojiko</p>
              <p className='personnel-position'>Business Development/IT</p>
              <p><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>+2348133806965, 08133806965</span></p>
              <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>moses@mazukaltd.com</span></p>
            </div>
            <div>
            <p className='personnel-name'>Mr. Abel Sabo</p>
              <p className='personnel-position'>Head of Operation</p>
              <p><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>+2348060592677, 08060592677</span></p>
              <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>abel.sabo@mazukaltd.com</span></p>
            </div>
            <div>
            <p className='personnel-name'>Mr. Maxwell Okoh</p>
              <p className='personnel-position'>Accountant</p>
              <p><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>+2348052763201, 08052763201</span></p>
              {/* <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>maxwell@mazukaltd.com</span></p> */}
            </div>
          </div>
          <div className='mazuka-footer-item'>
            <div>
            <p className='personnel-name'>Mr. Igbunuoghene P.E. Oghenemaro</p>
              <p className='personnel-position'>Manager</p>
              <p><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>+2348056345166, 08056345166</span></p>
              <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>oghenemaro@mazukaltd.com</span></p>
            </div>
            <div>
            <p className='personnel-name'>Dean. Ugoh Cyriacus</p>
              <p className='personnel-position'>Managing Director</p>
              <p><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>+2349020182372, 09020182372</span></p>
              <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>cyriacus@mazukaltd.com</span></p>
            </div>
            <div>
            <p className='personnel-name'>Mrs. Atim Uzor</p>
              <p className='personnel-position'>Chief Executive Officer (CEO)</p>
              <p><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>+2348065710202, 08065710202</span></p>
              <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>mma@mazukaltd.com</span></p>
            </div>
          </div>
        </div>
        
       </footer>

    </div>
    </BrowserRouter>
  )
}

export default App






