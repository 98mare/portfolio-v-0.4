import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

const iconsStyle = {
  color: 'rgb(207, 83, 52)',
  fontSize: '30px',
  marginLeft: '20px',
  marginTop: '20px'
}

function Socialmedia() {
  return (
    <div className='socialmedia-container'>
      <FacebookIcon style={iconsStyle} />
      <LinkedInIcon style={iconsStyle} />
      <MailIcon style={iconsStyle} />
      <GitHubIcon style={iconsStyle} />
    </div>
  )
}

export default Socialmedia
