import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Catering from './pages/Catering';


function App() {
  return (
    <BrowserRouter>
    <div className='grid-container'>
      <header>
        <div className='mazuka-header'>
        <div><img style={{width:"80px", height:"80px", borderRadius:"10px"}} src="/images/logo3.jpg" alt="" /></div>          
        <div style={{fontSize:"25px", fontWeight:1000, color:"#191970"}}>MAZUKA NIGERIA LIMITED</div>
        </div>
      </header>
      <main>
         <Routes>
          <Route path="/catering"  element={<Catering />}></Route>
            <Route path="/" index element={<Home />}></Route>
         </Routes>
      </main>
       <footer>
         <div className='mazuka-footer'>
           <div className='office'>
             <div >
               <h3 className='office-header'>Head Office</h3>
             <p>No. 8 Otuaro Drive, Mosheshe Estate, Airport Road, Effurun, Warri, Delta State.</p>
             </div>
             <div>
             <h3 className='office-header'>Branch Office</h3>
               <p>No. 1 Crusaders Street Off Nwigwe Road, Woji-P.H. Rivers State.</p>
             </div>
           </div>
           <div className='contact'>
             <h3 className='office-header'>Contact</h3>
             <p><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>08065710202</span></p>
             <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>mazukaltd@hotmail.com</span></p>
           </div>
         </div>
       </footer>

    </div>
    </BrowserRouter>
  )
}

export default App






// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home';
// import CallIcon from '@mui/icons-material/Call';
// import EmailIcon from '@mui/icons-material/Email';

// function App() {
//   return (
//     <BrowserRouter>
//     <div className='grid-container'>
//       <header style={{borderBottom:"5px solid blue"}}>
//         <div className='mazuka-header'>
//           <div><img style={{width:"100px", height:"100px", borderRadius:"10px"}} src="/images/logo3.jpg" alt="" /></div>
//           <div style={{fontSize:"25px", fontWeight:1000, color:"#00688b"}}>MAZUKA NIGERIA LIMITED</div>
//         </div>
//       </header>
//       <main>
//         <Routes>
//            <Route path="/" index element={<Home />}></Route>
//         </Routes>
//       </main>
//       <footer>
//         <div className='mazuka-footer'>
//           <div className='office'>
//             <div >
//               <h3 className='office-header'>Head Office</h3>
//               <p>No. 8 Otuaro Drive, Mosheshe Estate, Airport Road, Effurun, Warri, Delta State.</p>
//             </div>
//             <div>
//               <h3 className='office-header'>Branch Office</h3>
//               <p>No. 1 Crusaders Street Off Nwigwe Road, Woji-P.H. Rivers State.</p>
//             </div>
//           </div>
//           <div className='contact'>
//             <h3 className='office-header'>Contact</h3>
//             <p><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>08065710202</span></p>
//             <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>mazukaltd@hotmail.com</span></p>
//           </div>
//         </div>
//       </footer>
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;
