import React from 'react'
import {AppBar,Container,Toolbar,Typography,Select,MenuItem} from '@mui/material';
import { useCryptoState } from '../utils/Context';
// import { Link } from 'react-router-dom';

const Header = () => {
    const {currency,setCurrency}=useCryptoState();
  return (
    <AppBar color='transparent' position='static'>
        <Container>
            
            <Toolbar>
            {/* <Link to={'/'}> */}
                <Typography  variant="h6" className='title' sx={{ flex:1,
                color:'gold',
                fontFamily:'Montserrat',
                fontWeight:'bold',
                cursor:'pointer',}}
                >
                    Crypto Hunter
                </Typography>
                {/* </Link> */}

                <Select variant='outlined' sx={{width:100,height:40,marginLeft:15}} value={currency} onChange={e=>setCurrency(e.target.value)}  >
                    <MenuItem value={'INR'}>INR</MenuItem>
                    <MenuItem value={'USD'}>USD</MenuItem>
                </Select>
            </Toolbar>

        </Container>
      
    </AppBar>
  )
}

export default Header
