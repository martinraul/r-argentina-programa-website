import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExternalLinks from '../components/ExternalLinks';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#0c9ae7',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  menuButton: {
    color: 'white',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  appBarButton: {
    color: 'white',
    display: 'flex',
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();
  const { onClick } = props;

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            aria-label="menu"
            edge="start"
            onClick={onClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            r/Argentina Programa
          </Typography>
          <Hidden xsDown implementation="css">
            <ExternalLinks/>
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;