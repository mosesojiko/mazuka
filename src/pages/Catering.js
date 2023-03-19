import React from 'react'
import './Catering.css'
//import bg from '../photos/special-background3.jpg';
//import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Catering() {
  

  return (
    <div>
        <div className='catering'>
            <h2 className='catering-item'>Mazuka Catering Service</h2>
        <p className='catering-item'>Do not worry about food for your team. Mazuka is here for you.</p>
        {/* <div className='catering-image-container'>
            <div>
                <img src="/images/catering/catering1.jpg" alt="" />
            </div>
            <div>
                <img src="/images/catering/okro-soup1.jpg" alt="" />
            </div>
            <div>
                <img src="/images/catering/tea-and-bread.jpg" alt="" />
            </div>
            <div>
                <img src="/images/catering/catering3.jpg" alt="" />
            </div>
            <div>
                <img src="/images/catering/catering5.jpg" alt="" />
            </div>
            <div>
                <img src="/images/catering/fried-rice1.jpg" alt="" />
            </div>
             <div>
                <img src="/images/catering/yam4.jpg" alt="" />
            </div> 
            <div><img src="/images/catering/catering2.jpg" alt="" /></div>
           
        </div> */}
        </div>

        {/* mazuka estimator */}
        <div className='take-action'>
            <div>
              <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        alt=""
        height="140"
        image="/images/catering/offshore2.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
          Onshore and Offshore
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
          We cater for your workers both onshore and offshore.
        </Typography>
        
      </CardContent>
    </Card>
            
            </div>
            <div>
              <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        alt=""
        height="140"
        image="/images/catering/onshore1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
          People on Board (POBs)
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
          We provide a flexible catering service that suits the number of workers you have on board. Whether they are 10 people, 100 people, 500 people or 1000 people on board and above, Mazuka will provide their daily food supply.
        </Typography>
        
      </CardContent>
    </Card>
            </div>
            <div>
              <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        alt=""
        height="140"
        image="/images/catering/offshore1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
          Location
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
          Whether far or near, we are positioned to render services at any project site of our clients.
        </Typography>
        
      </CardContent>
    </Card>
            </div>
              
        </div>
        {/* housekeeping header */}
        <div className='housekeeping-header-div'>
          <h3 className='housekeeping-header'>Mazuka housekeeping services</h3>
          <p className='housekeeping-header'>Alongside our catering service, we also provide housekeeping service.</p>
        </div>

        {/* house keeping section */}
        <div className='housekeeping'>
            <div>
              <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        alt=""
        height="140"
        image="/images/housekeeping/housekeeping3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
          House Keeping
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
          Our team is well positioned to cater for both national and expatriate workers to accomodate all shades of nationalities to make them feel at home while at work.
        </Typography>
        
      </CardContent>
    </Card>
            
            </div>
            <div>
              <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        alt=""
        height="140"
        image="/images/housekeeping/laundry.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
          Clean Home
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
          We always maintain a clean and safe environment.
        </Typography>
        
      </CardContent>
    </Card>
            </div>
            <div>
              <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        alt=""
        height="140"
        image="/images/housekeeping/satisfaction1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
          Satisfaction
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
          We place premium interest in customers' satisfaction. Hence, we vigorously work with this in view.
        </Typography>
        
      </CardContent>
    </Card>
            </div>
              
        </div>

        {/* call to action */}
        <div className='call-to-action'>
          <p>For more enquiries, Visit our office, call or send us a mail using the contact details below</p>
        </div>
    </div>
  )
}

export default Catering