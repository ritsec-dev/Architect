import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  heading: {
    flexBasis: '20%',
    flexShrink: 0,
  },
  secondaryHeading: {
    flexBasis: '33.33%',
    flexShrink: 0,
    color: "gray",
  },
  tertiaryHeading: {
    color: "gray",
  }
})

class UserExpandable extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <ExpansionPanel className={classes.userExpandable}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header">
        <Typography className={classes.heading}>
          {this.props.name}
        </Typography>
        <Typography className={classes.secondaryHeading}>
          {this.props.team}
        </Typography>
        <Typography className={classes.secondaryHeading}>
          {this.props.email}
        </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{this.props.email}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default withStyles(styles)(UserExpandable);