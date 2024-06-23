import { AppBar, Button, IconButton, Stack, Toolbar } from '@mui/material'
import React from 'react'


// const navbaritems = ["Add Restaurant","Login","Sign Up"]
function Navbar() {
  return (
    <AppBar position="sticky" sx={{backgroundColor: 'white'}} component="nav">
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <IconButton size='small' edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <img src='./images/logo.png' className='h-11' />
          </IconButton>
          <Stack direction="row" spacing={2}>
              <Button variant="text">Add Restaurant</Button>
              <Button variant="text">Login</Button>
              <Button variant="text">Sign Up</Button>
          </Stack>
          <Button>Contact Us</Button>
          
       

      </Toolbar>

    </AppBar>
  )
}

export default Navbar