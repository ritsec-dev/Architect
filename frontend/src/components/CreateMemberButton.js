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
  createMemberButton: {
    display: 'flex',
    flex: 1,
    marginLeft: 'auto',
    position: 'relative',
    textAlign: 'center',
    justifyContent: 'flex-start',
  },
})



class CreateMemberButton extends React.Component
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
        email: '',
        phone: '',
        role: '',
        team: '',
        open: false,
        sending: false
      }
      this.onChange = this.onChange.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.onKeyPress.bind(this);
    }

    handleSubmit = event => {
      const { name, email, phone, role, team } = this.state;
      this.setState({sending: true})
      API.post('/user/add', {"name": name, "email": email, "phone": phone, "role": role , "team": team}).then(data => {
        this.setState({open: false});
        window.location.reload(); 
        this.setState({sending: false})
      });
    }

    onKeyPress = event => {
      console.log("Logged keypress:" + event.key);
      if (event.key === "Enter") {
        if(this.state.name !== "" && this.state.email !== "" && this.state.phone !== "" && this.state.role !== "" && this.state.team !== "") {
          this.handleSubmit();
        }
      }
    }


    render() {
         
        const { classes } = this.props;
      
        return (
          <div>
            <div className={classes.createMemberButton}>
              <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                Add Member
              </Button>
            </div>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Add Member</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please enter member information.
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
                <TextField
                  margin="dense"
                  id="email"
                  label="RIT Email Address"
                  type="email"
                  onChange={this.onChange}
                  fullWidth
                />

                <TextField
                    margin = "dense"
                    id = "phone"
                    label = "Phone Number"
                    type="tel"
                    onChange={this.onChange}
                    fullWidth
                />


                <TextField
                    margin="dense"
                    id="role"
                    label="Role"
                    type="text"
                    onChange={this.onChange}
                    fullWidth
                />

                <TextField
                    margin="dense"
                    id="team"
                    label="Team"
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
                  Add User
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
    }
  }

export default withStyles(styles)(CreateMemberButton)