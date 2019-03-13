import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function InstagramBtn(props) {
  const { classes } = props;
  return (
    <div>     
      <IconButton className={classes.margin}>
          <i className="fab fa-instagram"></i>
      </IconButton>
    </div>
  );
}

InstagramBtn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InstagramBtn);