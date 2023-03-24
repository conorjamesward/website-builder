import Link from '@mui/material/Link';
import styles from '@/styles/Footer.module.css'
import pageData from '@/content/pageData';
import Typeograpghy from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

function SocialSignature ({signature, social}){
  return(
    <div className={styles.credit}>
      {social.length > 0 &&
        <div className={styles.social}>
          {social.map(social =><a key={social.title} href={social.url}>{social.icon}</a>)}
        </div>
      }
      {signature.signatureURL !== null &&
        <Link underline='hover' href={signature.signatureURL}>{signature.signature}</Link>
      }
      {signature.signatureURL === null &&
        <p>{signature.signature}</p>
      }
      <p className={styles.copy}>&copy; {signature.copyright}</p>
    </div>
  )
}

export default function BasicFooter(props){

  const {social, contact, signature} = props.footerData
  const pages = Object.keys(pageData)

  const small = useMediaQuery('(max-width:480px)');

  return(
    <footer>
      <div className={styles.footerMain}>
        <div className={styles.siteMap}>
          <Typeograpghy variant='h6'>Site Map</Typeograpghy>
          {
            pages.map(page => <Link underline='hover' key={`footer-${pageData[page].headTitle}`} href={pageData[page].url}>{pageData[page].buttonTitle}</Link>)
          }
        </div>
        {!small &&
          <SocialSignature signature={signature} social={social}/>
        }
        <div className={styles.contactContainer}>
          {contact.email &&
            <a className={styles.contactLink} rel='noreferrer' target="_blank" href={`mailto:${contact.email.address}`}>
              {contact.email.icon}
              <p className={styles.contactInfo}>{contact.email.address}</p>
            </a>
          }
          {contact.phone &&
            <a className={styles.contactLink} rel='noreferrer' target="_blank" href={`tel:${contact.phone.number}`}>
              {contact.phone.icon}
              <p className={styles.contactInfo}>{contact.phone.number}</p>
            </a>
          }
          {contact.location &&
          <a className={styles.contactLink} rel='noreferrer' target="_blank" href={contact.location.url}>
            {contact.location.icon}
            <p className={styles.contactInfo}>{contact.location.address}</p>
          </a>
          }
          {contact.hours &&
            <span className={styles.contactLink}>
              {contact.hours.icon}
              <p className={styles.contactInfo}>{contact.hours.hours}</p>
            </span>
          }
        </div>
      </div>
      {small &&
        <SocialSignature signature={signature} social={social}/>
      }
    </footer>
  );
}