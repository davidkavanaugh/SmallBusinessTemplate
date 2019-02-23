import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-scroll'

const styles = {
  list: {
    width: 250,
  },
  sideList: {
    width: 'auto',
  },
};




class SwipeableTemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    anchorEl: null,
    selectedIndex: 0,
  };

 toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Home'].map((option, index) => (
            <Link 
              to="section_1"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
            <MenuItem 
            key={option}
            onClick={this.toggleDrawer('right', false)}
            >
            {option}
          </MenuItem>
          </Link>
          ))}
          {['Section 2'].map((option, index) => (
            <Link 
              to="section_2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
            <MenuItem 
            key={option}
            onClick={this.toggleDrawer('right', false)}
          >
            {option}
          </MenuItem>
          </Link>
          ))}
          {['Section 3'].map((option, index) => (
            <Link 
              to="section_3"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
            <MenuItem 
            key={option}
            onClick={this.toggleDrawer('right', false)}
          >
            {option}
          </MenuItem>
          </Link>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <IconButton onClick={this.toggleDrawer('right', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
        </IconButton>
        
        <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
        >

          
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);