import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-scroll'
import SideDrawer from '././SideDrawer/SideDrawer';
import Logo from './Logo/Logo';
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
      <div id="navBar" className={classes.root}>
      <Headroom>
<AppBar position="static">

          <Toolbar>
            <Logo />
            <Hidden xsDown>
                <Link
                  className="navigation__link"
                  smooth={true}

                  to="section_1"
                  offset={0}
                  duration={500}
                >Home
                </Link>
                <Link
                  className="navigation__link"
                  smooth={true}

                  to="section_2"
                  offset={0}
                  duration={500}
                >About Us
                </Link>
                <Link
                  className="navigation__link"
                  smooth={true}

                  to="section_3"
                  offset={0}
                  duration={500}
                >Prices
                </Link> 
                <Link
                  className="navigation__link"
                  smooth={true}

                  to="blog"
                  offset={0}
                  duration={500}
                >Blog
                </Link> 
                <a
                  className="navigation__link"
                  href="/product"
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
        </Headroom>

      </div>
    );
  }
  
  NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(NavBar);