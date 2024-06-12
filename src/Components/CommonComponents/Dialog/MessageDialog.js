import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const MessageDialog = ({ open, onClose, message, btnName }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Message</DialogTitle>
            <DialogContent>{message}</DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    {btnName}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MessageDialog;
