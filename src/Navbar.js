// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';



// function Navbar() {
  
//   return (
//     <div className='mazuka-navbar'>
//         <div className='mazuka-navbar-menu'>
//             <div ><img style={{width:"80px", height:"80px", borderRadius:"10px"}} src="/images/logo3.jpg" alt="" /></div>
//             <div className='mazuka-header-naming'>MAZUKA NIGERIA LIMITED</div>
           
//             <div className='hide'>
//               <PopupState variant="popover" popupId="demo-popup-menu">
//       {(popupState) => (
//         <React.Fragment>
//           <Button variant="contained" {...bindTrigger(popupState)}>
//             <MenuIcon />
//           </Button>
//           <Menu {...bindMenu(popupState)}>
//             <MenuItem onClick={popupState.close} className='navbar-link'><Link smooth to="/">Home</Link></MenuItem>
            
//             <MenuItem onClick={popupState.close} className='navbar-link'><Link smooth to="/contact">Contact-Us</Link></MenuItem>
//             <MenuItem onClick={popupState.close} className='navbar-link'><Link smooth to="/about">About</Link></MenuItem>
//             <MenuItem onClick={popupState.close} className='navbar-link'><Link to="https://accounts.zoho.com/signin?servicename=VirtualOffice&signupurl=https://www.zoho.com/mail/zohomail-pricing.html&serviceurl=https://mail.zoho.com" target="_blank"><img style={{width:"20px", height:"14px"}} src="/images/mazuka-mail.jpg" alt="" /></Link></MenuItem>
//           </Menu>
//         </React.Fragment>
//       )}
//     </PopupState>
//             </div>

//         </div>          
        
//         <div className='mazuka-header-links show'>
//         <Link to="/">Home</Link>
//           <Link to="/contact">Contact-Us</Link>
//           <Link to="/about" style={{marginRight:"5px"}}>About</Link>
//           <Link to="https://accounts.zoho.com/signin?servicename=VirtualOffice&signupurl=https://www.zoho.com/mail/zohomail-pricing.html&serviceurl=https://mail.zoho.com" target="_blank"><img style={{width:"20px", height:"14px"}} src="/images/mazuka-mail.jpg" alt="" /></Link>
//         </div>
        
//     </div>
//   )
// }

// export default Navbar