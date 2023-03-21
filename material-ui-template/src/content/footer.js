import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const date = new Date()

const footer = {
  social:[
    {
      icon:<FacebookIcon fontSize='large'/>,
      url:''
    },
    {
      icon:<GitHubIcon fontSize='large'/>,
      url:''
    },
  ],
  contact:{
    email:{
      address:'email@email.com',
      icon:<EmailIcon fontSize='large'/>,
    },
    phone:{
      number:'555-555-5555',
      icon:<LocalPhoneIcon fontSize='large'/>,
    },
    location:{
      address:'1600 Pennsylvania Avenue NW, Washington, DC 20500',
      url:'https://www.google.com/maps/place/1600+Pennsylvania+Avenue+NW,+Washington,+DC+20500/@38.8975383,-77.0409888,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7b78e00410e73:0xac8125363999a8f!8m2!3d38.8975342!4d-77.0365041!16s%2Fg%2F11c2hwc1d2?authuser=0',
      icon:<MapIcon fontSize='large'/>,
    },
    hours:{
      hours:'9-5 Monday Through Friday',
      icon:<AccessTimeFilledIcon fontSize='large'/>,
    }
  },
  signature:{
    signature:'Site built by Conor',
    signatureURL:"https://conorjamesward.com/",
    copyright:`${date.getFullYear()}. All Rights Reserved`
  }

}

export default footer