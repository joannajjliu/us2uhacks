import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import us2u_logo_green from '../us2u_logo_green.png';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // fontFamily: 'acme'
  },
  menuButton: {
    marginRight: theme.spacing(2)
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
    // fontFamily: 'acme'
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
    background: '#18a286',
    '&:hover': {
        backgroundColor: '#adf3a9'
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
            <Button
                variant="contained" 
                className={classes.customButton}
                   
            >
                Need food?
            </Button>
            <Button
                variant="contained"
                className={classes.customButton}
            >
                Want to donate food?
            </Button>
        </div>
    </>
  );
}