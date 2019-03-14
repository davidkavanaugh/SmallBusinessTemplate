import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div className="lineHeight">
     <Button
        variant="outlined" 
        color="primary" 
        className={classes.button}>
        <Link 
            to="section_2"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
            More Info
        </Link>
      </Button>
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);