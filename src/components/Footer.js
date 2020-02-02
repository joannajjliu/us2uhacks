import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './Footer.css';

export default function Footer() {

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
          </section>
        </footer>
      </div>
    </Router>
  );
}