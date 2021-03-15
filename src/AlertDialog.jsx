import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({isOpen, handleRemoveItem}) {
    const [open, setOpen] = React.useState(isOpen);

    useEffect(() => {
      setOpen(isOpen);
    }, [isOpen])


    const handleClose = () => {
      setOpen(false);
    };
  
    const handleConfirm = () => {
      setOpen(false);
      handleRemoveItem();
    };
  
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              No
            </Button>
            <Button onClick={handleConfirm} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  