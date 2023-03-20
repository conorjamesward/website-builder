import Container from '@mui/material/Container';
import '@/styles/Footer.module.css'

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
      <div id="signature">
        {signature.signatureURL !== null &&
          <a href={signature.signatureURL}>{signature.signature}</a>
        }
        {signature.signatureURL === null &&
          <p>{signature.signature}</p>
        }
        <p>&copy; {signature.copyright}</p>
      </div>
    </footer>
  );
}