import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';    


export default function CreateMember() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const sendData = () => { 
        setOpen(false);
    };
  
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add Member
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
                fullWidth
                
            />
            <TextField
              margin="dense"
              id="email"
              label="RIT Email Address"
              type="email"
              fullWidth
            />

            <TextField
                margin="dense"
                id="role"
                label="Role"
                type="text"
                fullWidth
            />

            <TextField
                margin = "dense"
                id = "phone"
                label = "Phone Number"
                type="tel"
            />
            <TextField
                margin="dense"
                id="team"
                label="Team"
                type="text"
                fullWidth
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={sendData} color="primary">
              Add User
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }