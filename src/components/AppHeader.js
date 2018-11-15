import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core';
import LoginButton from './LoginButton';


const AppHeader = ({classes}) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Ecommerce ERP
      </Typography>
      <div className={classes.flex}>
        <LoginButton />
      </div>
    </Toolbar>
  </AppBar>
);

const styles = {
  flex: {
    flex: 1
  },
}

export default withStyles(styles)(AppHeader);