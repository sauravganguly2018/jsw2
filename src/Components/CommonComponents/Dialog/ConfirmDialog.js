import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const ConfirmDialog = ({ open, onClose, onConfirm, title, message, btnCancle, btnConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{message}</DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    {btnCancle}
                </Button>
                <Button onClick={onConfirm} color="primary" autoFocus>
                    {btnConfirm}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
