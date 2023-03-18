import Container from '@mui/material/Container';
import '@/styles/Footer.module.css'

export default function BasicFooter(props){

  const {social, contact, signature} = props.footerData

  console.log(!signature.signatureURl)

  return(
    <footer>
      <div id="mainFooter">
        <Container>

        </Container>
        <Container>

        </Container>
      </div>
      <div id="signature">
        {signature.signatureURl !== null &&
          <a href={signature.signatureURl}>{signature.signature}</a>
        }
        {!signature.signatureURl &&
          <p>{signature.signature}</p>
        }
        <p>&copy; {signature.copyright}</p>
      </div>
    </footer>
  );
}