import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import MapContainer from './components/MapContainer';
<<<<<<< HEAD
=======
import SignIn from './components/SignIn';
import NeedFood from './components/NeedFood';
>>>>>>> 69dde1b729e127ebe4ed74eed47c3b52607e5ed8

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
    <Router>
      <div>
        <div className={classes.root}>
<<<<<<< HEAD
          <AppBar position="static" style={{backgroundColor: '#adf3a9'}}>
=======
          <AppBar position="static" style={{backgroundColor: '#4CAF50'}}>
>>>>>>> 69dde1b729e127ebe4ed74eed47c3b52607e5ed8
            <Toolbar >
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Link to='/'>
                  <Typography variant="h6" className={classes.title}>
                      Home
                  </Typography>
              </Link>

              <div style={{flex:1}}></div>

<<<<<<< HEAD
              <Link to='/user'>
=======
              <Link to='/need'>
>>>>>>> 69dde1b729e127ebe4ed74eed47c3b52607e5ed8
                <Button color="inherit">Need food</Button>
              </Link>
              <Link to='/donate'>
                <Button color="inherit">Donate food</Button>
              </Link>
<<<<<<< HEAD
=======
              <Link to='/signin'>
                <Button color="inherit">Sign In</Button>
              </Link>
>>>>>>> 69dde1b729e127ebe4ed74eed47c3b52607e5ed8
            </Toolbar>
          </AppBar>
        </div>

        {/* <NavBar /> */}
        <Switch>
          <Route path="/user">
            <HomePage />
          </Route>
          <Route path="/donate">
            <HomePage />
          </Route>
<<<<<<< HEAD
          <Route path="/locator">
            <MapContainer/>
          </Route>
=======
          <Route path="/need">
            <NeedFood />
          </Route>
          <Route path="/locator">
            <MapContainer/>
          </Route>
          <Route path="/signin">
            <SignIn/>
          </Route>
>>>>>>> 69dde1b729e127ebe4ed74eed47c3b52607e5ed8
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer />
        {/* <NavBar />
        <HomePage />
        <MapContainer />
        <div style={{marginTop: '100px'}}/>
        <Footer /> */}
    </>
  );
}

// function App() {
//   return (
//     <div style={{height:'100%'}}>
//       <Toolbar />
//       <SideDrawer />
//       <main style={{marginTop: '64px'}}>
//         <p>This is the page content</p>
//       </main> 
//     </div>
//   );
// }

// export default App;

