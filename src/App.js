import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor: 'green'}}>
          <Toolbar >
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
            <Link to='/user'>
              <Button color="inherit">User</Button>
            </Link>
            <Link to='/donate'>
              <Button color="inherit">Donate</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </Router>
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
