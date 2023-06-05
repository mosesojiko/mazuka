import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Link } from 'react-router-dom'
//import { HashLink } from 'react-router-hash-link';
import About from './pages/About';
import Navbar from './Navbar';
import Contact from './pages/Contact';
import EmailIcon from '@mui/icons-material/Email';
import Siteverification from './pages/Siteverification';






function App() {
  return (
    <BrowserRouter>
    <div className='grid-container'>
     
       <Navbar/> 
      <main>
         <Routes>
         <Route path="/googleae551f4f065913ad.html"  element={<Siteverification />}></Route>
         <Route path="/contact"  element={<Contact />}></Route>
          <Route path="/about"  element={<About />}></Route>
            <Route path="/" index element={<Home />}></Route>
         </Routes>
      </main>
       <footer>
        
        

        <div className='mazuka-footer'>
          <div className='mazuka-footer-item'>
            <div>
            <h4>Head office</h4>
            <p className='office-p'>No. 8 Kingsley Otuaro Drive, Mosheshe Estate, Airport Road, Effurun, Warri, Delta State.</p>
            <h4>Branch office</h4>
              <p className='office-p'>No. 1 Crusaders Street Off Nwigwe Road, Woji-P.H. Rivers State.</p>
            </div>
            <div className='quick-links'>
              <h4>Quick Links</h4>
              <Link to="/contact">Contact-Us</Link>
              <Link to="/about" style={{marginRight:"5px"}}>About</Link>
            </div>
            <div className='mazuka-footer-contact'>
              <h4>Contact/Customer Care</h4>
              <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>contact@mazukaltd.com</span></p>
             <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>mazukaltd@hotmail.com</span></p>
            </div>
          </div>
          
          
            
            
          
        </div>
        
       </footer>

    </div>
    </BrowserRouter>
  )
}

export default App






