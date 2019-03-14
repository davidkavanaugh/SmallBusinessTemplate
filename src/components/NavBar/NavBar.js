import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-scroll'
import Headroom from 'react-headroom';
import SideDrawer from '././SideDrawer/SideDrawer';
import Logo from './Logo/Logo';

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
      <div id="navBar" className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Logo />
            <Hidden xsDown>
                <Link
                  className="navigation__link"
                  activeClass="active"
                  to="section_1"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >Home
                </Link>
                <Link
                  className="navigation__link"
                  activeClass="active"
                  to="section_2"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >Section 2
                </Link>
                <Link
                  className="navigation__link"
                  activeClass="active"
                  to="section_3"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >Section 3
                </Link> 
                <a
                  className="navigation__link"
                  activeClass="active"
                  href="/product"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >Store
                </a>               
            </Hidden>
            <Hidden smUp>
              <SideDrawer />
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