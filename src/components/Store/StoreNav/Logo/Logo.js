import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-scroll'


import './Logo.css';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    }
  };

class Logo extends Component {
    
    render() {
    const { classes } = this.props;
      return (
        <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link id="logo"
                  to="store"
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                Logo
            </Link>
        </Typography>
      )
    }
  }
  export default withStyles(styles)(Logo);

