
import useMediaQuery from '@mui/material/useMediaQuery'
import pageData from '@/content/pageData';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router'



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

export default function BasicHeader({headerStyle = null}){
  const router = useRouter()

  const pages = Object.keys(pageData)

  const matches = useMediaQuery('(min-width:600px)')

  if(headerStyle){
    
  }

  const handleNav = (e, url) => {
    e.preventDefault()
    router.push(url)
  }

  return(
    <AppBar>
      <Toolbar>
        {matches &&
          <>
            {pages.map(page =>
              <MenuItem key={page} onClick={(e) => handleNav(e, pageData[page].url)}>
                <Typography textAlign='center'>{pageData[page].buttonTitle}</Typography>
              </MenuItem>
            )}
          </>
        }
        {!matches &&
          <IconButton>
            <MenuIcon/>
          </IconButton>
        }
      </Toolbar>
    </AppBar>
  );
}