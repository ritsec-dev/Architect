import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';    
import { withStyles } from '@material-ui/styles';
import API from '../API';


const styles = theme => ({
  nothing: {
    color: "black",
  }, 
  CreateTeamButton: {
    display: 'flex',
    flex: 1,
    marginLeft: 'auto',
    position: 'relative',
    textAlign: 'center',
    justifyContent: 'flex-end',
  },
})



class CreateTeam extends React.Component
{

    handleOpen = () => {
      this.setState({open: true});

    };

    handleClose = () => {
      this.setState({open: false});

    };
    onChange=(e)=> {
      this.setState({ [e.target.id]: e.target.value});
    }

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        open: false
      }
      this.onChange = this.onChange.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }

    handleSubmit = event => {
      const { name } = this.state;
      API.post('/team/add', {"name": name});
      this.setState({open: false});
    }

    render() {
         
        //const { classes } = this.props;
      
        return (
          <div>
            <div style={this.state.CreateTeamButton}>
              <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                Add Team
              </Button>
            </div>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Add Team</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please enter team name.
                </DialogContentText>
                
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    onChange={this.onChange}
                    fullWidth
                    
                />

              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.handleSubmit} color="primary">
                  Add Team
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
    }
  }

export default withStyles(styles)(CreateTeam)