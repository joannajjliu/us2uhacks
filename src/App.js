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
          <AppBar position="static" style={{backgroundColor: '#adf3a9'}}>
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

              <Link to='/user'>
                <Button color="inherit">Need food</Button>
              </Link>
              <Link to='/donate'>
                <Button color="inherit">Donate food</Button>
              </Link>
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
          <Route path="/locator">
            <MapContainer/>
          </Route>
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

