import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-scroll'
import Headroom from 'react-headroom';

import './NavBar.css';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    }
  };
  
  function NavBar(props) {
    
    const { classes } = props;
    
    return (
    <Headroom>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Logo
            </Typography>
            <Hidden xsDown>
                <Link
                  className="navigation__link"
                  activeClass="active"
                  to="section_1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Section 1
                </Link>
                <Link
                  className="navigation__link"
                  activeClass="active"
                  to="section_2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Section 2
                </Link>
                <Link
                  className="navigation__link"
                  activeClass="active"
                  to="section_3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Section 3
                </Link>              
            </Hidden>
            <Hidden smUp>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
      </Headroom>
    );
  }
  
  NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(NavBar);