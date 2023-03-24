import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const date = new Date()

const iconColor = 'primary'
const socialIconsSize = 'large'
const contactIconsSize = 'small'

const footer = {
  social:[
    {
      title:'Facebook',
      icon:<FacebookIcon fontSize={socialIconsSize} color={iconColor}/>,
      url:''
    },
    {
      title:'GitHub',
      icon:<GitHubIcon fontSize={socialIconsSize} color={iconColor}/>,
      url:''
    },
  ],
  contact:{
    email:{
      address:'email@email.com',
      icon:<EmailIcon fontSize={contactIconsSize} color={iconColor}/>,
    },
    phone:{
      number:'555-555-5555',
      icon:<LocalPhoneIcon fontSize={contactIconsSize} color={iconColor}/>,
    },
    location:{
      address:'1600 Pennsylvania Avenue NW',
      url:'https://www.google.com/maps/place/The+White+House/@38.8987691,-77.0372802,17z/data=!3m1!5s0x89b7b7bce13fc169:0xb825fceceddb4d3c!4m15!1m8!3m7!1s0x89b7b7bd0e41c31b:0x5661d3aa16e785d4!2sPennsylvania+Avenue+NW,+Washington,+DC!3b1!8m2!3d38.8987649!4d-77.0350915!16s%2Fg%2F1tgb87cq!3m5!1s0x89b7b7bcdecbb1df:0x715969d86d0b76bf!8m2!3d38.8976763!4d-77.0365298!16zL20vMDgxc3E?hl=en&authuser=0',
      icon:<MapIcon fontSize={contactIconsSize} color={iconColor}/>,
    },
    hours:{
      hours:'9-5 Monday Through Friday',
      icon:<AccessTimeFilledIcon fontSize={contactIconsSize} color={iconColor}/>,
    }
  },
  signature:{
    signature:'Site built by Conor',
    signatureURL:"https://conorjamesward.com/",
    copyright:`${date.getFullYear()}. All Rights Reserved`
  }

}

export default footer