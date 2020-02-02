import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import logo from './../media/ellehack.jpg';
import logo2 from './../media/climatechange.jpg';
import logo3 from './../media/tedx.jpg';
import Chip from '@material-ui/core/Chip';
import {
    Link as RLink
  } from "react-router-dom";
import Popover from '@material-ui/core/Popover';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Food near you
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              These are events near you that are offering leftover food!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    List
                  </Button>
                </Grid>
                <Grid item>
                <RLink to='/locator'>
                  <Button variant="outlined" color="primary">
                    Map
                  </Button>
                </RLink>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={logo}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    </Typography>
                    <Typography>
                    40 leftover portions ElleHacks. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Chip label="10m" color="primary" />
                    <Button size="small" color="primary">
                      Details
                    </Button>
                    <Button size="small" color="primary">
                      Reserve
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={logo2}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    </Typography>
                    <Typography>
                    
                    57 leftover portions at Annual Climate Conference. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Chip label="550m" color="primary"/>
                    <Button size="small" color="primary">
                      Details
                    </Button>
                    <Button size="small" color="primary">
                      Reserve
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={logo3}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    </Typography>
                    <Typography>
                      37 leftover portions at TedXNorthYork. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Chip label="600m" color="primary"/>
                    <Button size="small" color="primary">
                      Details
                    </Button>
                    <Button size="small" color="primary">
                      Reserve
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Page 1 / 1
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}