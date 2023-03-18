import pageData from '@/content/pageData';
import { useRouter } from 'next/router'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

export default function BasicHeader({headerStyle = null}){
  const router = useRouter()

  const pages = Object.keys(pageData)

  if(headerStyle){
    
  }

  const handleNav = (e, url) => {
    e.preventDefault()
    router.push(url)
  }

  return(
    <AppBar>
      <Toolbar sx={{padding:'5px'}}>
        <>
          {pages.map(page =>
            <MenuItem key={page} onClick={(e) => handleNav(e, pageData[page].url)}>
              <Typography textAlign='center'>{pageData[page].buttonTitle}</Typography>
            </MenuItem>
          )}
        </>
      </Toolbar>
    </AppBar>
  );
}