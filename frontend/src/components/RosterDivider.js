import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class RosterDivider extends React.Component {
  render () {
    const { classes } = this.props;

    return (
      <ExpansionPanel disabled>
        <ExpansionPanelSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            {this.props.team}
          </Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(RosterDivider);