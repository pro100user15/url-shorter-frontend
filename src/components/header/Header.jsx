import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" color="inherit">
          Url Shorter
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;