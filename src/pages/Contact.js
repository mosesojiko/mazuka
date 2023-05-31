import React from 'react'
import {useState} from 'react'
import {send} from 'emailjs-com'
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import './Contact.css'


function Contact() {
    const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false);
  const [error, setError] = useState(false)
  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    message: "",
    reply_to: ""
  })

  const handleChange = (e) =>{
    setToSend({...toSend, [e.target.name]: e.target.value})
  }
  const onSubmit= (e) => {
    e.preventDefault()
    setLoading(true)
    send(
      "service_yz0b8je",
      "template_gegwjx8",
      toSend,
      "H8-jRHAbq0AO9pdM2"
    )
    .then((response) =>{
      console.log("SUCCESS!", response.status, response.text);
      setToSend({
        first_name: "",
    last_name: "",
    message: "",
    reply_to: ""
      })
      setLoading(false)
      setSuccessMessage(true)
    })
    .catch((err) => {
      console.log("FAILED...", err)
      setLoading(false)
      setError(true)
    })
  }

  return (
    <div>
        {/* contact form */}
        <div className='form-container' id="contact" style={{paddingBottom:"50px"}}>
          
          <form onSubmit={onSubmit}>
          <h2>Contact Us</h2>
          <p>You want to get in touch with us, please fill this form below and we will get back to you within 24 hours.</p>
            <label htmlFor="first_name">First Name</label>
    <input type="text" id="first_name" name="first_name" placeholder="Your first name" required
    value={toSend.first_name}
    onChange={handleChange}
    ></input>

    <label htmlFor="last_name">Last Name</label>
    <input type="text" id="last_name" name="last_name" placeholder="Your last name" required
    value={toSend.last_name}
    onChange={handleChange}
    ></input>

    <label htmlFor="email">Email</label>
<input type="text" name="reply_to" placeholder="Your email" required
    value={toSend.reply_to}
    onChange={handleChange}
    ></input>

    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" placeholder="Type your message.." style={{height:"200px"}} required
    value={toSend.message}
    onChange={handleChange}
    ></textarea>
    

    {
      successMessage && <Stack sx={{ width: '90%' }} spacing={2}>
      <Alert severity="success" onClose={() => setSuccessMessage(false)}>Your message has been sent successfully.</Alert>

  </Stack>
     }
     {
            error && <Stack sx={{ width: '90%' }} spacing={2}>
              <Alert severity="error" onClose={() => setError(false)}>Error sending message. Please, use the contact details below.</Alert>
      
            </Stack>
                }
     <input type="submit" value="Submit"></input> 
     {loading && <img style={{width:"50px", marginLeft:"10px"}} src="/images/loaders/gif3.gif" alt="" />}
     
          </form>
        </div>
        
        {/* end of contact form */}

        {/*contact names */}

        <div className='talk-to-staff'>
          <p>You want to communicate directly to a Mazuka staff. Feel free to reach out to any of our staff below:</p>
        </div>

        <div className='mazuka-contact-persons'>
            <div>
              <p className='personnel-name'>Mr. Moses Ojiko</p>
              <p className='personnel-position'>Business Development/IT</p>
              <p className='contact-details'><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>+2348133806965</span></p>
              <p className='contact-details'><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>moses@mazukaltd.com</span></p>
            </div>
            <div>
            <p className='personnel-name'>Mr. Abel Sabo</p>
              <p className='personnel-position'>Head of Operation</p>
              <p className='contact-details'><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>+2348060592677</span></p>
              <p className='contact-details'><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>abel.sabo@mazukaltd.com</span></p>
            </div>
            <div>
            <p className='personnel-name'>Mr. Maxwell Okoh</p>
              <p className='personnel-position'>Accountant</p>
              <p className='contact-details'><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>+2348052763201</span></p>
              {/* <p><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>maxwell@mazukaltd.com</span></p> */}
            </div>
          </div>
          <div className='mazuka-contact-persons'>
            <div>
            <p className='personnel-name'>Mr. Igbunuoghene P.E. Oghenemaro</p>
              <p className='personnel-position'>Manager</p>
              <p className='contact-details'><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>+2348056345166</span></p>
              <p className='contact-details'><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>oghenemaro@mazukaltd.com</span></p>
            </div>
            <div>
            <p className='personnel-name'>Dcn. Ugoh Cyriacus</p>
              <p className='personnel-position'>Managing Director</p>
              <p className='contact-details'><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>+2348035665919</span></p>
              <p className='contact-details'><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>cyriacus@mazukaltd.com</span></p>
            </div>
            <div>
            <p className='personnel-name'>Mrs. Atim Uzor</p>
              <p className='personnel-position'>Chairman/CEO</p>
              <p className='contact-details'><span><CallIcon/></span> <span style={{marginLeft:"5px"}}>+2348065710202</span></p>
              <p className='contact-details'><span><EmailIcon/></span> <span style={{marginLeft:"5px"}}>mma@mazukaltd.com</span></p>
            </div>
          </div>
          
      
    </div>
  )
}

export default Contact