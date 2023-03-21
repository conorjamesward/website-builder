import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import styles from '@/styles/Footer.module.css'

export default function BasicFooter(props){

  const {social, contact, signature} = props.footerData

  return(
    <footer>
      <div id="mainFooter">
        <Container>

        </Container>
        <Container>

        </Container>
      </div>
      <div className={styles.credit}>
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