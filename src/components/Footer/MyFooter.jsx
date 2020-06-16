import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      <Link href="https://github.com/AbubakerShekhani/covid19-tracker-reactapp-panacloud-bc2020">
        View on Github
      </Link>
      <br/>
      {'Copyright © '}
      <Link color="inherit" href="http://abubakershekhani.com/blogs">
        Abubaker Shekhani
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '10vh',
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[1000],
  },
}));

const MyFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer>
        <Container maxWidth="sm">
          <Typography variant="body1">COVID-19 Tracker &amp; World Statistics</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default MyFooter