import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import us2u_logo_green from '../us2u_logo_green.png';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    display: 'block',
    margin: '2% auto',
    align: 'center',
    width: '80%',
    height: 'auto'
  },
  optionsText: {
    fontSize: '3em',
    textAlign:'center'
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  customButton: {
    background: '#4CAF50',
    '&:hover': {
        backgroundColor: '#357E4D'
    },
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '2.5em',
    margin: '4px 2px',
    cursor: 'pointer'
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
        <div>
            <img src={us2u_logo_green} alt="us2uLogo" className={classes.logo}/>
        </div>
        <div>
            <Typography className={classes.optionsText}>Do you...</Typography>
        </div>  
        <div className={classes.button}>  
            <Link to='/need'>
              <Button
                  variant="contained" 
                  className={classes.customButton}
              >
                  Need food?
              </Button>
            </Link>
            <Button
                variant="contained"
                className={classes.customButton}
            >
                Want to donate food?
            </Button>
            
        </div>
    </>
    // <Router>
    //   <div className={classes.root}>
    //     <AppBar position="static" style={{backgroundColor: 'green'}}>
    //       <Toolbar >
    //         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //           <MenuIcon />
    //         </IconButton>
    //         <Link to='/home'>
    //             <Typography variant="h6" className={classes.title}>
    //                 Home
    //             </Typography>
    //         </Link>

    //         <div style={{flex:1}}></div>

    //         <Link to='/user'>
    //           <Button color="inherit">User</Button>
    //         </Link>
    //         <Link to='/donate'>
    //           <Button color="inherit">Donate</Button>
    //         </Link>
    //       </Toolbar>
    //     </AppBar>
    //   </div>
    // </Router>
  );
}