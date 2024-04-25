import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" sx={{
      top: 'auto',
      bottom: 0,
      marginTop: '20px',
    }}>
      <Toolbar>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Url Shorter. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;