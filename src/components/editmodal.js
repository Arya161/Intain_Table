import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import './editmodal.css';

const EditModal = ({ open, handleClose, rowData, handleEdit }) => {
  const [newName, setNewName] = useState(rowData ? rowData.name : '');


  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = () => {
    handleEdit(rowData.id, newName);
    handleClose();
  };

  if (!rowData) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-modal-title"
      aria-describedby="edit-modal-description"
    >
      <div className='edit'>
        <h4 id="edit-modal-title">Edit Name</h4>
        <TextField
          value={newName}
          onChange={handleChange}
        />
        <div>
        <Button class="btn" onClick={handleSubmit}>Save</Button>
        <Button onClick={handleClose}>Cancel</Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;