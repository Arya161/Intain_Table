import React from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button } from "@mui/material";
import "./AddTrancheModal.css"; // Import CSS file

const AddTrancheModal = ({ open, handleClose, addNewEntry }) => {
  const [formData, setFormData] = React.useState({
    id: "",
    name: "",
    SIP: "",
    bal: "",
    rate: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newEntry = {
      id: formData.id,
      name: formData.name,
      SIP: formData.SIP,
      bal: formData.bal,
      rate: formData.rate,
      act: "View/Edit Delete"
    };
    addNewEntry(newEntry);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}  className="modal-container">
      <DialogTitle className="modal-title">Add Tranche</DialogTitle>
      <DialogContent className="modal-content">
        <p>Id</p>
        <TextField className="input-field" name="id" value={formData.id} onChange={handleInputChange} />
        <p>Name</p>
        <TextField className="input-field" name="name" value={formData.name} onChange={handleInputChange} />
        <p>CUSIP</p>
        <TextField className="input-field" name="SIP" value={formData.SIP} onChange={handleInputChange} />
        <p>Original Principal Balance</p>
        <TextField className="input-field" name="bal"  value={formData.bal} onChange={handleInputChange} />
        <p>Interest Rate</p>
        <TextField className="input-field" name="rate" value={formData.rate} onChange={handleInputChange} />
        <div className="button-container">
          <Button onClick={handleClose} className="button">Cancel</Button>
          <Button onClick={handleSubmit} className="button">Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTrancheModal;