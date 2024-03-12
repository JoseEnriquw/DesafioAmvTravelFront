import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@mui/material'
import './Navbar.css'

const Navbar: React.FC = () => {
  return (
    <AppBar content='' >
      <Toolbar style= {{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" className='tittle'>
          My Booking Manager
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '55%' }}>
          <Typography variant="h6" component={Link} to="/" color="inherit" style={{ marginRight: '30%' }}>
            Home
          </Typography>
          <Typography variant="h6" component={Link} to="/Tour" color="inherit" style={{ marginRight: '30%' }}>
            Tour
          </Typography>
          <Typography variant="h6" component={Link} to="/Booking" color="inherit" >
            Booking
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
