
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'


import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import background from '../photos/special-background4.jpg';
//import background2 from '../photos/special-background3.jpg'


function Home() {
    
  return (
    <div style={{maxWidth:"100%"}}>
        
            <div className='carousal' style={{ backgroundImage: `url(${background})`,backgroundRepeat:"repeat" }}>
                <div className='description'>
                <p>Mazuka Nigeria Limited is a Catering and Housekeeping company registered in Nigeria. Mazuka is also a leading support service company offering a broad range of services particularly marine logistics, chandelling, material sourcing, and procurement on request as well as supply of AGO and other marine equipment and consummables.</p>
            </div>
            <div className="carousal-content">
                <Carousel infiniteLoop useKeyboardArrows autoPlay>
            
            <Link to="/catering" style={{textDecoration:"none"}}>
              <div className='caro-div'>
                    <img src="/images/catering-y1.jpeg" alt=""/>
                    
                    <p>Catering Services</p>
                </div>
            </Link>
             <Link to="/catering" style={{textDecoration:"none"}}>
                <div className='caro-div'>
                   
                     <img src="/images/catering-y.jpeg" alt=""/>
                    <p>Catering Services</p>
                </div>
              </Link>
               <Link to="#" style={{textDecoration:"none"}}>
                <div className='caro-div'>
                    <img src="/images/houseboat.jpg" alt=""/>
                    <p>House boat leasing/support services</p>
                </div>
              </Link>
              
               <Link to="#" style={{textDecoration:"none"}}>
                <div className='caro-div'>
                    <img src="/images/laundry.jpg" alt=""/>
                    <p>House keeping Services</p>
                </div>
                </Link>
                <Link to="#" style={{textDecoration:"none"}}>
                <div className='caro-div'>
                    <img src="/images/mazuka-ago.jpg" alt=""/>
                    <p>Ago supplies</p>
                </div>
                </Link>
                <Link to="#" style={{textDecoration:"none"}}>
                <div className='caro-div'>
                    <img src="/images/marine-consumables.jpg" alt=""/>
                    <p>Marine consumable</p>
                </div>
                </Link>
                <Link to="/catering" style={{textDecoration:"none"}}>
                <div className='caro-div'>
                      <img src="/images/catering-y2.jpeg" alt=""/>
                    <p>Catering Services</p>
                </div>
                </Link>
                
            </Carousel>
            </div>
            
            
        </div>
        
          <div className='ourservices'>
            <h2>Check out our services below</h2>
            <div className='ourservice-container'>
                <div className='ourservice-div'>
                    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to="/catering">
          <CardMedia
          component="img"
          height="140"
          image="/images/catering1.jpeg"
          alt=""
        />
        </Link>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
            Catering/Housekeeping
          </Typography>
          
          <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
            Our clients do not run out of groceries as we make provisions for between two to four weeks window for an uninterrupted operations in the event of disruption in supply runs.
          </Typography>
          
          <Link to ="/catering" style={{textDecoration:"none"}}>
            <Button variant='contained' color="primary" size="small" style={{marginTop:'5px', marginLeft:"60px"}}>Learn More</Button>
            </Link>
        </CardContent>
        
      </CardActionArea>
    </Card>
                    {/* <h3>Catering</h3>
                    <img src="/images/catering1.jpeg" alt="" />
                    <p>Our clients do not run out of groceries as we make provisions for between two to four weeks window for an uninterrupted operations in the event of disruption in supply runs.</p> */}
                </div>
                {/* <div>
                    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to="#">
          <CardMedia
          component="img"
          height="140"
          image="/images/housekeeping.jpg"
          alt=""
        />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
           Housekeeping
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
            Our team is well positioned to cater for both national and expatriate workers to accomodate all shades of nationalities to make them feel at home while at work.
          </Typography>
          <Link to ="#" style={{textDecoration:"none"}}>
            <Button variant='contained' color="primary" size="small" style={{marginTop:'5px', marginLeft:"60px"}}>Learn More</Button>
            </Link>
        </CardContent>
      </CardActionArea>
    </Card>
                </div> */}
                <div>
                    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to ="#">
          <CardMedia
          component="img"
          height="140"
          image="/images/ship-chandlers.jpg"
          alt=""
        />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
           Chandelling
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
           Our clients expressed satisfaction with our services including but not limited to Wrightlinks Logistic Service Limited, Ocean Marine and Tankers Nigeria Limited, Dreging International Service (Nig,) and World Carrier Corporation. 

          </Typography>
          {/* <Link to ="#" style={{textDecoration:"none"}}>
            <Button variant='contained' color="primary" size="small" style={{marginTop:'5px', marginLeft:"60px"}}>Learn More</Button>
            </Link> */}
        </CardContent>
      </CardActionArea>
      </Card>
                    {/* <h3>chandelling</h3>
                    <img src="/images/ship-chandlers.jpg" alt="" />
                    <p>Our clients expressed satisfaction with our services including but not limited to Wrightlinks Logistic Service Limited, Ocean Marine and Tankers Nigeria Limited, Dreging International Service (Nig,) and World Carrier Corporation. </p> */}

                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to ="#">
          <CardMedia
          component="img"
          height="140"
          image="/images/marine-support.jpg"
          alt=""
        />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
           Marine Support Service
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
            On request, we source and lease to our clients House boats, Sport barge, security boats etc
          </Typography>
          {/* <Link to ="#" style={{textDecoration:"none"}}>
            <Button variant='contained' color="primary" size="small" style={{marginTop:'5px', marginLeft:"60px"}}>Learn More</Button>
            </Link> */}
        </CardContent>
      </CardActionArea>
      </Card>
                    {/* <h3>Marine Support Service</h3>
                    <img src="/images/marine-support.jpg" alt="" />
                    <p>On request, we source and lease to our clients House boats, Sport barge, security boats etc</p> */}
                </div>
                
        <Card sx={{ maxWidth: 345 }}>
      <Link to="#">
        <CardMedia
        component="img"
        alt="AGO"
        height="140"
        image="/images/mazuka-ago.jpg"
      />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
          AGO (Diesel) supply
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
          We supply AGO to our numerous clients whenever they are needed.
        </Typography>
        {/* <Link to ="#" style={{textDecoration:"none"}}>
            <Button variant='contained' color="primary" size="small" style={{marginTop:'5px', marginLeft:"60px"}}>Learn More</Button>
            </Link> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
            
            </div>
        </div> 

        {/* experience will come in here */}
        <div className='experience-container'>
            <div className='experience'>
            <h2>Our Experince</h2>
            <p>We have gained vast and unquantifiable experience in the industry. We are still in the business of satisfying our clients. Some of our clients include:</p>
            <div className='clients'>
                <div>
                    <img src="/images/chevron1.png" alt=""/>
                </div>
                <div>
                    <img src="/images/agip1.png" alt=""/>
                </div>
                <div>
                    <img src="/images/deme-logo.png" alt=""/>
                </div>
                <div>
                    <img src="/images/shell1.png" alt=""/>
                </div>
                <div>
                    <img src="/images/tecon-logo.png" alt=""/>
                </div>
                <div>
                    <img src="/images/nnpc-logo.png" alt=""/>
                </div>
                <div>
                    <img src="/images/zil-log.png" alt=""/>
                </div>
            </div>
        </div>
        <div className='policy'>
            <h2 style={{textAlign:"center"}}>Our HSE Policy</h2>
            <p>Our HSE policy forms an integral part of our business plan and it is central to our strategy for the future.</p> 
            <p>We recognize that great health safety and environmental practices contribute to great people delivering great services. Hence, our simple aim is to achieve good health, no harm to people, no damage to environment, no accident or work-related ill health, enhancement of the communities in which we work and continuous improvement beyound compliance.</p>
            <p>Everyone who works for or on behalf of Mazuka Nigeria Limited: staff, sub-contractor, supplier and visitor is responsible for ensuring that his or her actions is consistent with these aims. Getting HSE right is crucial to the well-being and warefare of our people and to the success of our business as well as that of our clients.</p>
            
        </div>
        </div> 
        
    </div>
    
  )
}

export default Home