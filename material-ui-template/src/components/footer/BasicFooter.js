import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import styles from '@/styles/Footer.module.css'

export default function BasicFooter(props){

  const {social, contact, signature} = props.footerData

  return(
    <footer>
      <div className={styles.footerMain}>
        <Container>
          {contact.email &&
            <a rel='noreferrer' target="_blank" href={`mailto:${contact.email.address}`}>
              {contact.email.icon}
              <p>{contact.email.address}</p>
            </a>
          }
          {contact.phone &&
            <a rel='noreferrer' target="_blank" href={`tel:${contact.phone.number}`}>
              {contact.phone.icon}
              <p>{contact.phone.number}</p>
            </a>
          }
          {contact.location &&
          <a rel='noreferrer' target="_blank" href={contact.location.url}>
            {contact.location.icon}
            <p>{contact.location.address}</p>
          </a>
          }
          {contact.hours &&
            <span>
              {contact.hours.icon}
              <p>{contact.hours.hours}</p>
            </span>
          }
        </Container>
        <Container>

        </Container>
      </div>
      <div className={styles.credit}>
        {social.length > 0 &&
          <div className={styles.social}>
            {social.map(social =><a href={social.url}>{social.icon}</a>)}
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
    </footer>
  );
}