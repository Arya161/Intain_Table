import React from 'react';
import { Modal, Button } from '@mui/material';
import './viewmodal.css';

const ViewModal = ({ open, handleClose, rowData }) => {
  if (!rowData) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="view-modal-title"
      aria-describedby="view-modal-description"
    >
      <div className='view'>
        <h2 id="view-modal-title">View Details</h2>
        <p id="view-modal-description">Name: {rowData.name}</p>
        <p id="view-modal-description">CUSIP {rowData.SIP}</p>
        <p id="view-modal-description">Original Principal Balance: {rowData.bal}</p>
        <p id="view-modal-description">Interest Rate: {rowData.rate}</p>
        <Button onClick={handleClose}>Close</Button>
      </div>
    </Modal>
  );
};

export default ViewModal;