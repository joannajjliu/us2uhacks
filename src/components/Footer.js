import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import './Footer.css';

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

export default function Footer() {
  // const classes = useStyles();

  return (
    <Router>
      <div>
        <footer>
          <section class="section-top">
            <div class="col">
              <h3>Contact</h3>
              <p>Email: support@us2u.com</p>
            </div>
            <div class="col">
              <h3>Head Office</h3>
              <p><b>York University</b><br/>4700 Keele St<br />Toronto, ON<br />M3J 1P3</p>
            </div>
            {/* <div class="col">
              <h3>Title</h3>
              <div>Line 2</div>
              <div>Line 3</div>
            </div>
            <div class="col">
              <h3>Title</h3>
              <div>Line 2</div>
            </div> */}
          </section>
          {/* <section class="section-bottom">
            <div>Follow</div>
            <div>Copy right</div>
          </section> */}
        </footer>
      </div>
    </Router>
  );
}