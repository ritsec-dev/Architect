import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

import API from '../API';

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
  },
  inlineIcon: {
    padding: "0",
  },
  table: {
    margin: "0"
  }
})

class UserExpandable extends React.Component {
  constructor() {
    super();

    this.state = { hover: false };
  }

  toggleHover = (e) => {
    this.setState({hover: !this.state.hover});
  }

  sampleDelete = (e) => {
    API.delete(`/members`)
      .then(res => {
        console.log(res)
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <ExpansionPanel className={classes.userExpandable} 
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {this.props.name}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {this.props.team}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {this.props.email}
          </Typography>

          {this.state.hover ?
            <IconButton aria-label="delete" className={classes.inlineIcon} onClick={this.sampleDelete}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          :
            ""
          }
          
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <table border="0" width="100%" align="right" style={this.props.table}>
            <tbody>
              <tr>
                <td><Typography>Email Address: {this.props.email}</Typography></td>
                <td><Typography>Competition Role: {this.props.role}</Typography></td>
                <td><Typography>Phone Number: {this.props.phone}</Typography></td>
                </tr>
            </tbody>
          </table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default withStyles(styles)(UserExpandable);