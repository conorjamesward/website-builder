import FacebookIcon from '@mui/icons-material/Facebook';

const date = new Date()

const footer = {
  social:[
    {
      icon:<FacebookIcon/>,
      url:''
    },
  ],
  contact:{

  },
  signature:{
    signature:'Site built by Conor',
    signatureURL:'https://conorjamesward.com/',
    copyright:`${date.getFullYear()}. All Rights Reserved`
  }

}

export default footer